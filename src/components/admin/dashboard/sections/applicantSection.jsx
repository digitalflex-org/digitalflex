'use client';

import { useEffect, useRef, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { Pen, Trash2, User } from 'lucide-react';
import { fetchApplicantsFromAPI } from '@/lib/actions/applicants/applicantsActions';
import Spinner from '@/components/spinner';
import { fetchApplicantById } from '@/lib/actions/dashboard/dashboard';
import ApplicantViewModal from '@/components/utilities/modals/applicantEditModal';

export default function ApplicantsSection({ content, onChange }) {
    const [applicants, setApplicants] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedApplicant, setSelectedApplicant] = useState(null);
    const hasFetched = useRef(false);

    useEffect(() => {
        if (!hasFetched.current)
        {
            fetchApplicants();
            hasFetched.current = true;
        }
    }, []);

    const handleApplicantEdit = async (applicantId) => {
        setLoading(true);
        try
        {
            const applicant = await fetchApplicantById(applicantId);
            if (!applicant)
            {
                toast.error('Applicant not found.', { toastId: 'applicant-not-found' });
            } else
            {
                toast.success('Applicant fetched successfully!', { toastId: 'applicant-success' });
                const newContent = JSON.stringify(applicant, null, 2);
                if (newContent !== content)
                {
                    onChange(newContent);
                }
                setSelectedApplicant(applicant);
            }
        } catch (error)
        {
            if (error?.isAxiosError)
            {
                toast.error('Connection error, please check your network connection.', { toastId: 'connection-error' });
            } else
            {
                toast.error('An unexpected error occurred.', { toastId: 'unexpected-error' });
            }
        } finally
        {
            setLoading(false);
        }
    };
    

    const fetchApplicants = async () => {
        setLoading(true);
        try
        {
            const res = await fetchApplicantsFromAPI('applicants');
            const { data } = res;

            if (!data || data.length === 0)
            {
                toast.info("No applicants found at the moment.", { toastId: 'no-applicants' });
                setApplicants([]);
                onChange('');
                return;
            }

            toast.success("Applicants fetched successfully!", { toastId: 'applicants-success' });
            setApplicants(data);

            const newContent = JSON.stringify(data, null, 2);
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
                ) : applicants.length > 0 ? (
                    <ul className="list-disc list-inside space-y-2 w-full">
                        {applicants.map((applicant) => (
                            <li key={applicant._id} className="flex items-center justify-between text-gray-700 hover:cursor-pointer">
                                <div className="flex items-center gap-2">
                                    <User className="w-4 h-4" />
                                    {applicant.name} - {applicant.email}
                                </div>
                                <div className="flex gap-6">
                                    <Pen onClick={() => handleApplicantEdit(applicant._id)} className="hover:text-blue-500" />
                                    <Trash2 className="hover:text-red-500" />
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500">No applicants to display.</p>
                )}
            </div>
            {selectedApplicant && (
                <ApplicantViewModal
                    applicant={selectedApplicant}
                    onClose={() => setSelectedApplicant(null)}
                />
            )}
        </div>
    );
}
