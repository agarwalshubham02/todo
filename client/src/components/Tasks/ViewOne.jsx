import { useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function ViewOne(){   
    const [viewTask,setViewTask] = useState(null);
    const taskId = useRef(null); 
    function handleSubmit(event){        
        event.preventDefault();
        let value = {_id:null};
        value._id = taskId.current.value;
        
        async function fetchEvent(){
            const response = await fetch("http://localhost:3000/viewOne",{
                method:"POST",
                body:JSON.stringify(value),
                headers: {
                    "Content-Type": "application/json",
                    'Accept': 'application/json'                   
                }
            });
            let doc = await response.text();
            doc = await JSON.parse(doc);
            if(response.status == 201){
                setViewTask(doc);
                console.log(doc);
            }
            else{
                alert("Please enter correct task ID.");
            }            
        }
        fetchEvent();
    }
    return (        
        <>
            {viewTask ? (
                <>
                    <h1 className="text-center font-sans text-2xl m-10">Details are as follows:</h1>
                    <div className="text-center">
                        <table className="table-auto border-solid border-2 border-orange-300 m-auto">
                            <thead>
                                <tr className="border-solid border-2 border-orange-300">
                                <th className="border-solid border-2 border-orange-300">Fields</th>
                                <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-solid border-2 border-orange-300">
                                    <td className="text-center border-solid border-2 border-orange-300">Title</td>
                                    <td className="px-10">{viewTask.title}</td>
                                </tr>
                                <tr className="border-solid border-2 border-orange-300">
                                    <td className="text-center border-solid border-2 border-orange-300">Description</td>
                                    <td className="px-10">{viewTask.description}</td>
                                </tr>
                                <tr className="border-solid border-2 border-orange-300">
                                    <td className=" text-center border-solid border-2 border-orange-300 px-8">Date of Completion</td>
                                    <td className="px-10">{viewTask.date}</td>
                                </tr>
                            </tbody>
                        </table>
                        <button className='rounded-full text-center border-solid border-2 border-orange-300 bg-orange-300 px-8 py-1 my-11'><Link to="/home">Go Back</Link></button>

                    </div>
                                          
                </>               
            ):(
                <>
                <h1 className="text-center font-sans text-2xl m-10">Enter the event ID:</h1>
                <div className="text-center">
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="taskid" id="taskid" ref={taskId}/><br /><br />   
                                            
                        <button className='rounded-full text-center border-solid border-2 border-slate-400 bg-slate-400 px-4 py-1 m-2' type="submit">Submit</button>
                        <button className='rounded-full text-center border-solid border-2 border-slate-400 bg-slate-400 px-4 py-1 m-2' type="reset">Reset</button>
                    </form>
                    <button className='rounded-full text-center border-solid border-2 border-slate-400 bg-slate-400 px-4 py-1'><Link to="/home">Go Back</Link></button>
                </div>
                </>                               
            )}            
        </>            
        
    )
}
