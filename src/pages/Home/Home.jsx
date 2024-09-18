import Header from "../shared/Header/Header";
import Leftsite from "../shared/Leftsite/Leftsite";
import Navber from "../shared/navber/Navber";
import Right from "../shared/Rightsite/Right";
import BreakingNews from "./BreakingNews";

const Home = () => {
    return (
        <div>
            
            <Header> </Header>
            <BreakingNews></BreakingNews>
            <Navber></Navber>
            <h3>via fast ses koren vai fsast</h3>
            <div className=" grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="border-orange-950">
                    <Leftsite></Leftsite>
                </div>
                <div className="md:col-span-2 border-orange-950">
                    <h2 className="text-2xl">news coming son....</h2>
                </div>
                <div className="border-orange-950">
                    <Right></Right>
                </div>
            </div>
        </div>
    );
};

export default Home;