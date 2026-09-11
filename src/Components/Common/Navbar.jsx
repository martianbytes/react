import { Link, useNavigate } from "react-router";
import { useState } from "react";

export default function Navbar1() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <nav className="relative z-50 w-full border-b border-gray-800 bg-gray-900">
      <div className="flex items-center justify-between px-4 py-3">
        <span className="font-bold text-teal-300">Brand</span>
        <div className="hidden md:flex items-center gap-6 text-gray-300">
          <Link to={'/'}><a href="#">Home</a></Link>
          <Link to={'/cards'}>Products</Link>
          <a href="#">Pricing</a>
          <Link to={'/sell'}><div>Add product</div></Link>

        </div>
        <a className="hidden lg:inline-block bg-indigo-500 text-white text-sm px-4 py-2 rounded-md cursor-pointer hover:bg-indigo-400 active:scale-95" onClick={() => navigate('/signup')}>
          Sign up
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden flex flex-col gap-1">
          <span className="w-5 h-0.5 bg-gray-200" /><span className="w-5 h-0.5 bg-gray-200" /><span className="w-5 h-0.5 bg-gray-200" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-800 px-4 py-2 flex flex-col gap-2 text-gray-300">
          <Link to={'/'}><a href="#">Home</a></Link>
          <Link to={'/cards'}>Products</Link>
          <a href="#">Pricing</a>
        </div>
      )}
    </nav>
  );
}