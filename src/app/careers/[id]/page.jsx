import CareerDetailClient from "./CareerDetailClient";
import { api } from "../../../lib/axios";

export default async function Page({ params }) {
  const { id } = await params;

  try
  {
    const { data } = await api.get(`/jobs/${id}`);
    const job = data.job;

    console.log('selected job', job);

    if (!job) return <div>Job not found</div>;

    const {
      title,
      location,
      description: {
        details = "",
        responsibilities = [],
        skills = [],
        highlights = [],
        expectations = [],
        fits = []
      } = {}
    } = job;

    return (
      <div className="w-full p-4 md:p-6 flex flex-col md:flex-row gap-6 md:h-auto bg-gray-50 text-black">
        {/* Job Details Section */}
        <div className="w-full md:w-2/3">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">{title}</h1>
          <p className="mb-2">📍 {location.join(", ")}</p>

          <div className="mb-4">
            <h3 className="font-semibold mb-2">Job Details:</h3>
            <p className="text-sm md:text-base">{details}</p>
          </div>

          {responsibilities.length > 0 && (
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Responsibilities:</h3>
              <ul className="list-disc list-inside">
                {responsibilities.map((item, idx) => (<li key={idx}>{item}</li>))}
              </ul>
            </div>
          )}

          {skills.length > 0 && (
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Skills:</h3>
              <ul className="list-disc list-inside">
                {skills.map((item, idx) => (<li key={idx}>{item}</li>))}
              </ul>
            </div>
          )}

          <div className="mb-4">
            {expectations.length > 0 && (
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Expectations:</h3>
                <ul className="list-disc list-inside">
                  {expectations.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar or Additional Info Section */}
        <div className="w-full md:w-1/3 h-auto">
          <CareerDetailClient job={job} />
        </div>
      </div>
    );
  } catch (error)
  {
    console.error("Error fetching job:", error.message);
    return <div>Error loading job details. Please try again later.</div>;
  }
}
