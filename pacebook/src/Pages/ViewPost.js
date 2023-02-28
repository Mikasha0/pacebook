import { useState, useEffect, useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../App";
import "../Component/Navbar.css";

export default function ViewPost() {
  const { id } = useParams();

  const [postObject, setPostObject] = useState([]);

  const [comment, setComment] = useState([]);

  const [show, setShow] = useState(false);

  const { authState } = useContext(AppContext);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:4000/posts/click/${id}`).then((response) => {
      setPostObject(response.data);
    });

    axios.get(`http://localhost:4000/comments/${id}`).then((response) => {
      setComment(response.data);
    });
  }, [id]);

  const initialValues = {
    comment: "",
  };

  const validationSchema = Yup.object({
    comment: Yup.string().required("cannot post empty comment!"),
  });

  const onSubmit = (data, { resetForm }) => {
    console.log(data);
    axios
      .post(
        `http://localhost:4000/comments`,
        {
          comment: data.comment,
          PostId: id,
        },
        {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        }
      )
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        } else {
          const commentToAdd = {
            comment: data.comment,
            username: response.data.username,
          };
          setComment([...comment, commentToAdd]);
        }
      });
    resetForm({ data: "" });
  };

  const deleteComment = (id) => {
    axios
      .delete(`http://localhost:4000/comments/${id}`, {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then(() => {
        setComment(
          comment.filter((val) => {
            return val.id !== id;
          })
        );
      });
  };

  const showComment = () => {
    setShow(!show);

    axios.get(`http://localhost:4000/comments/${id}`).then((response) => {
      setComment(response.data);
    });
  };

  const deletePost = (id) => {
    axios
      .delete(`http://localhost:4000/posts/${id}`, {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        alert("deleted successfully");
        navigate("/");
      });
  };

  const back = () => {
    navigate("/");
  };

  return (
    <>
      <div className="container text-center" style={{ marginTop: "120px"}}>
        <div className="card text-center">
          <div className="card-header">Username: {postObject.username}</div>
          <div className="card-body">
            <h5 className="card-title" style={{ color: "green" }}>
              {postObject.title}
            </h5>
            <p className="card-text">{postObject.postText}</p>
          </div>
          <div
            className="card-footer text-muted"
            style={{ backgroundColor: "black" }}
          >
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              <Form>
                <div className="container input-group">
                  <Field
                    className="form-control"
                    name="comment"
                    placeholder="Write your comment here.."
                    type="text"
                  />
                  <button className="btn btn-warning mx-3" type="submit">
                    Comment
                  </button>
                </div>
                <div className="errorMsg" style={{ color: "red" }}>
                  <ErrorMessage name="comment" />
                </div>
              </Form>
            </Formik>
            {authState.username === postObject.username && (
              <button
                className="btn btn-danger my-3"
                onClick={() => {
                  deletePost(postObject.id);
                }}
              >
                Delete Post
              </button>
            )}

            <button className="btn btn-primary my-3 mx-2" onClick={back}>
              Go Back
            </button>
            <button className="btn btn-secondary my-3" onClick={showComment}>
              Load Comments
            </button>
          </div>
        </div>
      </div>
      <div className="container my-5">
        {show &&
          comment.map((value) => (
            <div
              className="container"
              key={value.comment}
              style={{ marginTop: "20px" }}
            >
              <div className="card">
                <div className="card-body">
                  <h6 className="card-title" style={{ color: "green" }}>
                    {value.username}
                  </h6>
                  <p className="card-text">{value.comment}</p>
                </div>
                <div className="card-footer text-muted">
                  {authState.username === value.username && (
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        deleteComment(value.id);
                      }}
                    >
                      Delete
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
