import React from "react";
import { Formik, Field, Form } from "formik";
import * as emailjs from "emailjs-com";
import { TextField, Button } from "@material-ui/core";
const Contact = () => {
  return (
    <div className="form">
      <p>Feel free to reach me!</p>
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          console.log("submit", data);
          let template_params = {
            reply_to: data.email,
            from_name: data.name,
            message_html: data.message
          };
          let service_id = "default_service";
          let template_id = "template_bI7QUFno";

          emailjs
            .send(
              service_id,
              template_id,
              template_params,
              "user_yewfZMZkNB2ExHznDWiUn"
            )
            .then(res => {
              console.log(res);
              alert("Thank you for contacting me!");
            })
            .catch(err => {
              console.error(err);
            });
          setSubmitting(false);
          resetForm();
        }}
      >
        {({ values, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
          <Form>
            <Field
              required
              placeholder="Name"
              name="name"
              type="input"
              fullWidth
              as={TextField}
            />
            <div className="field">
              <Field
                required
                fullWidth
                placeholder="Email"
                name="email"
                type="input"
                as={TextField}
              />
            </div>
            <div className="field">
              <Field
                required
                fullWidth
                placeholder="Message"
                name="message"
                type="input"
                multiline
                rows="4"
                as={TextField}
              />
            </div>

            {/* <TextField
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          /> */}
            <div className="field">
              <Button disabled={isSubmitting} type="submit">
                Submit
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Contact;
