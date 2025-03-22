"use client";

import React from "react";
import { useRouter } from "next/navigation";
import "./LandingStyle.css";
import Image from "next/image";
import dbConnect from "../../lib/mongodb.js";
import User from "/models/User.js";

export default function Landing() {
  let router = useRouter();
  function ToSignup() {
    router.push("/register");
  }
  return (
    <div>
      <div className="LoginSection">
        <Image
          className="Logo"
          src="/InstaCloneLogo.svg"
          alt="Logo"
          width={100}
          height={100}
        />
        <form>
          <input
            placeholder="name"
            onChangeText={(name) => this.setState({ name })}
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
          <button className="Nav-button Login">Login</button>
        </form>
      </div>

      <div className="SignupBody">
        <button className="Nav-button" onClick={() => ToSignup()}>
          Sign-up
        </button>
      </div>
    </div>
  );
}
