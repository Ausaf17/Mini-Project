'use client';
import axios from 'axios'
import { useRouter } from 'next/navigation';
import { Router } from 'next/router';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import ListProperties from '../list-properties/page';
import Link from 'next/link';


const ManageProperties = () => {

    const [PropertyList, setpropertyList] = useState([]);

    const router = useRouter();

    const fetchProperties = () => {
        axios.get('http://localhost:5000/property/getall', {

        })
            .then((result) => {
                console.table(result.data);
                setpropertyList(result.data)
            }).catch((err) => {
                console.log(err);

                if (err?.response?.status === 403) {
                    toast.error('you are not authorized to view this page');

                }
            });
    }

    useEffect(() => {
        fetchProperties();

    }, [])

    const deleteProperties = (id) => {
        axios.delete('http://localhost:5000/property/delete/' + id)
            .then((result) => {
                toast.success('deleted')
            }).catch((err) => {
                console.log(err);
                toast.error('some error occured');

            });
    }

    return (
        <div className='w-f'>
            <div className='container mx-auto py-10'>
                <h1 className='text-center text-3xl font bold py-10 '>Manage Properties</h1>
                <table className='w-full border'>
                    <thead>
                        <tr className='bg-gray-600 text-white font-bold'>
                            <th className='p-3'>Id</th>
                            <th className='p-3'>Title</th>
                            <th className='p-3'>Address</th>
                            <th className='p-3'>Area</th>
                            <th className='p-3'>Price</th>
                            <th className='p-3'>Image</th>
                            <th className='p-3'>Owner</th>
                            <th className='p-3'>Contact</th>
                            <th className='p-3'>CreatedAt</th>
                            <th className='p-3' colSpan={2}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            PropertyList.map((property) => {
                                return (
                                    <tr key={property._id} className='border bg-red-200'>
                                        <td className='p-3'>{property._id}</td>
                                        <td className='p-3'>{property.title}</td>
                                        <td className='p-3'>{property.address}</td>
                                        <td className='p-3'>{property.area}</td>
                                        <td className='p-3'>{property.price}</td>
                                        <td className='p-3'>{property.image}</td>
                                        <td className='p-3'>{property.contact}</td>
                                        <td className='p-3'>{property.owner}</td>
                                        <td className='p-3'>{new Date(property.createdAt).toDateString()}</td>
                                        <td className='p-3'>
                                            <button onClick={() => { deleteProperties(property._id) }}
                                                className='bg-red-500 py-1 px-3 text-white rounded-full'>Delete</button>
                                        </td>
                                        <td className='p-3'>
                                            <Link href={'/updatebyid/' + property._id} className='bg-blue-500 py-1 px-3 text-white rounded-full'>Update</Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default ManageProperties;