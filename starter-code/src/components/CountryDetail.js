import React from 'react'
import {Link} from 'react-router-dom';
import countries from '../countries.json';

const getCountryById = (id) => {
    let result = countries.find( country => country.cca3 === id);
    return result;
}

const CountryDetail  = (props) => {

    
    const id =  props.match.params.id;
    console.log('innn' ,id);

    const country = getCountryById(id);
    console.log('innn' ,country);

    

        return (
                <div className="col-7">
                    <h1>{country.name.common}</h1>
                    <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                        <td style={{width: `30%`}}>Capital</td>
                        <td>{
                                    country.capital[0] !== undefined ? country.capital[0] : "No Capital"
                                }
                        </td>
                        </tr>
                        <tr>
                        <td>Area</td>
                        <td>{country.area} km&sup2;
                            
                        </td>
                        </tr>
                        <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                    <li>

                                    {
                                        country.borders.map( border =>{
                                            const countryBorder = getCountryById(border);
                                            console.log(countryBorder.ccn3, countryBorder.name)
                                            return(
                                                <Link 
                                                        key={countryBorder.ccn3} 
                                                        to={`/${countryBorder.cca3}`}
                                                        className="list-group-item list-group-item-action"
                                                    >{countryBorder.name.common}
                                                </Link>

                                            )
                                        })
                                    }
                                    </li>   
                            </ul>
                        </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
}


export default  CountryDetail;