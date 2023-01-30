import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Required field!"),
    email: Yup.string()
      .email("Invalid email address!")
      .required("Required field!"),
    password: Yup.string().required("Required field!"),
  });

  const onSubmit = (data, { resetForm }) => {
    console.log(data);
    axios.post("http://localhost:4000/users", data).then((response) => {
      alert(response.data);
    });
    navigate("/login");
    resetForm({ data: "" });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="container w-50 mb-5" style={{ marginTop: "100px" }}>
          <div className="first-field">
            <label className="form-label" style={{ color: "green" }}>
              Username
            </label>
            <Field
              className="form-control"
              placeholder="Enter your username..."
              name="username"
            />
          </div>
          <div className="first-error my-2" style={{ color: "red" }}>
            <ErrorMessage name="username" />
          </div>
          <div className="second-field my-2">
            <label className="form-label" style={{ color: "green" }}>
              E-Mail
            </label>
            <Field
              className="form-control"
              placeholder="Enter your email address..."
              name="email"
            />
          </div>
          <div className="second-error my-2" style={{ color: "red" }}>
            <ErrorMessage name="email" />
          </div>
          <div className="third-field">
            <label className="form-label" style={{ color: "green" }}>
              Password
            </label>
            <Field
              type="password"
              className="form-control"
              placeholder="Enter your password..."
              name="password"
            />
          </div>
          <div className="third-error my-2" style={{ color: "red" }}>
            <ErrorMessage name="password" />
          </div>
          <button className="btn btn-warning my-3 w-100" type="submit">
            Register
          </button>
          <p className="text-center my-2">
            Already a user? <Link to="/login">Login</Link>
          </p>
        </div>
      </Form>
    </Formik>
  );
}
