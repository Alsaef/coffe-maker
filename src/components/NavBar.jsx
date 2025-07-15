import { Link } from "react-router";
import navBG from '../assets/images/more/navbar.jpg';
import Logo from '../assets/images/more/logo1.png';

const Navbar = () => {
  return (
    <div 
    style={{
  backgroundImage: `url(${navBG})`,
  backgroundColor: 'lightgray',
  backgroundPosition: '50%',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
}}
    className="bg-[#1F1F1F] py-4 px-6 flex justify-between items-center text-white">
      <div className="flex items-center space-x-2">
        <img src={Logo} alt="logo" className="h-8" />
        <h1 className="text-xl font-bold">Espresso Emporium</h1>
      </div>

      <div className="flex gap-4">
        <Link to="/" className="btn btn-sm btn-outline text-white border-white hover:bg-white hover:text-black">
          Home
        </Link>
        <Link to="/login" className="btn btn-sm btn-outline text-white border-white hover:bg-white hover:text-black">
          Login
        </Link>
        <button className="btn btn-sm btn-outline text-white border-white hover:bg-white hover:text-black">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
