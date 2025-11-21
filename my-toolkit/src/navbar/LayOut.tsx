import type { JSX } from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

 
 export default function LayOut():JSX.Element {
   return (
     <div>
       <NavBar />
      <Outlet />
     </div>
   )
 }
 