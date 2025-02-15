'use client';
import axios from 'axios'
import { useRouter } from 'next/navigation';
import { Router } from 'next/router';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const ListProperties = () => {

    const [propertyList, setPropertyList] = useState([]);
    const token = localStorage.getItem('token');
    const router = useRouter();

    const fetchProperty = () => {
        axios.get('http://localhost:5000/property/getall', {
            headers: {
                'x-auth-token': token
            }
        })
            .then((result) => {
                console.table(result.data);
                setPropertyList(result.data)
            }).catch((err) => {
                console.log(err);

                if (err?.response?.status === 403) {
                    toast.error('you are not authorized to view this page');

                }
            });
    }

    useEffect(() => {
        fetchProperty();

    }, [])

    return (
        <div>ListProperties</div>
    )
}

export default ListProperties;