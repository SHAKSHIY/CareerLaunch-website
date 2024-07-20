import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaBarsStaggered, FaXmark, FaMoon, FaSun } from "react-icons/fa6";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const handleMenuToggler = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // const handleThemeToggle = () => {
    //     setIsDarkMode(!isDarkMode);
    // };

    const navItems = [
        { path: "/", title: "Start a Search" },
        { path: "/my-job", title: "My Jobs" },
        { path: "/salary", title: "Salary Estimate" },
        { path: "/post-job", title: "Post a Job" },
        // { path: "/profile", title: "Profile" },
    ];

    return (
        <header className="max-w-screen-2xl container mx-auto xl:px-10 px-0 bg-white dark:bg-gray-800 shadow-md">
            <nav className="flex justify-between items-center py-4">
                <a href="/" className="flex items-center gap-2 text-2xl text-black dark:text-white">
                    <img src="/images/CareerLaunch.png" alt="CareerLaunch Logo" className="h-10 w-10" />
                    <span>CareerLaunch</span>
                </a>
                <ul className="hidden md:flex gap-6">
                    {navItems.map(({ path, title }) => (
                        <li key={path} className="text-base text-primary">
                            <NavLink
                                to={path}
                                className={({ isActive }) => isActive ? "text-purple-600 font-semibold" : "text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-300"}
                            >
                                {title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <div className="flex items-center space-x-5">
                    <button className="text-gray-600 dark:text-gray-300">
                    {isDarkMode ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
                    </button>
                    <div className="hidden lg:block text-base text-primary font-medium space-x-5">
                        <Link to="/login" className="py-2 px-4 border rounded border-gray-300 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700 dark:text-gray-300">Login</Link>
                        <Link to="/register" className="py-2 px-4 border rounded bg-purple-600 text-white hover:bg-purple-700">Register</Link>
                    </div>
                    <div className="md:hidden block">
                        <button onClick={handleMenuToggler}>
                            {isMenuOpen ? <FaXmark className="w-5 h-5 text-primary" /> : <FaBarsStaggered className="w-5 h-5 text-primary" />}
                        </button>
                    </div>
                </div>
            </nav>
            <div className={`px-4 py-5 rounded-sm ${isMenuOpen ? "" : "hidden"} bg-white dark:bg-gray-800 shadow-md`}>
                <ul>
                    {navItems.map(({ path, title }) => (
                        <li key={path} className="text-base text-black dark:text-white py-1">
                            <NavLink
                                to={path}
                                className={({ isActive }) => isActive ? "text-purple-600 font-semibold" : "text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-300"}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {title}
                            </NavLink>
                        </li>
                    ))}
                    <div className="flex flex-row items-center space-x-2 w-full px-0">
                        <Link to="/login" className="py-2 px-5 border text-gray-300 rounded border-gray-300 hover:bg-gray-600 text-center dark:border-gray-600 dark:hover:bg-gray-700 dark:text-gray-300">Login</Link>
                        <Link to="/sign-up" className="py-2 px-3 border rounded bg-purple-600 text-white hover:bg-purple-700 text-center">Sign Up</Link>
                    </div>
                </ul>
            </div>
        </header>
    );
};

export default Navbar;


//onClick={handleThemeToggle}