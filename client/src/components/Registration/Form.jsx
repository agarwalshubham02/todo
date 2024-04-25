import { Link, useNavigate } from "react-router-dom";

export default function Form(){
    const navigate = useNavigate();
    
    function handleSubmit(event){
        event.preventDefault();       
        const fd = new FormData(event.target);
        const data = Object.fromEntries(fd.entries());
        console.log(data)
        
        async function fetchData(){
            const response = await fetch("http://localhost:3000/register",{
                method:"POST",
                body:JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                    'Accept': 'application/json'
                }
            });
            const result = await response.text();
            if(response.status == 201){
                navigate("/home", {state:{firstName:data.fname, lastName:data.lname}});
            }
        }
        fetchData();
    }
    return(
        <>
            <h1 className="text-center font-sans text-2xl m-10">Registration Form </h1>
            <div className="text-center">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="fname">First Name:  </label>
                    <input type="text" name="fname" id="fname" /><br></br><br></br>

                    <label htmlFor="lname">Last Name:  </label>
                    <input type="text" name="lname" id="lname" /><br></br><br></br> 

                    <label htmlFor="age">Age: </label>
                    <input type="number" name="age" id="age"/><br /><br />

                    <label htmlFor="emailId">Email: </label>
                    <input type="email" name="emailId" id="email-Id"/> <br /><br />

                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" /><br /><br />

                    <button className='text-center border-solid border-2 border-slate-400 bg-slate-400 px-2 py-1 m-2' type="submit">Submit</button> 
                    <button className='text-center border-solid border-2 border-slate-400 bg-slate-400 px-2 py-1 m-2' type="reset">Reset</button>    
                    
                </form>        
                <button className='text-center border-solid border-2 border-slate-400 bg-slate-400 px-2 py-1'><Link to="/">Go Back</Link></button>  
            </div> 
        </>
        
    )
}