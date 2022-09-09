import { faker } from '@faker-js/faker';

import express from 'express';

// const express = require("express"); //import and store express in a variable

const app = express(); //initializes express app and stores it in a variable called 'app'

const port = 8000;


class User{
    constructor(){
        this.password = faker.internet.password();
        this.email = faker.internet.email();
        this.phoneNumber = faker.phone.number();
        this.lastName = faker.name.lastName();
        this.firstName = faker.name.firstName();
        this._id = faker.database.mongodbObjectId();
    }
    // return newUser;
}


//use data in the constructor and ad to id.... option 2,
class Company{
    constructor(){
        this._id = faker.datatype.uuid();
        this.Name = faker.company.companyName();
        this.address = faker.address.street();
        this.street = faker.address.streetAddress();
        this.city = faker.address.cityName();
        this.state = faker.address.state();
        this.zipcode = faker.address.zipCode();
        this.country = faker.address.country();
    }
    // return newCompany;
}

// class User{
//     constructor(){
//         this.id = "x202"
//         this.email = "RyanCamache@mail.com"
//     }
// }


app.get("/api/company/new",(req, res)=>{
    let newCompany = new Company()
    res.json({
        results: newCompany
    })
    
})

app.get("/api/user/new",(req, res)=>{
    let newUser = new User()
    res.json({
        results: newUser
    })
    
})
app.get("/api/user/company",(req, res)=>{
    let newUser = new User()
    let newCompany = new Company()
    res.json({
        results: newUser
        
    })
    
})











//this should ALWAYS be the last line
app.listen( port, () => console.log(`Listening on port: ${port}`) );