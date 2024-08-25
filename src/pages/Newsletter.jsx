import React from "react";
import { Form, redirect, useNavigation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await axios.post(newsletterUrl, data);
    console.log(response);
    toast.success(response.data.msg);
    return redirect("/");
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Newsletter = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Form action="" className="form" method="POST">
      <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
        our newsletter
      </h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          First Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-input"
          defaultValue={"vishal"}
        />
      </div>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          name="lastName"
          id="lastname"
          className="form-input"
          defaultValue={"singh"}
        />
      </div>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-input"
          defaultValue={"test@test.com"}
        />
      </div>
      <button
        type="submit"
        className="btn btn-block"
        style={{ marginTop: "0.5rem" }}
        disabled={isSubmitting}
      >
        {isSubmitting ? "submitting..." : "submit"}
      </button>
    </Form>
  );
};

export default Newsletter;
