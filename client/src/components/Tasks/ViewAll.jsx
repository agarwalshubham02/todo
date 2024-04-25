export default function ViewAll(){
    async function viewAll(){
        const response = await fetch("http://localhost:3000/viewAll");    
        const result = await response.text();
        console.log(result); 
        if(response == 201){
            // console.log(result);
        }
    }
    viewAll();
    return(
        <h1>Your tasks are as follows:</h1>       
    )
}