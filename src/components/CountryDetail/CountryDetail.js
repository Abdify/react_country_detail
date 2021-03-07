import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryDetail = () => {
    const {countryName} = useParams();
    const [country, setCountry] = useState([]);
    // const [allProperties, setAllProperties] = useState([]);
    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${countryName}?fullText=true`)
            .then((res) => res.json())
            .then((data) => {
                setCountry(data[0])
                console.log("cccc", data[0])
                // const all = Object.keys(data[0]).filter((key) => {
                //     return typeof country[key] != "object"
                // });
                // setAllProperties(all);
            });
    }, []);

    const allProperties = ["name", "capital", "region", "subregion", "alpha3Code", "area", "population",]

    console.log(allProperties)

    return (
        <div style={{border: "1px solid black", padding: "10px", textAlign: "center"}}>
            {allProperties.map((property) => (
                <h3>
                    {property.toUpperCase()}: <span style={{color: "red"}}>{country[property]}</span>
                </h3>
            ))}

        </div>
    );
};

export default CountryDetail;