import CareerDetailClient from "./CareerDetailClient";

export default async function Page({ params }) {
  const res = await fetch(`https://arbeitnow.com/api/job-board-api`);
  const data = await res.json();
  const job = data.data.find((job) => job.slug === params.slug);

  if (!job) return <div>Job not found</div>;

  return (
    <div className="w-full p-4 md:p-6 flex flex-col md:flex-row gap-6 md:h-auto bg-gray-50 text-black">
      {/* Job Details Section */}
      <div className="w-full md:w-2/3">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">{job.title}</h1>
        <p className="mb-2">📍 {job.location}</p>
        <p className="text-sm md:text-base">{job.description}</p>
      </div>

      {/* Sidebar or Additional Info Section */}
      <div className="w-full md:w-1/3 h-auto md:h-[300px]">
        <CareerDetailClient job={job} />
      </div>
    </div>
  );
}
