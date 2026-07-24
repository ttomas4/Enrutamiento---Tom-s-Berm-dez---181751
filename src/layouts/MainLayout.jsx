import { Outlet} from "react-router-dom";
import Navbar from "../components/Navbar";

function MainLayout () {
 return ( 
   <>
    
    <Navbar/>

    <main className="contenedor">
     <Outlet />   
    </main>

   </>
 );    

}

export default MainLayout;