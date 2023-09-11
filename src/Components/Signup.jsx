import React, { useState } from "react";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Signup.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Homepage from "./Homepage";
import { useNavigate } from "react-router-dom";
const validationSchema = yup.object({
  firstname: yup.string().required("first name is required"),
  lastname: yup.string().required("second name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    )
    .required("password is required"),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("confirm password is required"),
});

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  confirmpassword: "",
  toggle: false,
};

const Signup = () => {
  const navigate =useNavigate();
  const handleSubmit = (values, props) => {
    console.log(values);
    alert(JSON.stringify(values));
    localStorage.setItem("data", JSON.stringify(values));
    localStorage.setItem("login", values.email);   
    props.resetForm();
    if(localStorage.getItem("data") !== null) {
      navigate("/homepage");
     }
  };

  return (
    <> 
      <div className="main-box">
      <div className="main-container">
        <div className="image-container">
          <h1>Hello,Friend!</h1>
          <br />
          <p>Enter your details and start journey with us</p>
          <button className="sign-up-btn">SIGN-UP</button>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(formik) => {
            return (
              <Form className="form-signup">
                <div className="avtar-icon-box">
                  <div>
                    <Avatar
                      className="avtar-icon"
                      sx={{ m: 1, bgcolor: "secondary.main" }}
                    >
                      <LockOutlinedIcon />
                    </Avatar>
                  </div>
                  <h5 className="signuptag">Sign-up</h5>
                </div>
                <div className="name-box">
                  <Field
                    as={TextField}
                    label="First Name"
                    type="name"
                    name="firstname"
                    fullWidth
                    variant="outlined"
                    margin="dense"
                    helperText={<ErrorMessage name="firstname" />}
                    error={formik.errors.firstname && formik.touched.firstname}
                  />
                  <Field
                    as={TextField}
                    label="Last Name"
                    type="name"
                    name="lastname"
                    fullWidth
                    variant="outlined"
                    margin="dense"
                    helperText={<ErrorMessage name="lastname" />}
                    error={formik.errors.lastname && formik.touched.lastname}
                  />
                </div>
                <Field
                  as={TextField}
                  label="Email"
                  type="Email"
                  name="email"
                  fullWidth
                  variant="outlined"
                  margin="dense"
                  helperText={<ErrorMessage name="email" />}
                  error={formik.errors.email && formik.touched.email}
                />
                <Field
                  as={TextField}
                  label="Password"
                  type="password"
                  name="password"
                  fullWidth
                  variant="outlined"
                  margin="dense"
                  helperText={<ErrorMessage name="password" />}
                  error={formik.errors.password && formik.touched.password}
                />
                <Field
                  as={TextField}
                  label="Confirm password"
                  type="password"
                  name="confirmpassword"
                  fullWidth
                  variant="outlined"
                  margin="dense"
                  helperText={<ErrorMessage name="confirmpassword" />}
                  error={
                    formik.errors.confirmpassword &&
                    formik.touched.confirmpassword
                  }
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="toggle"
                      value={formik.values.toggle}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      color="primary"
                    />
                  }
                  label="Remember Me"
                />
                <Button
                  color="primary"
                  variant="contained"
                  fullWidth
                  type="submit"
                >
                  Sign up
                </Button>

                <div className="signin-link">
                  <a href="/">Forgot password?</a>
                  <a href="/">Already have an account? Sign In</a>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
    </>
   
  );
};

export default Signup;
