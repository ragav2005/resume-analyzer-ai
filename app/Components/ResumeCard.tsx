import { Link } from "react-router";
import { useEffect, useState } from "react";
import ScoreCircle from "~/Components/ScoreCircle";
import { usePuterStore } from "~/lib/puter";

type ResumeCardProps = {
  resume: Resume;
};
const ResumeCard = ({
  resume: { id, jobTitle, feedback, companyName, imagePath },
}: ResumeCardProps) => {
  const { fs } = usePuterStore();
  const [resumeUrl, setResumeUrl] = useState("");

  useEffect(() => {
    const loadResume = async () => {
      const blob = await fs.read(imagePath);
      if (!blob) return;

      let url = URL.createObjectURL(blob);
      setResumeUrl(url);
    };
    loadResume();
  }, [imagePath]);

  return (
    <Link
      to={`/resume/${id}`}
      className="resume-card animate-in fade-in duration-1000"
    >
      <div className="resume-card-header flex flex-row items-center justify-between">
        <div className="flex flex-col gap-2">
          {companyName && (
            <h2 className=" !text-neutral-900 font-bold break-words  ">
              {companyName}
            </h2>
          )}
          {jobTitle && (
            <h3 className="text-lg break-words text-gray-500">{jobTitle}</h3>
          )}
          {!companyName && !jobTitle && (
            <h2 className="!text-black font-bold">Resume</h2>
          )}
        </div>
        <div className="flex-shrink-0">
          <ScoreCircle score={feedback.overallScore} />
        </div>
      </div>
      {resumeUrl && (
        <div className="gradient-border animate-in duration-1000 fade-in">
          <div className="h-full w-full">
            <img
              src={resumeUrl}
              alt="Resume Thumbnail"
              className=" w-full h-[350px] max-sm:h-[200px] object-top object-cover"
            />
          </div>
        </div>
      )}
    </Link>
  );
};

export default ResumeCard;
