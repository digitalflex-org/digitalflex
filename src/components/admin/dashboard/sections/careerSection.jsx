'use client';

import { useEffect, useRef, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { BriefcaseBusiness, EyeIcon, Pen, Trash2, User } from 'lucide-react';
import Spinner from '@/components/spinner';
import { deleteData, fetchJobById, fetchJobs, updateJob, } from '@/lib/actions/dashboard/dashboard';
import JobViewModal from '@/components/utilities/modals/jobViewModal';
import JobEditModal from '@/components/utilities/modals/jobEditModal';

export default function CareerSection({ content, onChange }) {
    const [Job, setJob] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);
    const [editingJob, setEditingJob] = useState(null);
    const hasFetched = useRef(false);

    useEffect(() => {
        if (!hasFetched.current)
        {
            handleFetchJobs();
            hasFetched.current = true;
        }
    }, []);

    const handleJobDelete = async (jobId) => {
        // console.log('deleting job with id:', jobId);
        if (!jobId) return;
        setLoading(true);
        try
        {
            await deleteData(jobId, 'jobs/deletejobs');
            toast.success('Selected Career Data Deleted!')
        } catch (error)
        {
            if (error?.isAxiosError)
            {
                toast.error('Connection error.', { toastId: 'connection-error' });
            } else
            {
                toast.error('Unexpected error occurred.', { toastId: 'delete-error' });
            }

        } finally
        {
            setLoading(false);
            handleFetchJobs();
        }
    }
    const handleJobEdit = async (jobId) => {
        setLoading(true);
        try
        {
            const res = await fetchJobById(jobId);
            const job = res?.job;
            // console.log('job edit data:', job);
            if (!job) return toast.error('Job not found');
            setEditingJob(job);
        } catch (error)
        {
            toast.error('Failed to load job.');
        } finally
        {
            setLoading(false);
        }
    };

    const handleSaveJob = async (updatedJob) => {
        try
        {
            // console.log('job id data:', updatedJob);
            await updateJob(updatedJob);
            toast.success('Job updated!');
            handleFetchJobs();
            setEditingJob(null);
        } catch (error)
        {
            console.error('Error updating job:', error);
            toast.error('Failed to update job.');
        }
    };
    const handleJobView = async (jobId) => {
        setLoading(true);
        try
        {
            const res = await fetchJobById(jobId);
            // console.log('Fetched job:', res);
            const { job } = res;
            if (!job)
            {
                toast.error('Job not found.', { toastId: 'job-not-found' });
            } else
            {
                toast.success('Job fetched successfully!', { toastId: 'job-success' });

                const newContent = JSON.stringify(job, null, 2);
                if (newContent !== content && typeof onChange === 'function')
                {
                    try
                    {
                        onChange(newContent);
                    } catch (e)
                    {
                        console.error('Error in onChange:', e);
                    }
                }

                setSelectedJob(job);
                // console.log('Set selected job:', job);
            }
        } catch (error)
        {
            console.error('Edit job error:', error);
            if (error?.isAxiosError)
            {
                toast.error('Connection error, please check your network.', { toastId: 'connection-error' });
            } else
            {
                toast.error('An unexpected error occurred.', { toastId: 'unexpected-error' });
            }
        } finally
        {
            setLoading(false);
        }
    };



    const handleFetchJobs = async () => {
        setLoading(true);
        try
        {
            const res = await fetchJobs();
            const { jobs } = res;

            // console.log('job data', jobs);

            if (!jobs || jobs.length === 0)
            {
                toast.info("No jobs found at the moment.", { toastId: 'no-jobs' });
                setJob(jobs);
                onChange('');
                return;
            }

            // toast.success("jobs fetched successfully!", { toastId: 'job-success' });
            setJob(jobs);

            const newContent = JSON.stringify(jobs, null, 2);
            if (newContent !== content)
            {
                onChange(newContent);
            }

        } catch (error)
        {
            if (error?.isAxiosError)
            {
                toast.error('Connection error, please check your network connection.', { toastId: 'connection-error' });
            } else if (error?.status === 404)
            {
                toast.info('No active user at the moment.', { toastId: 'no-active-user' });
                setApplicants([]);
            }
        } finally
        {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className="space-y-4">
                <ToastContainer />
                {loading ? (
                    <Spinner />
                ) : Job.length > 0 ? (
                    <ul className="list-disc list-inside space-y-2 w-full">
                        {Job.map((job) => (
                            <li key={job._id} className="flex items-center justify-between text-gray-700 hover:cursor-pointer">
                                <div onClick={() => handleJobView(job._id)} className="flex items-center gap-2">
                                    <BriefcaseBusiness className="w-4 h-4" />
                                    <span className='flex'>
                                        {job.title} <span className='invisible md:visible'> - {job.slug}</span>
                                    </span>
                                </div>
                                <div className="flex gap-6">
                                    <EyeIcon onClick={() => handleJobView(job._id)} className="hover:text-blue-500" />
                                    <Pen onClick={() => handleJobEdit(job._id)} className="hover:text-blue-500" />
                                    <Trash2 onClick={() => handleJobDelete(job._id)} className="hover:text-red-500" />
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500">No Jobs on the career section at the moment.</p>
                )}

            </div>
            {selectedJob && (
                <JobViewModal
                    job={selectedJob}
                    onClose={() => setSelectedJob(null)}
                />
            )}
            {editingJob && (
                <JobEditModal
                    job={editingJob}
                    onClose={() => setEditingJob(null)}
                    onSave={handleSaveJob}
                />
            )}
        </div>
    );
}
