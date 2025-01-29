import { Component } from "react";

const trackingButton = (Component) => {

    return(props)=>{
        console.log("Tracking the hoc")
        const handleClick =()=>{
            console.log("Button Clicked", props.trackingInfo)

        }

        return (
            <div onClick ={handleClick}>
            <h1>This is the Higher order Compoment</h1>
            <Component {...props}/>
            </div>
        )

    }

}
export default trackingButton;