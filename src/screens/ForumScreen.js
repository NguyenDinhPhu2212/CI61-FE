import React, { useEffect, useState } from "react";
import { handleGet } from "../apis/api";
import { GET_USER_POST_API } from "../constants/api";
import ForumPost from "../components/ForumPost";
import stringInject from "stringinject";
import { useSelector } from "react-redux";
const ForumScreen = () => {
    const [forum, setForum] = useState([]);
    const user = useSelector((state) => {
        return state.user;
    });
    useEffect(async () => {
        try {
            const response = await handleGet(
                stringInject(GET_USER_POST_API, { slug_user: user.slug }),
                user.token
            );
            setForum(response.blogs);
        } catch (error) {}
    }, []);
    return (
        <div className="w-full pb-10">
            {forum.map((post) => {
                return <ForumPost key={post.created} post={post} />;
            })}
        </div>
    );
};
export default ForumScreen;
