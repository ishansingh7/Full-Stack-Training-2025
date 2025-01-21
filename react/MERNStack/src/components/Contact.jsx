import { useState } from "react";

const Contact = () => {
    var [num,setNum]= useState(0);
    

    return (
        <div>
            <h1>contact to ishan singh </h1>
            <h2>This is a state Example  </h2>
            <h3>Number is {num}</h3>


            <button onClick ={()=>setNum(num +1 )}>+</button>
        </div>
    )
}

export default Contact;