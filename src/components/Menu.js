import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faUsers } from "@fortawesome/free-solid-svg-icons";
const Menu = () => {
    return (
        <div className="w-1/6 bg-gray-800 text-white h-screen">
            <ul className="list-none h-screen">
                <li className="no-underline h-16 flex items-center">
                    <Link to="/home">
                        <div className="flex items-center w-full pl-10">
                            <FontAwesomeIcon
                                icon={faComments}
                                className="mr-5 text-3xl"
                            />
                            <div>Diễn đàn</div>
                        </div>
                    </Link>
                </li>
                <li className="no-underline h-16 flex items-center">
                    <Link to="/your-blogs">
                        <div className="flex items-center w-full pl-10">
                            <FontAwesomeIcon
                                icon={faUsers}
                                className="mr-5 text-3xl"
                            />
                            <div>Bài đăng</div>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    );
};
export default Menu;
