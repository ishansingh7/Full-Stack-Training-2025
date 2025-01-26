import Button from "./Button"
import trackingButton from "./trackingButton";

const HoC = () =>{
    const ButtonWithTracking = trackingButton(Button);
    return (
        <div>
        <h2>This the Higher Order Component</h2>
        <Button name="Login"/>
        <ButtonWithTracking  name ="Login" trackingInfo ={{CustomerId :"ishan",password :"1234"}}/>
</div>
    )

}
export default HoC;