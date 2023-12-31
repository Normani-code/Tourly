import {Link} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "./UserContext.jsx";

export default function Header() {
  const {user} = useContext(UserContext);
  return (
    <header className="flex justify-between">
      <Link to={'/'} className="flex items-center gap-1">
        <svg fill="#5ad4dd"  className="w-7 h-7" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 338.147 338.147" xml:space="preserve" stroke="#4781c2"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> 
          <path d="M193.25,262.497c0.25,1.706,1.167,3.243,2.55,4.272c1.128,0.84,2.491,1.286,3.881,1.286c0.313,0,0.628-0.022,0.942-0.069 l93.909-13.755c2.25-0.329,4.164-1.81,5.047-3.905c0.884-2.095,0.609-4.499-0.725-6.34L178.62,78.02 c-1.755-2.424-4.94-3.334-7.712-2.208c-2.772,1.127-4.417,4.002-3.983,6.963L193.25,262.497z M282.031,242.923l-76.86,11.258 l-21.545-147.095L282.031,242.923z"></path> <path d="M305.07,280.299c-1.231-2.199-3.622-3.492-6.139-3.306c-0.577,0.042-51.661,3.764-108.076,10.349l-8.363-57.113l-0.002,0 L149.581,5.558c-0.353-2.41-2.023-4.42-4.328-5.208c-2.305-0.789-4.857-0.221-6.611,1.468l-3.147,3.03 C58.664,78.829,22.023,186.002,37.481,291.535c0.473,3.233,3.25,5.559,6.423,5.559c0.313,0,0.631-0.023,0.95-0.069l131.46-19.255 l1.629,11.121c-3.229,0.398-6.465,0.804-9.698,1.219C48.723,305.47,32.248,319.151,32.248,331.647c0,3.59,2.91,6.5,6.5,6.5H212.93 c0.312,0,0.624-0.022,0.933-0.067l9.577-1.389c32.504-4.714,62.116-22.731,81.244-49.429 C306.151,285.212,306.302,282.498,305.07,280.299z M49.468,283.209C37.348,186.676,70.336,89.353,138.57,20.086l35.86,244.82 L49.468,283.209z M221.573,323.825l-9.113,1.322H57.208c6.161-2.384,15.443-5.252,29.413-8.398 c21.891-4.929,51.563-9.764,88.192-14.37c43.941-5.525,87.535-9.394,109.812-11.223 C267.971,308.657,245.663,320.331,221.573,323.825z"></path> </g> </g>
        </svg>
        <span className="font-bold text-xl">Tourly</span>
      </Link>
      <div className="flex gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300">
        <div>🌴Bienvenidos🌴</div>
      </div>
      <Link to={user?'/account':'/login'} className="flex items-center gap-2 border border-gray-300 rounded-full py-2 px-4 ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <div className="bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 relative top-1">
            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
          </svg>
        </div>
        {!!user && (
          <div>
            {user.name}
          </div>
        )}
      </Link>
    </header>
  );
}
