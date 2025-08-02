import type { Route } from "./+types/home";
import Navbar from "~/Components/Navbar";
import {resumes} from "../../constants";
import ResumeCard from "~/Components/ResumeCard";
import {usePuterStore} from "~/lib/puter";
import {useLocation, useNavigate} from "react-router";
import {useEffect} from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Skill Scan - Resume Analyzer" },
    { name: "description", content: "An AI powered resume analyzer." },
  ];
}

export default function Home() {

  const {auth} = usePuterStore();
  const navigate = useNavigate();

  useEffect(()=>{
    if(!auth.isAuthenticated) navigate("/auth?next=/");
  },[auth.isAuthenticated])

  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar/>

    <section className="main-section">
      <div className="page-heading pb-16">
          <h1>Track Your Applications & Resume Ratings</h1>
          <h2>Review your submissions and check AI-powered feedback.</h2>
      </div>
    {
      resumes.length > 0 ? (
          <div className="resumes-section">
          {
            resumes.map( (resume) => (
                <ResumeCard key= {resume.id} resume={resume} />
            ))
          }
        </div>
        ) : (
            <div>
              No Uploads Found
            </div>
      )
    }

    </section>
  </main> ;
}
