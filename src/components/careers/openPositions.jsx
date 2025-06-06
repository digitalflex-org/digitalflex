"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";

export function OpenPositions() {
    let baseUrl = process.env.NEXT_PUBLIC_BASE_URL
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        async function fetchJobs() {
            try
            {
                const { data } = await api.get("/jobs");
                if (data.success)
                {
                    setJobs(data.jobs);
                } else
                {
                    console.warn("Unexpected response structure:", data);
                    setJobs([]);
                }

            } catch (error)
            {
                console.error("Error fetching jobs:", error.message);
                setJobs([]);
            }
        }
        fetchJobs();
    }, []);

    return (
        <section id="open-positions" className="bg-white text-[#333333] py-20 px-6 md:px-12">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Open Positions</h2>
                <p className="text-lg mb-12 max-w-2xl mx-auto">
                    Browse our current openings below.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                    {jobs.length > 0 ? (
                        
                            jobs.map((job) => (
                                <div
                                    key={job._id}
                                    className="p-6 border border-[#f4f4f4] rounded-2xl shadow-md hover:shadow-lg transition duration-300"
                                >
                                    <h3 className="text-2xl font-semibold mb-2">{job.title}</h3>
                                    <p className="text-sm mb-2 text-[#004e89]">
                                        📍 {job.location} &nbsp;&nbsp; ⏱ {job.type}
                                    </p>
                                    <p className="text-sm mb-4 line-clamp-4"> {job.description.details} </p>

                                    <Link
                                        href={`/careers/${job._id}`}
                                        prefetch={false}
                                        className="bg-[#004e89] border-2 rounded-lg p-3 text-white "
                                    // onClick={() => console.log(`Navigating to job ID: ${job.id}`)}
                                    >
                                        Apply Now
                                    </Link>
                                </div>
                            ))
                    ) : (
                        <p>No open positions at the moment.</p>
                    )}
                </div>
            </div>
        </section>
    );
}
