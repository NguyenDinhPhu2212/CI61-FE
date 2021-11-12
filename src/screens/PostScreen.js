import React, { useState } from "react";
import { useHistory } from "react-router";
import { handleDelete } from "../apis/api";
import Popup from "../components/Popup";
import { DELETE_POST_API } from "../constants/api";
import stringInject from "stringinject";
import { useSelector } from "react-redux";
const PostScreen = (props) => {
    const { state } = props.location;
    const [showPopup, setShowPopup] = useState(false);
    const history = useHistory();
    const redirectToUpdate = () => {
        history.push({ pathname: "/edit", state: state });
    };
    const handleClickDelete = () => {
        setShowPopup(true);
    };
    const handleCancel = () => {
        setShowPopup(false);
    };
    const token = useSelector((state) => {
        return state.user.token;
    });
    const deletePost = async () => {
        const response = await handleDelete(
            stringInject(DELETE_POST_API, { slug_blog: state.slug }),
            token
        );
        if (!response.success) {
            console.log(response.message);
        } else {
            setShowPopup(false);
            history.push("your-blogs");
        }
    };
    return (
        <div>
            <div className="w-3/5 m-auto p-10">
                <div className="text-4xl font-semibold m-auto mt-10 mb-10 w-full">
                    {state.title}
                </div>
                <div className="m-auto bg-gray-100 p-10 rounded w-full">
                    {state.description}
                </div>
                <div className="text-sm text-gray-500 flex mt-5">
                    <div
                        onClick={() => redirectToUpdate()}
                        className="mr-10 cursor-pointer hover:text-blue-600"
                    >
                        Update
                    </div>
                    <div
                        className="cursor-pointer hover:text-blue-600"
                        onClick={handleClickDelete}
                    >
                        Delete
                    </div>
                </div>
            </div>
            {showPopup && (
                <Popup action={deletePost} cancel={handleCancel}></Popup>
            )}
        </div>
    );
};
export default PostScreen;
