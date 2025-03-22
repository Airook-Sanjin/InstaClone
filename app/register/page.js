'use client'
import React, { Component } from "react";
import "./RegisterStyle.css"

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
      
    onSignUp() {
        let { email, password, name } = this.state;
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
                        onChange={(e) => this.setState({ password: e.target.value })}
                    />
                    <button onPress={() => this.onSignUp()} title="Sign Up" />
                </form>
            </div>
        );
    }
}

export default Registerpage;