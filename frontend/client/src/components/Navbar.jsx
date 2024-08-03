/* eslint-disable no-unused-vars */
// import { useState } from 'react';

import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutProject } from "../actions/proejctActions";

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = () => {
        dispatch(logoutProject());
        navigate("/");
    };


    const auth = useSelector((state) => state.loginProject);
    const { loading, error, userInfo, isAuthenticated } = auth;
    // console.log(userInfo.email)
    const authlinks = (
        <div>
            <button type="button" onClick={logoutHandler} className=
                "text-gray-900 bg-white border border-gray-800 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 ">LogOut
            </button>
        </div>

    )

    const guestlinks = (
        <div>
            <Link to={"/signin"}>
                <button type="button" className=
                    "text-gray-900 bg-white border border-gray-800 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 ">Sign In</button>

            </Link>
            <Link to={"/signup"}>
                <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Sign Up</button>
            </Link>
        </div>
    )


    return (
        <div className='w-full h-16  flex justify-around items-center'>
            <div className="text-3xl font-bold">
                <Link to={"/"}>
                    Project<span className="text-blue-600">Manager</span>
                </Link>
            </div>
            <div className="flex gap-10 text-xl mt-3">
                <Link to={"/"}>
                    <button className=
                        "relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span className=
                            "relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Home
                        </span>
                    </button>
                </Link>
                <Link to={"/add-project"}>
                    <button className=
                        "relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span className=
                            "relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Add Project
                        </span>
                    </button>
                </Link>
                <Link to={"/about"}>
                    <button className=
                        "relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span className=
                            "relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Abous us
                        </span>
                    </button>
                </Link>
                <Link to={"/contact"}>
                    <button className=
                        "relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span className=
                            "relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Contact us
                        </span>
                    </button>
                </Link>

            </div>
            <div className="mt-3">
                {isAuthenticated ? authlinks : guestlinks}
            </div>
        </div>
    );
};

export default Navbar;
