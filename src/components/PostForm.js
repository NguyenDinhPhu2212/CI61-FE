import React, { useState } from "react";
import { ADD_NEW_POST_API, UPDATE_POST_API } from "../constants/api";
import { handlePost, handlePut } from "../apis/api";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import stringInject from "stringinject";
const PostForm = (props) => {
    const { state } = props.location;
    // state lưu trữ dữ liệu được lấy ra từ form
    const [info, setInfo] = useState(state);
    // state lưu trữ hiển thị cảnh báo khi nhấn submit
    const [titleValidation, setTitleValidation] = useState(true);
    const [descriptionValidation, setDescriptionValidation] = useState(true);
    // event xảy ra khi nhập form
    const handleInputValue = (e) => {
        const nameField = e.target.name;
        const valueField = e.target.value;
        setInfo({ ...info, [nameField]: valueField });
    };
    const history = useHistory();
    const token = useSelector((state) => {
        return state.user.token;
    });
    // event khi nhấn nút submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (info.title && info.description && info["status"]) {
            if (state.title.length) {
                const data = {
                    title: info.title,
                    description: info.description,
                    status: info.status,
                };
                const response = await handlePut(
                    stringInject(UPDATE_POST_API, { slug_blog: state.slug }),
                    data,
                    token
                );
                if (response.success) {
                    history.push("/your-blogs");
                }
            } else {
                const response = await handlePost(
                    ADD_NEW_POST_API,
                    info,
                    token
                );
                if (response.success) {
                    history.push("/your-blogs");
                }
            }
        } else {
            if (!info.title) {
                setTitleValidation(false);
            }
            if (!info.description) setDescriptionValidation(false);
        }

        console.log(info);
    };
    return (
        <div className="p-10 z-10 w-full">
            <div className="w-2/3 p-6 bg-white rounded-md m-auto">
                <div>
                    {!state.title.length ? (
                        <div className="px-4 sm:px-0 text-center">
                            <h3 className="text-3xl font-medium leading-6 text-gray-900">
                                Create new post
                            </h3>
                            <p className="mt-1 text-sm text-gray-600">
                                Create your own post and share it for everyone
                                to see, or not
                            </p>
                        </div>
                    ) : (
                        <div className="px-4 sm:px-0 text-center text-3xl font-medium leading-6 text-gray-900 mt-5 mb-5">
                            {" "}
                            Update your post
                        </div>
                    )}
                </div>
                <div className="mt-4 mb-2 hidden sm:block" aria-hidden="true">
                    <div className="py-2">
                        <div className="border-t border-gray-300"></div>
                    </div>
                </div>
                <div>
                    <form>
                        <div className="sm:rounded-md sm:overflow-hidden">
                            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                <div>
                                    <label
                                        for="title"
                                        className="block text-base font-medium text-gray-900"
                                    >
                                        Title
                                    </label>

                                    <input
                                        type="text"
                                        name="title"
                                        id="title"
                                        onChange={(e) => handleInputValue(e)}
                                        className={`appearance-none border 
                                            ${
                                                !titleValidation
                                                    ? "border-red-500"
                                                    : "border-gray-300"
                                            }
                                    rounded-md w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-1 focus:ring-blue-500 focus:border-blue-500`}
                                        placeholder="The title of the post"
                                        value={info.title}
                                    />
                                </div>

                                <div>
                                    <label
                                        for="description"
                                        className="block text-base font-medium text-gray-900"
                                    >
                                        Description{" "}
                                        <span className="text-sm font-normal text-gray-500">
                                            (optional)
                                        </span>
                                    </label>
                                    <div className="mt-1">
                                        <textarea
                                            id="description"
                                            name="description"
                                            rows="8"
                                            onChange={(e) =>
                                                handleInputValue(e)
                                            }
                                            value={info.description}
                                            className={`appearance-none border 
                                            ${
                                                !descriptionValidation
                                                    ? "border-red-500"
                                                    : "border-gray-300"
                                            }
                                    rounded-md w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-1 focus:ring-blue-500 focus:border-blue-500`}
                                        ></textarea>
                                    </div>
                                    <p className="mt-2 text-sm text-gray-500">
                                        Describe the problem you want to ask a
                                        question
                                    </p>
                                </div>
                                <div
                                    className="hidden sm:block"
                                    aria-hidden="true"
                                >
                                    <div className="py-2">
                                        <div className="border-t border-gray-300"></div>
                                    </div>
                                </div>

                                <div className="mt-4 space-y-4">
                                    <div className="flex items-center">
                                        <input
                                            id="public"
                                            name="status"
                                            type="radio"
                                            value="public"
                                            onChange={(e) =>
                                                handleInputValue(e)
                                            }
                                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                            checked={info.status == "public"}
                                        />
                                        <label
                                            for="public"
                                            className="ml-3 block"
                                        >
                                            <span className="flex flex-col">
                                                <span className="text-base font-medium text-gray-900">
                                                    Public
                                                </span>
                                                <span className="text-xs text-gray-500">
                                                    Everyone on the Internet can
                                                    see and read your post
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="private"
                                            name="status"
                                            type="radio"
                                            value="private"
                                            onChange={(e) =>
                                                handleInputValue(e)
                                            }
                                            checked={info.status == "private"}
                                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                        />
                                        <label
                                            for="private"
                                            className="ml-3 block"
                                        >
                                            <span className="flex flex-col">
                                                <span className="text-base font-medium text-gray-900">
                                                    Private
                                                </span>
                                                <span className="text-xs text-gray-500">
                                                    You can choose who can see
                                                    and read this post
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                {/* <button
                                    onClick={() => closeForm()}
                                    className="w-32 inline-flex justify-center py-2 px-4  mr-5 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                >
                                    Close
                                </button> */}
                                <button
                                    onClick={(e) => handleSubmit(e)}
                                    className="w-32 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none"
                                >
                                    {state.title.length
                                        ? "Update"
                                        : "Create post"}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default PostForm;
