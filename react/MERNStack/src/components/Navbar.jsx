const Navabar = () => {

    var styling ={display:"flex",
        justifyContent:"space-around",
        listStyle:"none",padding:"10px",
        backgroundColor:"black",color:"white"}

    return (
        <header>
            <nav>
     <ol style ={styling}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Glarry</li>
    </ol>
            </nav>

        </header>



    )


}
export default Navabar;