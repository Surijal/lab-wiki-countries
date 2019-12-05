import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';



class CountryList extends Component {

    // const {countryList} = props.countries;

    constructor(props) {
        super(props);

        this.state = {
            // countryList:  props.countries, 
            countryList: []
        }
        // console.log('COUNTRIES OBJ', this.state.countryList);
        
    }

    componentDidMount(){
        axios.get("http://localhost:4000/")
            .then((response)=>{
                console.log(response.data);
                
                this.setState({countryList: response.data})
            })
            .catch((err) => console.log(err))
    }

    render() {
        return (
            <div className="col-5" style={{maxHeight: `90vh`, overflow: `scroll`}}>
                <div className='list-group'>
                    
                    {
                        this.state.countryList.map( (country) => {
                            return(
                                <Link 
                                        key={country.ccn3} 
                                        to={`/${country.cca3}`}
                                        className="list-group-item list-group-item-action"
                                    >

                                    
                                        <img 
                                                src={`https://www.countryflags.io/${country.cca2}/flat/64.png`} 
                                                alt={country.name.common}>
                                        </img>
                                        <span>
                                            {country.name.common}
                                        </span>
                                    
                                </Link>
                                
                            )
                    })
                }
                
            </div>
        </div>  
        )
    }
}


export default  CountryList;