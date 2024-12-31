import { useRouter } from "next/router";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const Checkout = () => {
  const router = useRouter();
  const { cartItems } = useSelector((state) => state.cart);
  const [paymentStatus, setPaymentStatus] = useState(null);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    cardNumber: Yup.string().required("Card number is required"),
    expiration: Yup.string().required("Expiration date is required"),
    cvc: Yup.string().required("CVC is required"),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };
  const handlePayment = async () => {
    if (validationSchema) {
      try {
        const response = await fetch("/api/payment", {
          method: "POST",
        });
        const data = await response.json();
        setPaymentStatus(data.success);
        if (paymentStatus) {
          router.push("/success");
        } else {
          router.push("/failed");
        }
      } catch (error) {
        console.error("Error making payment:", error);
      }
    }
  };
  if (cartItems.length === 0) {
    router.push("/home");
  }
  return (
    cartItems.length > 0 && (
      <div className="flex justify-center items-center h-screen">
        <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Payment Form</h2>
          <Formik
            initialValues={{
              name: "",
              cardNumber: "",
              expiration: "",
              cvc: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block font-semibold mb-1">
                    Name on Card
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-2 border rounded-md"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="cardNumber"
                    className="block font-semibold mb-1"
                  >
                    Card Number
                  </label>
                  <Field
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    className="w-full p-2 border rounded-md"
                  />
                  <ErrorMessage
                    name="cardNumber"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="expiration"
                    className="block font-semibold mb-1"
                  >
                    Expiration Date
                  </label>
                  <Field
                    type="text"
                    id="expiration"
                    name="expiration"
                    className="w-full p-2 border rounded-md"
                  />
                  <ErrorMessage
                    name="expiration"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="cvc" className="block font-semibold mb-1">
                    CVC
                  </label>
                  <Field
                    type="text"
                    id="cvc"
                    name="cvc"
                    className="w-full p-2 border rounded-md"
                  />
                  <ErrorMessage
                    name="cvc"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-custom-lime text-white py-2 px-4 rounded-md"
                  onClick={handlePayment}
                >
                  Submit
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    )
  );
};

export default Checkout;
