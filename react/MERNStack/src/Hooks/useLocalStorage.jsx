import useLocalStorage from "./CustomeHook/sampleCustomeHook";

const UseLocalStorage=()=>{
    var [text,setText]=useLocalStorage("customerId","");
    var [pass,setPass]=useLocalStorage("password","");
    return(
        <div>
            <h2>Utilizing Custom Hook Created.</h2>
            CustomerID :<input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
            <h3>The text typed is {text}</h3>
            Password:<input type="password" value={pass} onChange={(e)=>setPass(e.target.value)}/>
            <h3>The text typed is {text}</h3>
            
        </div>
    )
}
export default UseLocalStorage;