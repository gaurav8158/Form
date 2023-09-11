// import {
//   Card,
//   Typography,
//   CardContent,
//   Button,
//   Box,
//   AspectRatio,
// } from "@mui/joy";
// import TextField from "@mui/material/TextField";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
// import { useState } from "react";
// import { ErrorMessage, Field, Formik } from "formik";
// import * as yup from "yup";

// const validationSchema = yup.object({
//   password: yup
//     .string()
//     .matches(
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
//       "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
//     )
//     .required("password is required"),
//   confirmpassword: yup
//     .string()
//     .oneOf([yup.ref("password"), null], "Passwords must match")
//     .required("confirm password is required"),
// });
// const initialValues = {
//   password: "",
//   confirmpassword: "",
// };

// const Usercard = ({ userinfo }) => {
//   const [open, setOpen] = useState(false);
//   const handleSubmit = (values, props, e) => {
//     e.preventDefault();
//     console.log(values);
//     const val = JSON.parse(localStorage.getItem("data"));
//     localStorage.setItem("data", JSON.stringify(val));
//     props.resetForm();
//   };

//   const handleOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };
//   return (
//     <div>
//       <h1 className="text-center">User Information</h1>
//       <Box
//         sx={{
//           padding: "1rem",
//           width: "90%",
//           position: "relative",
//           overflow: { xs: "auto", sm: "initial" },
//         }}
//       >
//         <Card
//           orientation="horizontal"
//           sx={{
//             width: "100%",
//             flexWrap: "wrap",
//             [`& > *`]: {
//               "--stack-point": "500px",
//               minWidth:
//                 "clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)",
//             },
//             // make the card resizable for demo
//             overflow: "auto",
//             resize: "horizontal",
//           }}
//         >
//           <AspectRatio flex ratio="1" maxHeight={182} sx={{ minWidth: 182 }}>
//             <img
//               src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
//               srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
//               loading="lazy"
//               alt=""
//             />
//           </AspectRatio>
//           <CardContent>
//             <Typography fontSize="xl" fontWeight="lg">
//               Name : {`${userinfo.firstname} ${userinfo.lastname}`}
//             </Typography>
//             <Typography fontSize="xl" fontWeight="lg">
//               Email : {`${userinfo.email}`}
//             </Typography>
//             <Typography fontSize="xl" fontWeight="lg">
//               Password : {`${userinfo.password}`}
//             </Typography>
//             <Button
//               onClick={handleOpen}
//               variant="outlined"
//               style={{ width: "50%" }}
//             >
//               Edit Password
//             </Button>

//             <Dialog open={open} onClose={handleClose}>
//               <DialogTitle>Password Change</DialogTitle>
//               <DialogContent>
//                 <DialogContentText>
//                   Please enter new password and confirm password to chnage your
//                   password...
//                 </DialogContentText>
//                 <Formik
//                   initialValues={initialValues}
//                   validationSchema={validationSchema}
//                   onSubmit={handleSubmit}
//                 >
//                   {(formik) => (
//                     <form>
//                       <Field
//                         as={TextField}
//                         label="Password"
//                         type="password"
//                         name="password"
//                         fullWidth
//                         variant="outlined"
//                         margin="dense"
//                         helperText={<ErrorMessage name="password" />}
//                         error={
//                           formik.errors.password && formik.touched.password
//                         }
//                         required
//                       />
//                       <Field
//                         as={TextField}
//                         label="Confirm password"
//                         type="password"
//                         name="confirmpassword"
//                         fullWidth
//                         variant="outlined"
//                         margin="dense"
//                         helperText={<ErrorMessage name="confirmpassword" />}
//                         error={
//                           formik.errors.confirmpassword &&
//                           formik.touched.confirmpassword
//                         }
//                         required
//                       />
//                       <Button type="submit">Update password</Button>
//                     </form>
//                   )}
//                 </Formik>

//                 <DialogActions>
//                   <Button onClick={handleClose}>close</Button>
//                 </DialogActions>
//               </DialogContent>
//             </Dialog>
//           </CardContent>
//         </Card>
//       </Box>
//     </div>
//   );
// };
// export default Usercard;













import {
  Card,
  Typography,
  CardContent,
  Button,
  Box,
  AspectRatio,
} from "@mui/joy";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number, and one special case Character"
    )
    .required("Password is required"),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});
const initialValues = {
  password: "",
  confirmpassword: "",
};

const Usercard = ({ userinfo }) => {
  const [open, setOpen] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    // Assuming you have a user object in localStorage
    const user = JSON.parse(localStorage.getItem("data"));
  
    // Update the user's password
    user.password = values.password;
    user.confirmpassword = values.confirmpassword;
    // Store the updated user object back in localStorage
    localStorage.setItem("data", JSON.stringify(user));
  
    // Close the dialog and reset the form
    setOpen(false);
    resetForm();
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Box
        sx={{
          padding: "1rem",
          width: "90%",
          position: "relative",
          overflow: { xs: "auto", sm: "initial" },
        }}
      >
        <h2 className="text-center">Profile :-</h2>
        <Card
          orientation="horizontal"
          sx={{
            width: "100%",
            flexWrap: "wrap",
            [`& > *`]: {
              "--stack-point": "500px",
              minWidth:
                "clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)",
            },
            // make the card resizable for demo
            overflow: "auto",
            resize: "horizontal",
          }}
        >
          <AspectRatio flex ratio="1" maxHeight={182} sx={{ minWidth: 182 }}>
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
              srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
              loading="lazy"
              alt=""
            />
          </AspectRatio>
          <CardContent>
            <Typography fontSize="xl" fontWeight="lg">
              Name : {`${userinfo.firstname} ${userinfo.lastname}`}
            </Typography>
            <Typography fontSize="xl" fontWeight="lg">
              Email : {`${userinfo.email}`}
            </Typography>
            <Typography fontSize="xl" fontWeight="lg">
              Password : {`${userinfo.password}`}
            </Typography>
            <Button
              onClick={handleOpen}
              variant="outlined"
              style={{ width: "50%" }}
            >
              Edit Password
            </Button>

            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Password Change</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Please enter a new password and confirm password to change your password...
                </DialogContentText>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {(formik) => (
                    <Form>
                      <Field
                        as={TextField}
                        label="Password"
                        type="password"
                        name="password"
                        fullWidth
                        variant="outlined"
                        margin="dense"
                        helperText={<ErrorMessage name="password" />}
                        error={
                          formik.errors.password && formik.touched.password
                        }
                        required
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
                        required
                      />
                      <Button type="submit">Update password</Button>
                    </Form>
                  )}
                </Formik>

                <DialogActions>
                  <Button onClick={handleClose}>Close</Button>
                </DialogActions>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default Usercard;

