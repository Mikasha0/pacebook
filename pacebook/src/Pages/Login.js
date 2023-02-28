import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import { AppContext } from "../App";

export default function Login() {
  let navigate = useNavigate();

  const { setAuthState } = useContext(AppContext);

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Required Field!"),
    password: Yup.string().required("Required Field!"),
  });

  const onSubmit = (data, { resetForm }) => {
    console.log(data);
    axios.post("http://localhost:4000/users/login", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        localStorage.setItem("accessToken", response.data.token);
        setAuthState({
          username: response.data.username,
          id: response.data.id,
          status: true,
        });
        navigate("/users");
      }
    });
    resetForm({ data: "" });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div
          className="login container w-50 mb-5"
          style={{ marginTop: "180px" }}
        >
          <div className="first-field">
            <Field
              placeholder="Enter your username"
              className="form-control"
              name="username"
            />
            <div className="error-first my-2" style={{ color: "red" }}>
              <ErrorMessage name="username" />
            </div>
          </div>

          <div className="second-field my-4">
            <Field
              placeholder="Password"
              className="form-control"
              name="password"
              type="password"
            />
            <div className="error-second my-2" style={{ color: "red" }}>
              <ErrorMessage name="password" />
            </div>
          </div>
          <button className="btn btn-primary w-100" type="submit">
            Login
          </button>
          <p className="text-center my-2">
            Not already Registered? <Link to="/register">Register</Link>
          </p>
        </div>
      </Form>
    </Formik>
  );
}
