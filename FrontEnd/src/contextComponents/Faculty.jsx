import Faculty from "../contextComponents/Invigilator";

const Invigilator=(res) =>{
    return (
        <div>
            <h3>Invigilation in process</h3>
           
            <Faculty sgpa ={res.sgpa} cgpa={res.cgpa}/>
        </div>
    )
}
export default Invigilator;