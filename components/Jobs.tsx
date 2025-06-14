import type { NextPage } from "next";
import { IJobs, Months } from "../typings";


interface IJobsProps {
  jobs: IJobs[];
}

export const Jobs: NextPage<IJobsProps> = ({ jobs }) => {

  return (
    <>
      <h1 className="jobs_heading">Work</h1>

      <div className="jobs_timeline_container">
        {jobs?.map(job => (
          <div className="job" key={job?.id}>
            <h2>{job?.company}</h2>
            <h3>{job?.designation}</h3>
            <img src={job?.logo?.url} alt="logo" className="job_companyLogo" />
            <div className="job_date_beforeLine">
              {`${Months[parseInt(job?.from?.split("-")[1])]}, ${job?.from?.split("-")[0]}`}
            </div>
            <div className="job_date">
              {`${Months[parseInt(job?.from?.split("-")[1])]}, ${job?.from?.split("-")[0]}`} -{" "}
              {job?.to
                ? `${Months[parseInt(job?.to?.split("-")[1])]}, ${job?.to?.split("-")[0]}`
                : "Present"}
            </div>
            <div className="job_companyLinks">
              <img
                src="/assets/linkedin.webp"
                alt="tejas"
                onClick={() => window.open(job?.companyLinkedin, "_blank")}
              />
              <img src="assets/www.webp" alt="tejas" onClick={() => window.open(job?.companyUrl, "_blank")} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
