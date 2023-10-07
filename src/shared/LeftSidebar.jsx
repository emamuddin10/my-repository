import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSidebar = () => {
    // you have no route so you can use this system;
    const [categorys,setCategory]=useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res=> res.json())
        .then(data => setCategory(data))
    },[])

    return (
        <div className="space-y-6 p-5">
            <h1 className="text-2xl">All Category</h1>
            <div>
                {
                  categorys.map(category => 
                    <Link className="block text-sm font-normal ml-4 pb-2" key={category.id} to={category.id}>{category.name}</Link>)  
                }
            </div>
        </div>
    );
};

export default LeftSidebar;