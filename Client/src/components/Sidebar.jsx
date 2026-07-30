import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  CheckSquare,
  NotebookPen,
  BarChart3,
  User,
} from "lucide-react";

const links = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <LayoutDashboard size={20} />,
  },
  {
    name: "Tasks",
    path: "/tasks",
    icon: <CheckSquare size={20} />,
  },
  {
    name: "Analytics",
    path: "/analytics",
    icon: <BarChart3 size={20} />,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: <User size={20} />,
  },
];

function Sidebar() {
  return (
    <aside className="w-64 min-h-[calc(100vh-64px)] bg-slate-900 border-r border-slate-800 p-4">

      <nav className="flex flex-col gap-2">

        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            {link.icon}
            <span>{link.name}</span>
          </NavLink>
        ))}

      </nav>

    </aside>
  );
}

export default Sidebar;


// import { NavLink } from "react-router-dom";

// function Sidebar(){
//     return(
//         <aside
//             style={{
//                 width : "220px",
//                 height  : "calc(100vh - 60px)",
//                 background : "#334155" ,
//                 color : "white" ,
//                 padding : "20px" ,
//             }}
//         >
//             <NavLink
//                 to="/dashboard"
//                 style={({ isActive }) => ({
//                     color: isActive ? "yellow" : "white"
//                 })}
//             >
//                 Dashboard
//             </NavLink>

//             <br />

//             <NavLink
//                 to="/tasks"
//                 style={({ isActive }) => ({
//                     color: isActive ? "yellow" : "white"
//                 })}
//             >
//                 Tasks
//             </NavLink>

//             <br />

//             <NavLink
//                 to="/notes"
//                 style={({ isActive }) => ({
//                     color: isActive ? "yellow" : "white"
//                 })}
//             >
//                 Notes
//             </NavLink>

//             <br />

//             <NavLink
//                 to="/analytics"
//                 style={({ isActive }) => ({
//                     color: isActive ? "yellow" : "white"
//                 })}
//             >
//                 Analytics
//             </NavLink>

//             <br />

//             <NavLink
//                 to="/profile"
//                 style={({ isActive }) => ({
//                     color: isActive ? "yellow" : "white"
//                 })}
//             >
//                 Profile
//             </NavLink>
//         </aside>
//     )
// }
// export default Sidebar ;