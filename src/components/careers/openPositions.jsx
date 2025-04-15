export default function OpenPositions() {
    const jobs = [
        {
            "title": "Frontend Developer",
            "location": "Remote",
            "type": "Full-Time",
            "description": "Work with modern tools like React and Tailwind to build beautiful, performant interfaces.",
            "applyLink": "https://your-stripe-or-job-link.com/frontend"
        },
        {
            "title": "SEO Specialist",
            "location": "Lagos, Nigeria",
            "type": "Contract",
            "description": "Optimize content strategy and boost organic traffic with SEO best practices.",
            "applyLink": "https://your-stripe-or-job-link.com/seo"
        },
        {
            "title": "UI/UX Designer",
            "location": "Remote",
            "type": "Part-Time",
            "description": "Design intuitive, user-friendly experiences for web and mobile platforms.",
            "applyLink": "https://your-stripe-or-job-link.com/uiux"
        },
        {
            "title": "Sales Representative",
            "location": "Singapore",
            "type": "Part-Time",
            "description": "Engage with potential clients and drive sales growth in the Asia-Pacific region.",
            "applyLink": "https://your-stripe-or-job-link.com/sales-rep"
        },
        {
            "title": "Social Media Manager",
            "location": "Remote",
            "type": "Part-Time",
            "description": "Manage and grow our social media presence across various platforms.",
            "applyLink": "https://your-stripe-or-job-link.com/social-media-manager"
        },
        {
            "title": "Sales Representative",
            "location": "Remote",
            "type": "Full-Time",
            "description": "Identify and pursue new business opportunities to expand our client base.",
            "applyLink": "https://your-stripe-or-job-link.com/sales-rep-remote"
        },
        {
            "title": "Google Business Profile Manager",
            "location": "Remote",
            "type": "Full-Time",
            "description": "Manage and optimize clients' Google Business Profiles to enhance online visibility.",
            "applyLink": "https://your-stripe-or-job-link.com/gbp-manager"
        },
        {
            "title": "Content Marketing Specialist",
            "location": "Remote",
            "type": "Full-Time",
            "description": "Develop and execute content strategies to drive engagement and conversions.",
            "applyLink": "https://your-stripe-or-job-link.com/content-marketing"
        },
        {
            "title": "Digital Marketing Analyst",
            "location": "Remote",
            "type": "Full-Time",
            "description": "Analyze digital marketing campaigns and provide insights to improve performance.",
            "applyLink": "https://your-stripe-or-job-link.com/digital-analyst"
        },
        {
            "title": "Customer Success Manager",
            "location": "Remote",
            "type": "Full-Time",
            "description": "Ensure client satisfaction and success through proactive support and relationship management.",
            "applyLink": "https://your-stripe-or-job-link.com/customer-success"
        }
    ];

    return (
        <section id="open-positions" className="bg-white text-[#333333] py-20 px-6 md:px-12">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Open Positions</h2>
                <p className="text-lg mb-12 max-w-2xl mx-auto">
                   Browse our current openings below.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                    {jobs.map((job, idx) => (
                        <div
                            key={idx}
                            className="p-6 border border-[#f4f4f4] rounded-2xl shadow-md hover:shadow-lg transition duration-300"
                        >
                            <h3 className="text-2xl font-semibold mb-2">{job.title}</h3>
                            <p className="text-sm mb-2 text-[#004e89]">
                                📍 {job.location} &nbsp;&nbsp; ⏱ {job.type}
                            </p>
                            <p className="text-sm mb-4">{job.description}</p>
                            <a
                                href={job.applyLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-auto bg-[#004e89] hover:bg-[#1d3c6a] text-white font-medium px-5 py-2 rounded-full transition duration-300"
                            >
                                Apply Now
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
