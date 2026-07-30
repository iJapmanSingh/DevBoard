import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <nav className="h-16 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-6">

      {/* Logo */}
      <h1 className="text-2xl font-bold text-blue-500">
        DevBoard
      </h1>

      {/* Right Section */}
      <div className="flex items-center gap-4">

        <input
          type="text"
          placeholder="Search..."
          className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 outline-none focus:border-blue-500"
        />

        <button className="text-xl">
          🔔
        </button>

        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center font-bold">
          J
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg"
        >
          Logout
        </button>

      </div>

    </nav>
  );
}

export default Navbar;