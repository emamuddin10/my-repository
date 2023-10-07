import { GrFacebook, GrGithub, GrGoogle, GrInstagram, GrTwitter } from "react-icons/gr";
import qZone1 from "../assets/img/qZone1.png"
import qZone2 from "../assets/img/qZone2.png"
import qZone3 from "../assets/img/qZone3.png"
const RightSideber = () => {
    return (
        <div>
            <div>
              <h1>Login with</h1>
              <div className="border-slate-950 flex items-center border rounded text-center p-2 ">
                  <GrGoogle className="mr-2"></GrGoogle>
                  <a href="">login with google</a>
              </div>
              <div className="border-slate-950 flex items-center border rounded text-center p-2 ">
                  <GrGithub className="mr-2"></GrGithub> 
                 login with Github
              </div>
            </div>

            <div className="mt-6">
              <h1>Find Us On</h1>   
                  <a className=" flex items-center border rounded-t-lg p-2" href="">
                   <GrFacebook className="mr-2"></GrFacebook>
                    Facebook</a>
                  <a href="" className="flex items-center border-x-2 p-2">
                    <GrTwitter className="mr-2"></GrTwitter>
                    Twitter</a>  
                  <a href="" className="flex items-center border rounded-b-lg p-2 ">
                    <GrInstagram className="mr-2"></GrInstagram>
                    Instagram </a>  
              
            </div>
            <div className="mt-6 bg-[#F3F3F3] p-8">
               <h1>Q-Zone</h1>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideber;