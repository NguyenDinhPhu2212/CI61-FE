import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Post = ({ post }) => {
    const [showContextMenu, setShowContextMenu] = useState(false);
    const handleClick = () => {
        setShowContextMenu(!showContextMenu);
    };
    return (
        <div className="relative w-1/2 m-auto">
            <Link
                to={{
                    pathname: "/detail-blog",
                    search: `?slug=${post.slug}`,
                    state: post,
                }}
            >
                <div className="m-auto mt-5 p-5 border-2 rounded-md border-gray-200 hover:border-gray-300">
                    <div className="text-xl text-black font-semibold hover:text-blue-500 m-2">
                        {post.title}
                    </div>
                    <div className="text-sm text-gray-500 truncate">
                        {post.description}
                    </div>
                </div>
            </Link>
            
            {post.status == "private" && (
                <div className="w-6 h-6 opacity-80 absolute top-4 right-4">
                    <img
                        className="w-6 h-6"
                        src="https://img.icons8.com/ios/50/000000/lock--v1.png"
                    />
                </div>
            )}
        </div>
    );
};
export default Post;
