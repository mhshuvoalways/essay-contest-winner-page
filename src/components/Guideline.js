import React from 'react';
import TitleBottom from '../assets/images/others/title-bottom.png';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Guideline = () => {
    const data = [
        {
            "name": "Page A",
            "uv": 4000,
            "pv": 2400
        },
        {
            "name": "Page B",
            "uv": 3000,
            "pv": 1398
        },
        {
            "name": "Page C",
            "uv": 2000,
            "pv": 9800
        },
        {
            "name": "Page D",
            "uv": 2780,
            "pv": 3908
        },
        {
            "name": "Page E",
            "uv": 1890,
            "pv": 4800
        },
        {
            "name": "Page F",
            "uv": 2390,
            "pv": 3800
        },
        {
            "name": "Page G",
            "uv": 3490,
            "pv": 4300
        }
    ]

    return (
        <div className="section">
            <h2 className="section__title">Our Guideline</h2>
            <img className="section__title__img" src={TitleBottom} alt="" />
            <p className="section__title__details">Identifying Wizards and honoring them the right way
            </p>
            <div className="container" data-aos="fade-up">
                <BarChart width={730} height={250} data={data} className="guidelines">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" fill="#8884d8" />
                    <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </div>
        </div>
    )
}

export default Guideline;
