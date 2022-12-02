// ReactHookForm
//  vs
// Formic

import { Box, Button, TextField } from "@mui/material";
import { Formik, FormikProps } from "formik";
import * as yup from "yup";
import { useMediaQuery } from "@mui/material";
import Header from "../components/header";

const phoneRegex =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

interface MyFormProps {
  firstName: string;
  lastName: string;
  email: string;
  contact: string;
  address1: string;
  address2: string;
}

const initialValues: MyFormProps = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

const userSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("Invalid Email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegex, "Phone number is not Valid.")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const handleFormSumbit = (values: any) => {
    console.log("Values : ", values);
    console.log("We will conduct Save Action with this data...");
  };
  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />
      <Formik
        onSubmit={handleFormSumbit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {(data: FormikProps<MyFormProps>) => {
          const {
            values,
            errors,
            touched,
            handleSubmit,
            handleBlur,
            handleChange,
          } = data;

          return (
            <form onSubmit={handleSubmit}>
              <Box
                display="grid"
                gap="30px"
                gridTemplateColumns="repeat(4, minmax(0, ifr))"
                sx={{
                  "& > div": { gridColumn: isNonMobile ? undefined : "span 4" }, // 4 represents entire line since i defined it in the repeat.
                }}
              >
                <TextField
                  type="text"
                  variant="filled"
                  fullWidth
                  label="First Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="firstName"
                  value={values.firstName}
                  error={!!touched.firstName && !!errors.firstName}
                  helperText={touched.firstName && errors.firstName}
                  sx={{
                    gridColumn: "span 2",
                  }}
                />
                <TextField
                  type="text"
                  fullWidth
                  variant="filled"
                  label="Last Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="lastName"
                  value={values.lastName}
                  error={!!touched.lastName && !!errors.lastName}
                  helperText={touched.lastName && errors.lastName}
                  sx={{
                    gridColumn: "span 2",
                  }}
                />
                <TextField
                  type="text"
                  fullWidth
                  variant="filled"
                  label="Email Address"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="email"
                  value={values.email}
                  error={!!touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                  sx={{
                    gridColumn: "span 4",
                  }}
                />
                <TextField
                  type="text"
                  fullWidth
                  variant="filled"
                  label="Phone Number"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="contact"
                  value={values.contact}
                  error={!!touched.contact && !!errors.contact}
                  helperText={touched.contact && errors.contact}
                  sx={{
                    gridColumn: "span 4",
                  }}
                />
                <TextField
                  type="text"
                  fullWidth
                  variant="filled"
                  label="Address 1"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="address1"
                  value={values.address1}
                  error={!!touched.address1 && !!errors.address1}
                  helperText={touched.address1 && errors.address1}
                  sx={{
                    gridColumn: "span 4",
                  }}
                />
                <TextField
                  type="text"
                  fullWidth
                  variant="filled"
                  label="Address 2"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="address2"
                  value={values.address2}
                  error={!!touched.address2 && !!errors.address2}
                  helperText={touched.address2 && errors.address2}
                  sx={{
                    gridColumn: "span 4",
                  }}
                />
              </Box>
              <Box display="flex" justifyContent="end" mt="20px">
                <Button type="submit" variant="contained" color="secondary">
                  Create New User
                </Button>
              </Box>
            </form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default Form;
