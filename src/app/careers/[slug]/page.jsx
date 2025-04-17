import CareerDetailClient from "./CareerDetailClient";

export default async function Page({ params }) {
  const res = await fetch(`https://arbeitnow.com/api/job-board-api`);
  const data = await res.json();
  const job = data.data.find((job) => job.slug === params.slug);

  if (!job) return <div>Job not found</div>;

  return (
    <div className="p-6 flex bg-foreground text-background">
      <div className=" px-6 mx-6">
        <CareerDetailClient job={job} />
      </div>
      <div className="w-2/3 flex flex-col">
        <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
        <p className="mb-2">📍 {job.location}</p>
        <p>{job.description}</p>
      </div>
    </div>
  );
}
