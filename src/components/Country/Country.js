import React from 'react';

const btnStyle = {
    height: '26px',
    width: '150px',
    backgroundColor: 'goldenrod'
}
const Country = (props) => {
    const { name, population, region, flag } = props.country;
    const countryStyle = {
        border: "1px solid red",
        margin: "10px",
        padding: '10px'
    }
    return (
        <div style={countryStyle}>
            <h2>Country Name: {name}</h2>
            <img style={{ height: "200px" }} src={flag} alt="" />
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <button style={btnStyle} onClick={() => props.countryHandler(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;