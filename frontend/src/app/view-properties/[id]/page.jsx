 'use client'
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const ViewProperties = () => {
    const { id } = useParams();
    const [propertyData, setPropertyData] = useState(null);

    const fetchProperties = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/property/getbyid/${id}`);
            setPropertyData(res.data);
        } catch (error) {
            toast.error('Failed to fetch property data');
        }
    };

    useEffect(() => {
        fetchProperties();
    }, []);

    if (!propertyData) {
        return <div className="flex justify-center items-center h-screen text-xl font-semibold text-gray-700 animate-pulse">Loading...</div>;
    }

    return (
        <div className="max-w-5xl mx-auto p-6 bg-gradient-to-r from-blue-50 to-gray-100 shadow-2xl rounded-2xl border border-gray-200">
            <h2 className="text-4xl font-extrabold text-gray-900 text-center underline decoration-blue-400 mb-6">{propertyData.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="relative">
                    <img className="w-full h-96 object-cover rounded-xl shadow-lg border-4 border-gray-300" src={propertyData.image} alt="Property" />
                    <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-md text-lg font-semibold">${propertyData.price}</div>
                </div>
                <div className="grid grid-cols-1 gap-4 text-lg text-gray-800">
                    <p className="flex items-center gap-2"><span className="font-semibold">📍 Address:</span> {propertyData.address}</p>
                    <p className="flex items-center gap-2"><span className="font-semibold">📏 Area:</span> {propertyData.area} sq. ft.</p>
                    <p className="flex items-center gap-2"><span className="font-semibold">🏠 Type:</span> {propertyData.type}</p>
                    <p className="flex items-center gap-2"><span className="font-semibold">💰 Price:</span> ${propertyData.price}</p>
                    <p className="flex items-center gap-2"><span className="font-semibold">👤 Owner:</span> {propertyData.owner}</p>
                    <p className="flex items-center gap-2"><span className="font-semibold">📞 Contact:</span> {propertyData.contact}</p>
                </div>
            </div>
        </div>
    );
};

export default ViewProperties;

