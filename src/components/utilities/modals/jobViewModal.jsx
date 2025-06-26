import React from 'react';

const JobViewModal = ({ job, onClose }) => {
    if (!job) return null;

    const {
        title,
        description,
        location,
        salary,
        deadline,
        slug,
        postedBy,
        createdAt,
        updatedAt
    } = job;

    const renderArray = (arr) => (
        <ul className="list-disc pl-5 space-y-1">
            {arr.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );

    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-20 flex items-center justify-center w-full">
            <div className="bg-white md:max-w-4xl w-full p-6 rounded-lg shadow-xl overflow-y-auto max-h-[90vh]">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-gray-800">Job Details</h2>
                    <button
                        onClick={onClose}
                        className="text-red-500 text-sm font-medium hover:underline"
                    >
                        Close
                    </button>
                </div>

                <div className="space-y-4 text-sm text-gray-700">
                    <div><strong>Title:</strong> {title}</div>
                    <div>
                        <strong>Location:</strong> {Array.isArray(location) ? location.join(', ') : location}
                    </div>
                    <div><strong>Salary:</strong> {salary ? `$${salary}` : 'Not specified'}</div>
                    <div><strong>Deadline:</strong> {new Date(deadline).toLocaleDateString()}</div>
                    <div><strong>Slug:</strong> {slug}</div>
                    <div><strong>Posted By:</strong> {postedBy?.name || 'N/A'}</div>

                    {/* Description */}
                    {description && typeof description === 'object' ? (
                        <div className="space-y-2">
                            <div>
                                <strong>Details:</strong>
                                <p className="bg-gray-100 p-2 rounded">{description.details}</p>
                            </div>
                            {description.responsibilities && (
                                <div>
                                    <strong>Responsibilities:</strong>
                                    {renderArray(description.responsibilities)}
                                </div>
                            )}
                            {description.skills && (
                                <div>
                                    <strong>Skills:</strong>
                                    {renderArray(description.skills)}
                                </div>
                            )}
                            {description.highlights && (
                                <div>
                                    <strong>Highlights:</strong>
                                    {renderArray(description.highlights)}
                                </div>
                            )}
                            {description.expectations && (
                                <div>
                                    <strong>Expectations:</strong>
                                    {renderArray(description.expectations)}
                                </div>
                            )}
                            {description.fits && (
                                <div>
                                    <strong>Fits:</strong>
                                    {renderArray(description.fits)}
                                </div>
                            )}
                        </div>
                    ) : (
                        <div>
                            <strong>Description:</strong>
                            <p>{description}</p>
                        </div>
                    )}

                    {createdAt && <div><strong>Created At:</strong> {new Date(createdAt).toLocaleString()}</div>}
                    {updatedAt && <div><strong>Last Updated:</strong> {new Date(updatedAt).toLocaleString()}</div>}
                </div>
            </div>
        </div>
    );
};

export default JobViewModal;
