import React from 'react';
import { Link } from 'react-router-dom';
import './Country.css';

const Country = (props) => {
    const {name, capital, region} = props.country;
    return (
        <div className="country">
          <h2>Name: {name}</h2>
          <h3>Capital: {capital}</h3>
          <h3>Continent: {region}</h3>
          <Link to={`/country/${name}`}>
          <button>See details about {name}</button>
          </Link>
        </div>
    );
};

export default Country;