import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";

export default function CreatePost() {
  const navigate = useNavigate();

  const { authState } = useContext(AppContext);

  const initialValues = {
    title: "",
    postText: "",
    username: authState.username,
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Required Field!"),
    postText: Yup.string().required("Required Field!"),
    username: Yup.string().required("Required Field!"),
  });

  const onSubmit = (data, { resetForm }) => {
    console.log(data);
    axios.post("http://localhost:4000/posts", data).then((response) => {
      console.log("success");
    });
    resetForm({ data: "" });
    navigate("/");
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <div
            className="container w-50"
            style={{ marginTop: "100px", marginBottom: "100px" }}
          >
            <div className="first-container">
              <label className="form-label" style={{ color: "green" }}>
                Title
              </label>
              <Field
                className="form-control"
                placeholder="Enter you title here"
                type="text"
                name="title"
              />
            </div>
            <div className="userError my-2" style={{ color: "red" }}>
              <ErrorMessage name="title" />
            </div>
            <div className="second-container my-2">
              <label className="form-label" style={{ color: "green" }}>
                Post Text
              </label>
              <Field
                as="textarea"
                className="form-control"
                placeholder="Write your post."
                type="text"
                name="postText"
              />
            </div>
            <div className="userError my-2" style={{ color: "red" }}>
              <ErrorMessage name="postText" />
            </div>
            <div className="third-container">
              <label className="form-label" style={{ color: "green" }}>
                Username
              </label>
              <Field
                className="form-control"
                placeholder="Enter your username."
                name="username"
                readOnly
              />
            </div>
            <div className="userError my-2" style={{ color: "red" }}>
              <ErrorMessage name="username" />
            </div>

            <button type="submit" className="btn btn-warning my-3">
              Create Post
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
