'use client';
import axios from 'axios';
import { Formik } from 'formik';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const updateProperties = () => {

  const [propertyData, setPropertyData] = useState(null);
  const { id } = useParams();
  const router = useRouter();

  const fetchProperties = async () => {
    const res = await axios.get('http://localhost:5000/property/getbyid/' + id);
    console.log(res.data);
    setPropertyData(res.data);
  }

  useEffect(() => {
    fetchProperties();
  }, []);

  const submitForm = (values) => {
    console.log(values);

    axios.put('http://localhost:5000/property/update/' + id,)
      .then((result) => {
        toast.success('Property Updated Successfully');
        router.back();
      })
      .catch((err) => {
        console.log(err);
        toast.error('Failed to  Update property');
      });
  }

  const uploadFile = (e) => {
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'mypreset');
    formData.append('cloud_name', 'drujtbnjk');

    axios.post('https://api.cloudinary.com/v1_1/drujtbnjk/image/upload', formData)
      .then((result) => {
        console.log(result.data);
        toast.success('File Uploaded Successfully');
        propertiesForm.setFieldValue('image', result.data.url);
      }).catch((err) => {
        console.log(err);
        toast.error('Failed to upload file');
      });
  }

  return (
    <div className='max-w-xl mx-auto'>
      <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Update property
            </h1>


            {/* Form */}

            {
              propertyData !== null ? (
                <Formik initialValues={propertyData} onSubmit={submitForm} >
                  {
                    (updateForm) => {
                      return (

                        <form onSubmit={updateForm.handleSubmit}>
                          <div className="grid gap-y-4">
                            {/* Form Group */}
                            <div>
                              <label
                                htmlFor="title"
                                className="block text-sm mb-2 dark:text-white"
                              >
                                Title
                              </label>
                              <div className="relative">
                                <input
                                  type="text"
                                  id="title"
                                  onChange={updateForm.handleChange}
                                  value={updateForm.values.title}
                                  className="border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                  required=""
                                  aria-describedby=" "
                                />
                                <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                                  <svg
                                    className="size-5 text-red-500"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                    aria-hidden="true"
                                  >
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                  </svg>
                                </div>
                              </div>
                              {
                                (updateForm.errors.title && updateForm.touched.title) && (
                                  <p className=" text-xs text-red-600 mt-2" id="email-error">
                                    {updateForm.errors.title}
                                  </p>
                                )
                              }
                            </div>
                            {/* End Form Group */}
                            {/* Form Group */}
                            <div>
                              <label
                                htmlFor="address"
                                className="block text-sm mb-2 dark:text-white"
                              >
                                Adress
                              </label>
                              <div className="relative">
                                <input
                                  type="text"
                                  id="address"
                                  onChange={updateForm.handleChange}
                                  value={updateForm.values.address}
                                  className="border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                  required=""
                                  aria-describedby=" "
                                />
                                <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                                  <svg
                                    className="size-5 text-red-500"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                    aria-hidden="true"
                                  >
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                  </svg>
                                </div>
                              </div>
                              {
                                (updateForm.errors.address && updateForm.touched.address) && (
                                  <p className=" text-xs text-red-600 mt-2" id="email-error">
                                    {updateForm.errors.address}
                                  </p>
                                )
                              }
                            </div>
                            {/* End Form Group */}
                            {/* Form Group */}
                            <div>
                              <label
                                htmlFor="area"
                                className="block text-sm mb-2 dark:text-white"
                              >
                                Area
                              </label>
                              <div className="relative">
                                <input
                                  type="number"
                                  id="area"
                                  onChange={updateForm.handleChange}
                                  value={updateForm.values.area}
                                  className="border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                  required=""
                                  aria-describedby=" "
                                />
                                <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                                  <svg
                                    className="size-5 text-red-500"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                    aria-hidden="true"
                                  >
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                  </svg>
                                </div>
                              </div>
                              {
                                (updateForm.errors.area && updateForm.touched.area) && (
                                  <p className=" text-xs text-red-600 mt-2" id="email-error">
                                    {updateForm.errors.area}
                                  </p>
                                )
                              }
                            </div>
                            {/* End Form Group */}
                            {/* Form Group */}
                            <div>
                              <label
                                htmlFor=" area"
                                className="block text-sm mb-2 dark:text-white"
                              >
                                Type
                              </label>
                              <div className="relative">
                                <input
                                  type="text"
                                  id="area"
                                  onChange={updateForm.handleChange}
                                  value={updateForm.values.area}
                                  className="border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                  required=""
                                  aria-describedby="confirm-password-error"
                                />
                                <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                                  <svg
                                    className="size-5 text-red-500"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                    aria-hidden="true"
                                  >
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                  </svg>
                                </div>
                              </div>
                              {
                                (updateForm.errors.area && updateForm.touched.area) && (
                                  <p className=" text-xs text-red-600 mt-2" id="email-error">
                                    {updateForm.errors.area}
                                  </p>
                                )
                              }
                            </div>
                            {/* End Form Group */}
                            {/* Form Group */}
                            <div>
                              <label
                                htmlFor=" price"
                                className="block text-sm mb-2 dark:text-white"
                              >
                                Price
                              </label>
                              <div className="relative">
                                <input
                                  type="number"
                                  id="price"
                                  onChange={updateForm.handleChange}
                                  value={updateForm.values.price}
                                  className="border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                  required=""
                                  aria-describedby="confirm-password-error"
                                />
                                <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                                  <svg
                                    className="size-5 text-red-500"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                    aria-hidden="true"
                                  >
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                  </svg>
                                </div>
                              </div>
                              {
                                (updateForm.errors.price && updateForm.touched.price) && (
                                  <p className=" text-xs text-red-600 mt-2" id="email-error">
                                    {updateForm.errors.price}
                                  </p>
                                )
                              }
                            </div>
                            {/* End Form Group */}
                            {/* Form Group */}
                            <div>
                              <label
                                htmlFor=" image"
                                className="block text-sm mb-2 dark:text-white"
                              >
                                Image
                              </label>
                              <div className="relative">
                                <input
                                  type="file"
                                  id="image"
                                  onChange={uploadFile}
                                  className="border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                  required=""
                                  aria-describedby="confirm-password-error"
                                />
                                <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                                  <svg
                                    className="size-5 text-red-500"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                    aria-hidden="true"
                                  >
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                  </svg>
                                </div>
                              </div>
                              {
                                (updateForm.errors.image && updateForm.touched.image) && (
                                  <p className=" text-xs text-red-600 mt-2" id="email-error">
                                    {updateForm.errors.image}
                                  </p>
                                )
                              }
                            </div>
                            {/* End Form Group */}
                            {/* Form Group */}
                            <div>
                              <label
                                htmlFor=" owner"
                                className="block text-sm mb-2 dark:text-white"
                              >
                                Owner
                              </label>
                              <div className="relative">
                                <input
                                  type="text"
                                  id="owner"
                                  onChange={updateForm.handleChange}
                                  value={updateForm.values.owner}
                                  className="border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                  required=""
                                  aria-describedby="confirm-password-error"
                                />
                                <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                                  <svg
                                    className="size-5 text-red-500"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                    aria-hidden="true"
                                  >
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                  </svg>
                                </div>
                              </div>
                              {
                                (updateForm.errors.owner && updateForm.touched.owner) && (
                                  <p className=" text-xs text-red-600 mt-2" id="email-error">
                                    {updateForm.errors.owner}
                                  </p>
                                )
                              }
                            </div>
                            {/* End Form Group */}
                            {/* Form Group */}
                            <div>
                              <label
                                htmlFor=" contact"
                                className="block text-sm mb-2 dark:text-white"
                              >
                                Contact
                              </label>
                              <div className="relative">
                                <input
                                  type="text"
                                  id="contact"
                                  onChange={updateForm.handleChange}
                                  value={updateForm.values.contact}
                                  className="border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                  required=""
                                  aria-describedby="confirm-password-error"
                                />
                                <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                                  <svg
                                    className="size-5 text-red-500"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                    aria-hidden="true"
                                  >
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                  </svg>
                                </div>
                              </div>
                              {
                                (updateForm.errors.contact && updateForm.touched.contact) && (
                                  <p className=" text-xs text-red-600 mt-2" id="email-error">
                                    {updateForm.errors.contact}
                                  </p>
                                )
                              }
                            </div>
                            {/* End Form Group */}
                            {/* Checkbox */}
                            <div className="flex items-center">
                              <div className="flex">
                                <input
                                  id="remember-me"
                                  name="remember-me"
                                  type="checkbox"
                                  className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                />
                              </div>
                              <div className="ms-3">
                                <label htmlFor="remember-me" className="text-sm dark:text-white">
                                  I accept the{" "}
                                  <a
                                    className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
                                    href="#"
                                  >
                                    Terms and Conditions
                                  </a>
                                </label>
                              </div>
                            </div>
                            {/* End Checkbox */}
                            <button
                              type="submit"
                              className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                            >
                              Update Property
                            </button>
                          </div>
                        </form>
                      )
                    }
                  }
                </Formik>
              ) : (
                <p className='text-center my-10 font-bold text-2xl'>Loading ... </p>
              )
            }

            {/* End Form */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default updateProperties;