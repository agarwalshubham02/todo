import { Link  } from "react-router-dom";
import Logout from "../Logout";

export default function User(){    
    
    const state = {
        firstName:sessionStorage.getItem("fname"),
        lastName:sessionStorage.getItem("lname")
    };
    const button_classes = "rounded-full border-2 bg-orange-300 my-1.5 py-3 px-9 border-none";
    return (
        <div className="text-center mt-20">
            <h1 className="text-2xl text-center my-5">Hi, {state.firstName} {state.lastName}</h1>
            <h2 className="text-xl text-center my-4">Choose what you want to do?</h2>
            
            <button className={button_classes}>
                <Link to="/add">Add new Tasks</Link>
            </button> <br />
            <button className={button_classes}>
                <Link to="/viewAll">View all Tasks</Link> 
            </button> <br />
            
            <button className={button_classes}>
                <Link to="/delete">Delete a Task</Link> 
            </button> <br />
            <button className={button_classes}>
                <Link to="/viewOne">View a particular Task</Link>
            </button> <br />
            <Logout/>
        </div>
    ); 
}