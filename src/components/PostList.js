import React, { useState, useEffect } from "react";
import axios from "axios";
import { GET_POST_API } from "../constants/api";
import Post from "./Post";
const PostList = ({ posts }) => {
    const [postList, setPostList] = useState([]);
    useEffect(() => {
        setPostList(posts);
    }, [posts]);

    return (
        <div className="w-full pb-10">
            {postList.map((post) => {
                return <Post key={post.created} post={post} />;
            })}
        </div>
    );
};
export default PostList;
