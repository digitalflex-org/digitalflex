import { useAuth } from '@/contexts/authContext';
import React, { useState, useEffect } from 'react';

const JobEditModal = ({ job, onClose, onSave }) => {
    const { user } = useAuth();
    // console.log('editorId:', user._id);
    const [formData, setFormData] = useState({
        _id: '',
        title: '',
        location: [],
        salary: '',
        deadline: '',
        slug: '',
        description: {},
    });

    useEffect(() => {
        if (job)
        {
            setFormData({
                _id: job._id || '',
                title: job.title || '',
                location: job.location || [],
                salary: job.salary || '',
                deadline: job.deadline ? job.deadline.slice(0, 10) : '',
                slug: job.slug || '',
                description: job.description || {},
                updatedBy: user?._id
            });
        }
    }, [job]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        if (typeof onSave === 'function')
        {
            onSave(formData);
        }
    };

    if (!job) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="bg-white max-w-2xl w-full p-6 rounded-lg shadow-xl overflow-y-auto max-h-[90vh]">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-gray-800">Edit Job Details</h2>
                    <button onClick={onClose} className="text-red-500 text-sm font-medium hover:underline">
                        Close
                    </button>
                </div>

                <div className="space-y-4 text-sm text-gray-700">
                    <div>
                        <label className="block font-medium">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="border p-2 w-full rounded"
                        />
                    </div>

                    <div>
                        <label className="block font-medium">Location (comma-separated)</label>
                        <input
                            type="text"
                            name="location"
                            value={formData.location.join(', ')}
                            onChange={(e) =>
                                setFormData({ ...formData, location: e.target.value.split(',').map(s => s.trim()) })
                            }
                            className="border p-2 w-full rounded"
                        />
                    </div>

                    <div>
                        <label className="block font-medium">Salary</label>
                        <input
                            type="number"
                            name="salary"
                            value={formData.salary}
                            onChange={handleChange}
                            className="border p-2 w-full rounded"
                        />
                    </div>

                    <div>
                        <label className="block font-medium">Deadline</label>
                        <input
                            type="date"
                            name="deadline"
                            value={formData.deadline}
                            onChange={handleChange}
                            className="border p-2 w-full rounded"
                        />
                    </div>

                    <div>
                        <label className="block font-medium">Slug</label>
                        <input
                            type="text"
                            name="slug"
                            value={formData.slug}
                            onChange={handleChange}
                            className="border p-2 w-full rounded"
                        />
                    </div>

                    <div>
                        <label className="block font-medium">Description (JSON)</label>
                        <textarea
                            name="description"
                            value={JSON.stringify(formData.description, null, 2)}
                            onChange={(e) => {
                                try
                                {
                                    const parsed = JSON.parse(e.target.value);
                                    setFormData({ ...formData, description: parsed });
                                } catch (_)
                                {
                                    console.log('Error parsing data', _)
                                }
                            }}
                            className="border p-2 w-full rounded font-mono text-xs"
                            rows={6}
                        />
                    </div>

                    <div className="flex justify-end gap-2 mt-4">
                        <button onClick={onClose} className="px-4 py-2 text-sm text-gray-600 hover:underline">
                            Cancel
                        </button>
                        <button
                            onClick={handleSave}
                            className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobEditModal;
