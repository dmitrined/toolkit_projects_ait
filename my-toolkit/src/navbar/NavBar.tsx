import type { JSX } from "react";
import { useState } from "react"; 
import logoAit from "../images/AitLogo.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Avatar } from "@mui/material";
import myFoto from "../images/myFoto.png";
import { NavLink } from "react-router-dom";
import { selectUser } from "../features/auth/selectors";
import { useAppSelector } from "../app/hooks";

export default function NavBar(): JSX.Element {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const user = useAppSelector(selectUser)
  
  const projects = [
    { name: "ProductsList", to: "productsList" },
    { name: "UsersList", to: "usersList" },
    { name: "Counter", to: "counter" },
    { name: "WeatherApp", to: "weatherApp" },
  ];

  const handleLinkClick = () => {
    setIsProjectsOpen(false); 
  };

  return (
    <div className="shadow-md sticky top-0 z-50 bg-white">
      <nav className="flex items-center justify-between px-4 py-2 md:py-4 max-w-7xl mx-auto">
        
        <a 
          target="_blank"
          href="https://edu.ait-tr.de/"
          className="p-2 transition duration-200 hover:opacity-80"
        >
          <img src={logoAit} alt="logoAit" className="max-h-12 w-auto" />
        </a>

        <a
            target="_blank"
            href="https://github.com/dmitrined/toolkit_projects_ait/tree/main/my-toolkit/src"
            className="p-2 text-gray-600 hover:text-blue-500 transition duration-200"
          >
            <GitHubIcon className="w-6 h-6" />
          </a>

        {user?.username ? (

        <div className="flex items-center space-x-4">
          
          <div className="relative">
            <button
              onClick={() => setIsProjectsOpen(!isProjectsOpen)} 
              className="flex items-center text-gray-700 hover:text-blue-600 font-medium py-2 px-3 transition duration-200 rounded-md hover:bg-gray-50 focus:outline-none"
            >
              Projects
              <svg 
                className={`w-4 h-4 ml-1 transform transition-transform ${isProjectsOpen ? 'rotate-180' : 'rotate-0'}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            
            {isProjectsOpen && (
              <ul 
                className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-xl z-10 list-none p-0"
              >
                {projects.map((project) => (
                  <li 
                    key={project.name}
                    className="block text-sm" 
                  > 
                    <NavLink 
                      to={project.to} 
                      className={({ isActive }) => 
                        `block px-4 py-2 text-sm transition duration-150 ${
                          isActive 
                            ? "bg-blue-100 text-blue-700 font-semibold" 
                            : "text-gray-700 hover:bg-blue-50 hover:text-blue-600" 
                        }`
                      }
                      onClick={handleLinkClick} 
                    >
                      {project.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          <NavLink to="/home">
            <Avatar alt="myFoto" src={myFoto} />
          </NavLink>
         
         </div>
          ) : ( 
          <div className="flex items-center space-x-4">
            <NavLink 
                to="/" 
                className="text-gray-700 hover:text-blue-600 font-medium py-2 px-3 transition duration-200"
            >
                Home
            </NavLink>
            <NavLink 
                to="login" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-200"
            >
                Login
            </NavLink>
        </div>
      )}

      </nav>
    </div>
  );
}