import React, { useState, useEffect, useContext } from "react";
import "./SeePost.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";

export default function SeePost() {
  const [showPost, setShowPost] = useState([]);

  const { authState } = useContext(AppContext);

  let navigate = useNavigate();

  useEffect(() => {
    if (!authState.status) {
      navigate("/login");
    } else {
      axios.get("http://localhost:4000/posts").then((response) => {
        setShowPost(response.data);
      });
    }
  }, [authState, navigate]);

  const likePost = (PostId) => {
    axios
      .post(
        "http://localhost:4000/likes",
        { PostId: PostId },
        {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        }
      )
      .then((response) => {
        setShowPost(
          showPost.map((post) => {
            if (post.id === PostId) {
              if (response.data.liked) {
                return { ...post, Likes: [...post.Likes, 0] };
              } else {
                const likesArray = post.Likes;
                likesArray.pop();
                return { ...post, Likes: likesArray };
              }
            } else {
              return post;
            }
          })
        );
      });
  };

  return (
    <div
      className="container"
      style={{ marginTop: "120px", marginBottom: "100px" }}
    >
      {showPost.map((post) => (
        <section
          className="mx-auto my-3"
          style={{ width: "23rem" }}
          key={post.id}
        >
          <div className="card testimonial-card mt-2 mb-3">
            <div className="card-up aqua-gradient"></div>
            <div className="avatar mx-auto white">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                className="rounded-circle img-fluid"
                alt="woman avatar"
              />
            </div>
            <div
              className="card-body text-center"
              onClick={() => {
                navigate(`/click/${post.id}`);
              }}
            >
              <h4
                className="card-title font-weight-bold"
                style={{ color: "green" }}
              >
                {post.username}
              </h4>
              <hr />
              <h6>{post.title}</h6>
              <p>
                <i className="fas fa-quote-left"></i> {post.postText}
              </p>
            </div>
            <div className="container my-1">
              <button
                className="btn btn-light"
                onClick={() => {
                  likePost(post.id);
                }}
              >
                Like
              </button>
              <label className="mx-3">{post.Likes.length}</label>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
