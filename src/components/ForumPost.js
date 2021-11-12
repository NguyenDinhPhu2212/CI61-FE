import React, { useState } from "react";
const ForumPost = ({ post }) => {
    const [like, setLike] = useState(0);
    const [comments, setComments] = useState([]);
    const [showComment, setShowComment] = useState(false);
    const [comment, setComment] = useState();
    const handleLike = (e) => {
        e.target.classList.toggle("text-blue-500");
        e.target.classList.toggle("font-medium");
    };
    const handleComment = () => {
        setShowComment(!showComment);
    };
    const handleInputValue = (e) => {
        setComment(e.target.value);
    };
    const handleKeyDown = (e) => {
        if (e.key == "Enter") {
            console.log("Enter");
        }
    };
    return (
        <div className="m-auto w-1/2 ">
            <div className="mt-5 p-5 pb-2 border rounded-md border-gray-300 shadow-md">
                <div className="text-xl text-black font-semibold">
                    {post.title}
                </div>
                <div className="text-sm mt-5">{post.description}</div>
                <div className="mt-5">
                    <div className="flex justify-between text-gray-500 pl-2 pr-2">
                        <div>{like} thích</div>
                        <div
                            onClick={() => handleComment()}
                            className="hover:text-blue-500 cursor-pointer"
                        >
                            {comments.length} bình luận
                        </div>
                    </div>
                    <div className="border-t m-1 border-gray-300"></div>
                    <div className="flex items-center justify-around text-gray-500">
                        <div
                            className="cursor-pointer"
                            onClick={(e) => handleLike(e)}
                        >
                            Thích
                        </div>
                        <div
                            className="cursor-pointer"
                            onClick={() => handleComment()}
                        >
                            Bình luận
                        </div>
                    </div>
                </div>
            </div>
            {showComment && (
                <div className="m-auto">
                    <input
                        type="text"
                        name="comment"
                        id="comment"
                        onChange={(e) => handleInputValue(e)}
                        className="appearance-none border border-gray-300 rounded-3xl mt-2 w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-1 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Viết bình luận ..."
                        onKeyDown={(e) => handleKeyDown(e)}
                    />
                </div>
            )}
        </div>
    );
};
export default ForumPost;
