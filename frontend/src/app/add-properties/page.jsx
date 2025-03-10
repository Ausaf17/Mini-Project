'use client';
import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import * as Yup from 'yup';
import axios from 'axios';
import toast from 'react-hot-toast';


const addpropertiesSchema = Yup.object().shape({
    title: Yup.string()
        .required('required'),
    address: Yup.string()
        .required('required'),
    area: Yup.string()
        .required('required'),
    type: Yup.string()
        .required('required'),
    price: Yup.string()
        .required('required'),
    image: Yup.string()
        .required('required'),
    owner: Yup.string()
        .required('required'),
    contact: Yup.string()
        .required('required')
});


const AddProduct = () => {
    const router = useRouter();
    const token = localStorage.getItem('token');

    useEffect(() => {
      if(!token){
        toast.error('Login to continue');
        router.push('/login');
      }
    }, [])
    

    const propertiesForm = useFormik({
        initialValues: {
            title: '',
            address: '',
            area: '',
            type: '',
            price: '',
            image: '',
            owner: '',
            contact: ''
        },


        onSubmit: (values, { resetForm, setSubmitting }) => {
            axios.post('http://localhost:5000/property/add', values)
                .then((result) => {

                    toast.success('Property added succesfully');
                    resetForm();
                    // router.push('/app/page.jsx');
                })
                .catch((err) => {
                    console.log(err);
                    setSubmitting(false);
                    toast.error(err?.response?.data?.message || 'Some error occured');
                });
        },
        validationSchema: addpropertiesSchema
    });

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
        <div>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                            Add Your Properties
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                            Here You can add your Properties for selling/renting
                        </p>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <form onSubmit={propertiesForm.handleSubmit}>
                            <div className="flex flex-wrap -m-2">



                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label htmlFor="title" className="leading-7 text-sm text-gray-600">
                                            Title
                                        </label>
                                        <input
                                            type="text"
                                            id="title"
                                            onChange={propertiesForm.handleChange}
                                            value={propertiesForm.values.title}
                                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label htmlFor="Adress" className="leading-7 text-sm text-gray-600">
                                            Address
                                        </label>
                                        <input
                                            type="text"
                                            id="address"
                                            onChange={propertiesForm.handleChange}
                                            value={propertiesForm.values.address}

                                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label htmlFor="" className="leading-7 text-sm text-gray-600">
                                            Area
                                        </label>
                                        <input
                                            type="text"
                                            id="area"
                                            onChange={propertiesForm.handleChange}
                                            value={propertiesForm.values.area}
                                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label htmlFor="" className="leading-7 text-sm text-gray-600">
                                            Type
                                        </label>
                                        <input
                                            type="text"
                                            id="type"
                                            onChange={propertiesForm.handleChange}
                                            value={propertiesForm.values.type}
                                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label htmlFor="" className="leading-7 text-sm text-gray-600">
                                            Price
                                        </label>
                                        <input
                                            type="number"
                                            id="price"
                                            onChange={propertiesForm.handleChange}
                                            value={propertiesForm.values.price}
                                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label htmlFor="image" className="leading-7 text-sm text-gray-600">
                                            Add Image
                                        </label>
                                        <input
                                            type="file"
                                            id="image"
                                            onChange={uploadFile}
                                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label htmlFor="" className="leading-7 text-sm text-gray-600">
                                            Owner Name
                                        </label>
                                        <input
                                            type="text"
                                            id="owner"
                                            onChange={propertiesForm.handleChange}
                                            value={propertiesForm.values.owner}
                                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label htmlFor="Adress" className="leading-7 text-sm text-gray-600">
                                            Contact
                                        </label>
                                        <input
                                            type="text"
                                            id="contact"
                                            onChange={propertiesForm.handleChange}
                                            value={propertiesForm.values.contact}
                                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        />
                                    </div>
                                </div>

                                <div className="p-2 w-full">
                                    <button type='submit' className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                        Submit
                                    </button>
                                </div>



                                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                                    <a className="text-indigo-500">kausaf98@gmail.com</a>
                                    <p className="leading-normal my-5">
                                        Modern Properties
                                        <br />
                                        HazratGanj, Lucknow
                                    </p>
                                    <span className="inline-flex">
                                        <a className="text-gray-500">
                                            <svg
                                                fill="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                className="w-5 h-5"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                            </svg>
                                        </a>
                                        <a className="ml-4 text-gray-500">
                                            <svg
                                                fill="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                className="w-5 h-5"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                            </svg>
                                        </a>
                                        <a className="ml-4 text-gray-500">
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                className="w-5 h-5"
                                                viewBox="0 0 24 24"
                                            >
                                                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                                            </svg>
                                        </a>
                                        <a className="ml-4 text-gray-500">
                                            <svg
                                                fill="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                className="w-5 h-5"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                                            </svg>
                                        </a>
                                    </span>
                                </div>
                            </div>

                        </form>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default AddProduct;