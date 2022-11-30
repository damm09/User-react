import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function navbar(){
    return (
        <>
        {/* navbar */}
      <div className="navbar bg-indigo-500 justify-between fixed top-0 left-0 right-0 z-10 h-10">
        
        <div className="">
          <h3 className="btn btn-ghost normal-case text-xl">Home</h3>
        </div>

        <div className="">
          <div className="dropdown dropdown-left">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
              <Link to={'/'}>List Item</Link>
              </li>
              <li>
              <Link to={'/login'}>List Category</Link>
              </li>
              <li>
                <button>Log out</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Outlet/>
      </>

      
    )
}

export default navbar