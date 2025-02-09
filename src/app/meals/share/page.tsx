// ShareMeal.tsx
"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import { shareMealtoServer } from "../../../../lib/actions";

interface FormValues {
  name: string;
  email: string;
  recipeTitle: string;
  summary: string;
  instructions: string;
  image: File | any;
}

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  recipeTitle: Yup.string().required("Recipe title is required"),
  summary: Yup.string().required("Summary is required"),
  instructions: Yup.string()
    .required("Instructions are required")
    .test(
      "is-ordered-list",
      "Instructions must be an ordered list like 1. Prepare the dough 2. Preheat the pan",
      (value) => {
        if (!value) return false;
        return /^(\d+\..*(\n|$))+$/.test(value);
      }
    ),
  image: Yup.mixed().required("An image is required"),
});

const ShareMeal: React.FC = () => {
  const [imagePreview, setImagePreview] = useState<any>("");
  const handleSubmit = (
    values: FormValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    console.log("values", values);
    const formData = new FormData();
    formData.append("creator", values.name);
    formData.append("creator_email", values.email);
    formData.append("title", values.recipeTitle);
    formData.append("summary", values.summary);
    formData.append("instructions", values.instructions);
    formData.append("image", values.image);
    shareMealtoServer(formData);
    // resetForm();
  };

  const handleImageSubmit = (file: File) => {
    const fileReader = new FileReader();
    fileReader.onload = () => setImagePreview(fileReader.result);
    fileReader.readAsDataURL(file);
  };

  return (
    <div className="flex justify-center">
      <Formik
        cl
        initialValues={{
          name: "",
          email: "",
          recipeTitle: "",
          summary: "",
          instructions: "",
          image: null,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values }) => (
          <Form className="space-y-4 lg:w-2/4 p-4 flex flex-col bg-black rounded shadow-md">
            <h2 className="text-4xl h-12 text-center bg-gradient-to-r from-orange-500 to-orange-300 font-bold mb-4 text-transparent bg-clip-text">
              Submit your Recipe
            </h2>

            <div className="flex flex-col">
              <label htmlFor="name" className="font-medium">
                Name
              </label>
              <Field
                id="name"
                name="name"
                type="text"
                className="border bg-black rounded p-2"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 mt-1"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="font-medium">
                Email
              </label>
              <Field
                id="email"
                name="email"
                type="email"
                className="border bg-black rounded p-2"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 mt-1"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="recipeTitle" className="font-medium">
                Recipe Title
              </label>
              <Field
                id="recipeTitle"
                name="recipeTitle"
                type="text"
                className="border bg-black rounded p-2"
              />
              <ErrorMessage
                name="recipeTitle"
                component="div"
                className="text-red-500 mt-1"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="summary" className="font-medium">
                Summary
              </label>
              <Field
                id="summary"
                name="summary"
                as="textarea"
                rows={4}
                className="border bg-black rounded p-2"
              />
              <ErrorMessage
                name="summary"
                component="div"
                className="text-red-500 mt-1"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="instructions" className="font-medium">
                Instructions
              </label>
              <Field
                id="instructions"
                name="instructions"
                as="textarea"
                rows={6}
                className="border bg-black rounded p-2"
              />
              <ErrorMessage
                name="instructions"
                component="div"
                className="text-red-500 mt-1"
              />
            </div>

            <div className="flex flex-col">
              <div className="relative">
                <input
                  id="image"
                  name="image"
                  type="file"
                  accept="image/*"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  onChange={(event: any) => {
                    console.log(
                      "event.currentTarget.files",
                      event.currentTarget.files
                    );
                    setFieldValue(
                      "image",
                      event.currentTarget.files?.[0] || null
                    );
                    handleImageSubmit(event.currentTarget.files?.[0]);
                  }}
                />
                <label
                  htmlFor="image"
                  className="block bg-orange-300 text-black py-2 px-4 rounded cursor-pointer hover:bg-blue-600 text-center"
                >
                  {values.image
                    ? (values.image as File).name
                    : "Choose an image"}
                </label>
                {imagePreview && (
                  <Image
                    alt="recipeImage"
                    className=" rounded-lg border-orange-300 m-3"
                    width={100}
                    height={100}
                    src={imagePreview}
                  ></Image>
                )}
              </div>
              <ErrorMessage
                name="image"
                component="div"
                className="text-red-500 mt-1"
              />
            </div>

            <button
              type="submit"
              className="bg-orange-400 text-black py-2 px-4 rounded font-bold "
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ShareMeal;
