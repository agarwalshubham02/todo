import { useNavigate } from "react-router-dom"

export default function Logout(){

    const navigate = useNavigate();

    function handleLogout(){
        sessionStorage.clear()
        navigate("/")
    }
    const button_classes = "rounded-full border-2 bg-orange-300 my-1.5 py-3 px-9 border-none";


    return(
        <button className={button_classes} onClick={handleLogout}>Logout</button>
    )
}