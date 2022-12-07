import React, { useState } from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { login } from "../../auth/actions/auth";

import {
  Box,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
let easing = [0.6, -0.05, 0.01, 0.99];
const animate = {
  opacity: 1,
  y: 0,
  transition: {
    duration: 0.6,
    ease: easing,
    delay: 0.16,
  },
};

const API_URL = "http://ec2-34-212-141-95.us-west-2.compute.amazonaws.com:8080/api/auth/";
const LoginForm = ({ setAuth }) => {
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Provide a valid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((store) => store.auth.user);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: true,
    },
    validationSchema: LoginSchema,
    onSubmit: (e) => {
      console.log("submitting...", e);
      setIsSubmitting(true);
      let username = e.email;
      let password = e.password;
      //
      dispatch(login(username, password))
        .then(() => {
          setIsSubmitting(false);
          navigate("/myasinmanager");
        })
        .catch(() => {
          setIsSubmitting(false);
          toast.error('Your credentials are incorrect', {
            position: toast.POSITION.BOTTOM_CENTER
          });
        });
    },
  });

  const onChangeUsername = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  const onChangePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  }

  const handleLogin = (e) => {
    // e.preventDefault();

    // this.setState({
    //   loading: true,
    // });

    // this.form.validateAll();

    // const { dispatch, history } = this.props;

    // if (this.checkBtn.context._errors.length === 0) {
    //   dispatch(login(this.state.username, this.state.password))
    //     .then(() => {
    //       history.push(Routes.Products.path);
    //       window.location.reload();
    //     })
    //     .catch(() => {
    //       this.setState({
    //         loading: false
    //       });
    //     });
    // } else {
    //   this.setState({
    //     loading: false,
    //   });
    // }
  }
  const { errors, touched, values, handleSubmit, getFieldProps } =
    formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Box
          component={motion.div}
          animate={{
            transition: {
              staggerChildren: 0.55,
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
            component={motion.div}
            initial={{ opacity: 0, y: 40 }}
            animate={animate}
          >
            <TextField
              fullWidth
              autoComplete="username"
              type="email"
              label="Email Address"
              {...getFieldProps("email")}
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email}
            />

            <TextField
              fullWidth
              autoComplete="current-password"
              type={showPassword ? "text" : "password"}
              label="Password"
              {...getFieldProps("password")}
              error={Boolean(touched.password && errors.password)}
              helperText={touched.password && errors.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {showPassword ? (
                        <Icon icon="eva:eye-fill" />
                      ) : (
                        <Icon icon="eva:eye-off-fill" />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={animate}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ my: 2 }}
            >

            </Stack>

            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
            >
              {isSubmitting ? "loading..." : "Login"}
            </LoadingButton>
          </Box>
        </Box>
      </Form>
      <ToastContainer />
    </FormikProvider>

  );
};

export default LoginForm;