import Header from "../../shared/Header/Header";
import LeftSidebar from "../../shared/LeftSidebar";
import Navber from "../../shared/Navber/Navber";
import RightSideber from "../../shared/RightSideber";
import BreakingNews from "./BreakingNews";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navber></Navber>
            <h1 className="fotn-poppins font-bold text-xl">home</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border">
                 <LeftSidebar></LeftSidebar>
                </div >
                <div className="border col-span-2">comming soon page here</div>
                <div className="">
                    <RightSideber></RightSideber>
                </div>
            </div>
        </div>
    );
};

export default Home;