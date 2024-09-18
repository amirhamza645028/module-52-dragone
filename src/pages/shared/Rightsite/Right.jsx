import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaYoutube } from "react-icons/fa6";
// import {qzone1} from "../../../assets/qZone1.png";
// import {qzone2} from "../../../assets/qZone2.png";
// import {qzone3} from "../../../assets/qZone3.png";
const Right = () => {
    return (
        <div>
            <div className="p-4 space-y-4">
                <div className="text-2xl w-full "><h2 className="text-3xl text-center">Login with</h2>
                    <button className="btn w-full btn-outline"><FaGoogle></FaGoogle>Login with Google</button>
                    <button className="btn w-full btn-outline"><FaGithub></FaGithub>Login with Google</button>
                </div>
            </div>
            <div className="p-4  mb-6">
                <div className="text-2xl w-full "><h2 className="text-3xl text-center mb-6">Found us</h2>
                    <a href="" className="p-4 flex text-lg items-center border rounded-t-lg"><FaFacebook className="mr-3"></FaFacebook>Facebook</a>
                    <a href="" className="p-4 flex text-lg items-center border" ><FaInstagram className="mr-3"></FaInstagram>Instagram</a>
                    <a href="" className="p-4 flex text-lg items-center border rounded-b-lg"><FaYoutube className="mr-3"></FaYoutube>Youtube</a>
                    {/* Q zone */}
                    <div className="p-4 space-y-4 mb-6">
                        <div className="text-2xl w-full "><h2 className="text-3xl text-center">Q Zone</h2>
                        
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Right;