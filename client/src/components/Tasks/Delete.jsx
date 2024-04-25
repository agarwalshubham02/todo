import { useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Delete(){
    const taskId = useRef(null);
    const [deleted, setDeleted] = useState(false);

    function deleteAnother(){
        setDeleted(false);
    }
    const className = "rounded-full text-center border-solid border-2 border-slate-400 bg-slate-400 px-4 py-1 m-4";

    function handleSubmit(event){
        event.preventDefault();
        let value = {id:null}
        value.id = taskId.current.value;

        async function fetchEvent(){
            const response = await fetch("http://localhost:3000/delete",{
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
                setDeleted(true);
                console.log(doc);
            }
            else{
                alert("Please enter correct task ID.");
            }            
        }
        fetchEvent();        
    }
    return(       
        <>
        {deleted ?(
            <div className="text-center my-16">
                <h1>New task deleted successfully!!</h1>
                <button onClick={deleteAnother} className={className}>Delete Another Task</button>
            </div>              
        ):(            
            <>
                <h1 className="text-center font-sans text-2xl m-10">Enter the task ID:</h1>
                <div className="text-center">
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="taskid" id="taskid" ref={taskId}/><br/><br/>                                           
                        <button className='rounded-full text-center border-solid border-2 border-slate-400 bg-slate-400 px-4 py-1 m-2' type="submit">Submit</button>
                        <button className='rounded-full text-center border-solid border-2 border-slate-400 bg-slate-400 px-4 py-1 m-2' type="reset">Reset</button>
                    </form>
                    <button className='rounded-full text-center border-solid border-2 border-slate-400 bg-slate-400 px-4 py-1'><Link to="/home">Go Back</Link></button>
                </div>
            </> 
        ) }            
    </>                              
    )   
}