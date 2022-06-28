import React, { useEffect, useState } from 'react';
import axios from "axios";

const Countries = () => {

    const [data, setData] = useState([]);
    const [hello, setHello] = useState("Hello");

    // Le useEffect se joue lorsque le composant est monté
    useEffect(() => {

        axios.get('https://restcountries.com/v3.1/all').then((res) => {
            setData(res.data);
        });

    }, [])

    return (
        <div className="countries">

            <h1>Countries</h1>
            <h2>{ hello }</h2>

            <ul>

                {
                    data.map((country) => <li>{ country.name.common }</li>)
                }
            </ul>

        </div>
    );
};

export default Countries;
