import {Link} from "react-router";
import ScoreCircle from "~/Components/ScoreCircle";

type ResumeCardProps = {
    resume : Resume
}
const ResumeCard = ({resume : {id , jobTitle, feedback , companyName, imagePath }} : ResumeCardProps) =>{

    return (
        <Link to={`/resume/${id}`} className="resume-card animate-in fade-in duration-1000">
            <div className="resume-card-header">
                <div className="flex flex-col gap-2">
                    <h2 className=" !text-neutral-900 font-bold break-words">{companyName}</h2>
                    <h3 className="text-lg break-words text-gray-500">{jobTitle}</h3>
                </div>
                <div className="flex-shrink-0">
                    <ScoreCircle score={feedback.overallScore}/>
                </div>
            </div>
            <div className="gradient-border animate-in duration-1000 fade-in">
                <div className="h-full w-full">
                    <img
                    src= {imagePath}
                    alt="Resume Thumbnail"
                    className=" w-full h-[350px] max-sm:h-[200px] object-top object-cover"
                    />
                </div>

            </div>
        </Link>
    )
}

export default ResumeCard;