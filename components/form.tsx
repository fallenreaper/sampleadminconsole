// ReactHookForm
//  vs
// Formic

import { Box, Button, TextField } from "@mui/material";
import { Formik, FormikProps } from "formik";
import * as yup from "yup";
import { useMediaQuery } from "@mui/material";
import Header from "./header";

const phoneRegex =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const initialValues = {
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
  };
  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />
      <Formik
        onSubmit={handleFormSumbit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {(data: FormikProps<any>) => {
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
                  value="firstName"
                  error={!!touched}
                />
              </Box>
            </form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default Form;
