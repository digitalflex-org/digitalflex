import React from 'react';

const ApplicantViewModal = ({ applicant, onClose }) => {
    if (!applicant) return null;

    const {
        name,
        preferred_name,
        email,
        role,
        status,
        activated,
        qualified,
        screening,
        createdAt,
        updatedAt,
        lastActiveAt,
        progress = []
    } = applicant;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-70">
            <div className="bg-white rounded-lg p-6 w-full max-w-2xl shadow-lg overflow-y-auto max-h-[90vh]">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">Applicant Details</h2>
                    <button
                        onClick={onClose}
                        className="text-red-500 font-semibold text-sm hover:underline"
                    >
                        Close
                    </button>
                </div>

                <div className="space-y-4 text-sm text-gray-800">
                    <div><strong>Name:</strong> {name}</div>
                    <div><strong>Preferred Name:</strong> {preferred_name}</div>
                    <div><strong>Email:</strong> {email}</div>
                    <div><strong>Role:</strong> {role}</div>
                    <div><strong>Status:</strong> {status}</div>
                    <div><strong>Activated:</strong> {activated ? 'Yes' : 'No'}</div>
                    <div><strong>Qualified:</strong> {qualified ? 'Yes' : 'No'}</div>

                    <div>
                        <strong>Screening:</strong>
                        <ul className="list-disc list-inside pl-4">
                            <li>Tech Readiness: {screening?.techReadiness ?? 'N/A'}</li>
                            <li>Mindset Score: {screening?.mindsetScore ?? 'N/A'}</li>
                            <li>Logic Score: {screening?.logicScore ?? 'N/A'}</li>
                        </ul>
                    </div>

                    <div><strong>Joined:</strong> {new Date(createdAt).toLocaleString()}</div>
                    {/*<div><strong>Updated At:</strong> {new Date(updatedAt).toLocaleString()}</div>*/}
                    <div><strong>Last Active At:</strong> {new Date(lastActiveAt).toLocaleString()}</div>


                </div>
            </div>
        </div>
    );
};

export default ApplicantViewModal;
