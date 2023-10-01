import { NavLink } from "react-router-dom";
const Header = () => {
    return (
        <div className="nav-container flex justify-between mx-20 mt-7">
            <img className="w-48" src="/Logo.png" alt="" />
            <nav className="flex nav-list">
                <ul>
                    <li className="ml-10 text-lg font-semibold">
                        <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""}>
                            Home
                        </NavLink>
                    </li>
                </ul>
                <ul>
                    <li className="ml-10 text-lg font-semibold">
                        <NavLink to="/login" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""}>
                            Login
                        </NavLink>
                    </li>
                </ul>
                <ul>
                    <li className="ml-10 text-lg font-semibold">
                        <NavLink to="/register" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""}>
                            Register
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;