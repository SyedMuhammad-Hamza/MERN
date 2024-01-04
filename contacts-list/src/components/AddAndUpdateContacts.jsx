import React from "react";
import Model from "./Model";
import { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { db } from "../config/firebase";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import * as Yup from "yup";

const contactSchemaValidation = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});
const AddAndUpdateContacts = ({ isOpen, onClose, isUpdate, contact }) => {
  const [loading, setloading] = useState(false);

  const addContact = async (contact) => {
    try {
      setloading(true);
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
      setloading(false);
      onClose();
      toast.success("Contact added successfully alhumdulillah.");
    } catch (error) {
      console.log("error");
      setloading(false);
    }
  };

  const updateContact = async (contact, id) => {
    try {
      setloading(true);
      console.log("acs");
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, contact);
      setloading(false);
      onClose();
      toast.success("Contact updated successfully alhumdulillah.");
    } catch (error) {
      console.log("error");
      setloading(false);
    }
  };

  return (
    <div>
      <Model isOpen={isOpen} onClose={onClose}>
        <Formik
          validationSchema={contactSchemaValidation}
          initialValues={
            isUpdate
              ? {
                  name: contact.name,
                  email: contact.email,
                }
              : {
                  name: "",
                  email: "",
                }
          }
          onSubmit={(values) => {
            console.log(values);
            isUpdate ? updateContact(values, contact.id) : addContact(values);
          }}
        >
          <Form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <Field name="name" className="border h-10" />
              <div className="text-red-500 text-xs">
                <ErrorMessage name="name" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <Field name="email" className="border h-10" />
              <div className="text-red-500 text-xs">
                <ErrorMessage name="email" />
              </div>
            </div>
            <button
              type="submit"
              className="bg-orange px-3 border py-1.5 self-end"
            >
              {!loading ? (isUpdate ? "Update Contact" : "Add Contact") : null}
              {loading ? "loading..." : null}
            </button>
          </Form>
        </Formik>
      </Model>
    </div>
  );
};

export default AddAndUpdateContacts;
