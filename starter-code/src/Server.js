const express = require('express');
const port = 4000;
const cors = require('cors')



const app = express();
app.use(cors())

// app.get('/:country', (req, res, next) => {
//     var countries = require("./countries.json")
    
//     var searchCountry = req.params.country.toLowerCase()
//     var countriesFiltered = countries.filter((country)=> 
//     country.name.common.toLowerCase().includes(searchCountry) || country.name.official.includes(searchCountry)
//     )
    
//     res.status(200).json(countriesFiltered);
// });

app.get('/', (req, res, next) => {
    var countries = require('./countries.json')
    res.status(200).json(countries);

})


app.listen(port, ()=> {
    console.log('server running');
})


