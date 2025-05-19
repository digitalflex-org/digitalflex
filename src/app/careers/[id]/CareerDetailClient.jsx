'use client';

import { useState } from 'react';

export default function CareerDetailClient({ job }) {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        resume: null,
        videoPitch: null,
        coverLetter: '',
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // You can send formData to an API here
        console.log('Submitting:', formData);
    };

    return (
        <div className="w-full mx-auto p-6 bg-gray-50">
            <form onSubmit={handleSubmit} className="space-y-4 flex flex-col min-h-full">

                <label className="text-sm font-bold mb-2">
                    Full Name
                    <span className="text-red-600 group relative cursor-help ml-1 font-extralight text-sm">
                        *
                        <p className="absolute  bottom-1 w-64 text-xs font-light bg-white text-gray-700 border border-gray-300 p-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                            required
                        </p>
                    </span>
                </label>
                <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} required />

                <label className="text-sm font-bold mb-2">
                    Email
                    <span className="text-red-600 group relative cursor-help ml-1 font-extralight text-sm">
                        *
                        <p className="absolute  bottom-1 w-64 text-xs font-light bg-white text-gray-700 border border-gray-300 p-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                            required
                        </p>
                    </span>
                </label>
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />

                <label className="text-sm font-bold mb-2">
                    Phone <span className="text-red-600 group relative cursor-help ml-1 font-extralight text-sm">
                        *
                        <p className="absolute  bottom-1 w-64 text-xs font-light bg-white text-gray-700 border border-gray-300 p-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                            required
                        </p>
                    </span>
                </label>
                <input type="tel" name="phone" placeholder="Phone" onChange={handleChange} required />
                <label className="text-sm font-bold mb-2">
                    Resume/CV <span className="text-red-600 group relative cursor-help ml-1 font-extralight text-sm">
                        *
                        <p className="absolute  bottom-1 w-64 text-xs font-light bg-white text-gray-700 border border-gray-300 p-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                            required
                        </p>
                    </span>
                </label>
                <input type="file" name="resume" accept=".pdf,.doc,.docx" onChange={handleChange} required />

                <label className="text-sm font-bold mb-2">
                    Short Video Pitch <span className="text-red-600 group relative cursor-help ml-1 font-extralight text-sm">
                        *
                        <p className="absolute  bottom-1 w-64 text-xs font-light bg-white text-gray-700 border border-gray-300 p-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                            required
                        </p>
                    </span>
                </label>
                <input type="file" name="videoPitch" accept="video/*" onChange={handleChange} />

                <label className="text-sm font-bold mb-2">Cover Letter</label>
                <textarea name="coverLetter" placeholder="Cover Letter" rows="4" onChange={handleChange}></textarea>

                <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded">
                    Submit Application
                </button>
            </form>
        </div>

    );
}
