import React, { useState, useEffect } from "react";
import { GET_USER_POST_API } from "../constants/api";
import PostList from "./PostList";
import { useHistory } from "react-router";
import { handleGet } from "../apis/api";
import stringInject from "stringinject";
import { useSelector } from "react-redux";
const YourPost = () => {
    // state lưu trữ danh sách các bài đăng được truyền cho postList
    const [posts, setPosts] = useState([]);

    const history = useHistory();
    const redirectToCreate = () => {
        history.push({
            pathname: "/create",
            state: {
                title: "",
                description: "",
                status: "public",
            },
        });
    };
    const user = useSelector((state) => {
        return state.user;
    });
    // call API
    useEffect(async () => {
        try {
            const response = await handleGet(
                stringInject(GET_USER_POST_API, { slug_user: user.slug }),
                user.token
            );
            console.log(response);
            setPosts(response.blogs);
        } catch (error) {}
    }, []);
    return (
        <div>
            <div className="flex w-full static h-full">
                <div className="w-full">
                    <PostList posts={posts} />
                </div>
                <div
                    className="absolute top-10 right-10 cursor-pointer"
                    onClick={() => redirectToCreate()}
                >
                    <div className="w-20 h-20 rounded-full bg-blue-300 flex justify-center items-center hover:bg-blue-400">
                        <div className="text-white text-6xl pb-5">+</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default YourPost;
