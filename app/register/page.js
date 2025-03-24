'use client'
import { hash, genSalt } from "bcryptjs";
import React, { Component } from "react";
import "./RegisterStyle.css"
import dbConnect from "../lib/mongodb";
const mongoose = require("mongoose")
const User = require("../models/User")



const salt = await genSalt(10)

class Registerpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: "",
          password: "",
          name: "",
        };
        this.onSignUp = this.onSignUp.bind(this);
    }
      
    async onSignUp() {
        
        let { email, password, name } = this.state;
        try{
            const response = await fetch ("/api/register", {
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({name,email,password}),
            });

            const result = await response.json();
            if (response.ok){
                console.log("user registered successfully", result.message); 
            }else{
                console.log("Error registering user",result.message);
            }
        } catch(error){
            console.log("Error: ",error);
        }
    }

    render() {
        return (
            <div className="RegisterBody">
                <form className="RegisterForm">
                    <input
                        placeholder="name"
                        onChange={(e) => this.setState({ name: e.target.value })}
                    />
                    <input
                        placeholder="email"
                        onChange={(e) => this.setState({ email: e.target.value })}
                    />
                    <input
                        placeholder="password"
                        secureTextEntry={true}
                        onChange={(e) => this.setState({ password: hash(e.target.value, salt,) })}
                    />
                    <button onPress={() => this.onSignUp()} title="Sign Up" />
                </form>
            </div>
        );
    }
}

export default Registerpage;