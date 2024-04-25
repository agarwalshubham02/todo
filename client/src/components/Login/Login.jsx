import { Link, useNavigate } from "react-router-dom";

export default function Login(){
    const navigate = useNavigate();

    function handleLogin(event){
        
        event.preventDefault();
        const fd = new FormData(event.target);
        const data = Object.fromEntries(fd.entries());

        async function fetchData(){
            const response = await fetch("http://localhost:3000/login",{
                method:"POST",
                body:JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"                   
                }
            });
            let doc = await response.text();
            doc = JSON.parse(doc);
            if(response.status == 201){
                sessionStorage.setItem("fname",doc.firstName);
                sessionStorage.setItem("lname",doc.lastName);
                navigate("/home");               
            }
            else{
                alert("Please enter correct username or password");
            }
            
        }
        fetchData();
    }
    return (
        <>
            <h1 className="text-center font-sans text-2xl m-10">Login Page</h1>
            <div className="text-center">
                <form onSubmit={handleLogin}>
                    <label htmlFor="username">Username: </label>
                    <input type="email" name="username" id="username" /><br /><br />

                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" /><br /><br />
                    
                    <button className='rounded-full text-center border-solid border-2 border-slate-400 bg-slate-400 px-4 py-1 m-2' type="submit">Login</button>
                    <button className='rounded-full text-center border-solid border-2 border-slate-400 bg-slate-400 px-4 py-1 m-2' type="reset">Reset</button>
                </form>
                <button className='rounded-full text-center border-solid border-2 border-slate-400 bg-slate-400 px-4 py-1'><Link to="/">Go Back</Link></button>
            </div>   
        </>
    )
}