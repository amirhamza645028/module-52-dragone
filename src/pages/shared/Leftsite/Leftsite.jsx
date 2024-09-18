import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Leftsite = () => {
    const [categories , setcategories]=useState([])
    useEffect (()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .catch(data=>setcategories(data))
    },[])
    return (
        <div className="space-x-10">
            <div className="text-2xl">All Catagory</div>
            {
                categories.map(categories=> <Link className="block ml-4 font-semibold text-2xl"key={categories.id}
                to={`/categories/${categories.id}`}>{categories.name}</Link>)
            }
        </div>
    );
};

export default Leftsite;