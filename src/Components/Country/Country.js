import React from 'react';

const Country = (props) => {
    const { name, population, region, flag } = props.country;
    const flagStyle = { height: '58px' }
    const countryStyle = { border: '1px solid red', margin: '10px', padding: '10px' }
    const handleAddContry = props.handleAddContry;
    return (
        <div style={countryStyle}>
            <h1> this is country {name}</h1>
            <img style={flagStyle} src={flag} alt="" />
            <p>population : {population}</p>
            <p> Region : {region} </p>
            <button onClick={handleAddContry}>add country</button>

        </div>
    );
};

export default Country;