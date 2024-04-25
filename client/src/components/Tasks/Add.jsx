import { useState } from "react";
import { Link } from "react-router-dom";

export default function Add(){
    const [confirm,setConfirm] = useState(false);
    const className = "rounded-full text-center border-solid border-2 border-slate-400 bg-slate-400 px-4 py-1 m-4";

    function addAnother(){
        setConfirm(false);
    }

    function handleSubmit(event){
        event.preventDefault();
        const fd = new FormData(event.target);
        const data = Object.fromEntries(fd.entries());

        async function addTask(){
            const response = await fetch("http://localhost:3000/add",{
                method:"POST",
                body:JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                    'Accept': 'application/json'
                }
            });            
            const result = await response.text();      

            if(response.status == 201){
                setConfirm(true);
            }
        }
        addTask();
        
    }

    return (
        <>
            {confirm ? (
                <div className="text-center my-16">
                    <h1>New task added successfully!!</h1>
                    <button onClick={addAnother} className={className}>Add Another Task</button>
                </div>            
        ) : (
            <>
                <h1 className="text-center font-sans text-2xl my-9">Add New Task</h1>
                    <div className="text-center">
                    <form onSubmit={handleSubmit} className="inline-grid grid-cols-3">
                        <label htmlFor="title" className="text-left my-2">Title: </label>
                        <input type="text" name="title" id="title" className="my-2"/> <br /> <br />

                        <label htmlFor="desc" className="text-left my-2">Description: </label>
                        <textarea name="desc" id="desc" defaultValue="Please add text here!" className="my-2"></textarea> <br /> <br />
                        
                        <label htmlFor="date" className="text-left my-2">Date of Completion: </label>
                        <input type="date" name="date" id="date" className="my-2"/> <br /> <br />

                        <button className={className}>Submit</button>    
                        <button className={className}><Link to="/home">Go Back</Link></button>
                    </form>
                </div>
            </>                     
        )}
    </>        
    )
}