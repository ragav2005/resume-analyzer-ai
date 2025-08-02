import {usePuterStore} from "~/lib/puter";
import {useEffect} from "react";
import {useLocation, useNavigate} from "react-router";

export const  meta = () =>([
    {title : "SkillScan | Authentication"},
    {description : "Login to your account"}
])


const auth = () => {
    const {isLoading , auth} = usePuterStore();
    const location = useLocation();
    const navigate = useNavigate();
    const next = location.search.split("next=")[1];

    useEffect(()=>{
        if(auth.isAuthenticated) navigate(next);
    },[auth.isAuthenticated,next])

    return(
        <main className= "bg-[url('/images/bg-auth.svg')] bg-cover min-h-screen flex items-center justify-center">
            <div className="gradient-border shadow-lg">
                <section className=" flex flex-col gap-8 bg-white rounded-2xl p-10">
                    <div className="flex flex-col items-center gap-2 text-center">
                        <h1>Welcome</h1>
                        <h2>LogIn to Continue Your Job Journey</h2>
                    </div>
                    <div>
                        {
                            isLoading ?
                                (<div>
                                    <button className="auth-button animate-pulse">Signing you in....</button>
                                </div>)
                            : <>
                                {
                                    auth.isAuthenticated ? (
                                        <div className="auth-button text-center" onClick={auth.signOut}>
                                            <p>Log Out</p>
                                        </div>
                                    ) : (<div className="auth-button text-center" onClick={auth.signIn}>
                                        <p>Log In</p>
                                    </div>)
                                }
                                </>
                        }
                    </div>
                </section>
            </div>
        </main>
    )
}

export default  auth;