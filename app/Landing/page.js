"use client";

import React,{useState, useEffect} from "react";
import { useRouter } from "next/navigation";
import "./LandingStyle.css";
import Image from "next/image";
let ImagesGal1=["/assets/MobileMockup1.svg","/assets/MobileMockup2.svg"]

export default function Landing() {
  
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [currentImageIndex,setCurrentImageIndex] = useState(0);
//Transition
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % ImagesGal1.length);
   }, 9000); // Change image every 9 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);


  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (res.status === 200) {
      // Handle successful login
      console.log(data.message);
    } else {
      // Handle login error
      console.error(data.message);
    }
  };
  
  function ToSignup() {
    router.push("/register");
  }
  return (
    <section className="Page-Container"> 
      <section className="LeftBody">
      {ImagesGal1.map((image, index) => (
        <Image 
        key={index}
        className={`MockupMobile ${index === currentImageIndex ? "active" : ""}`}
        id={`mobile${index + 1}`}
        src={image}
        alt={`MobileMockup${index +1}`}
        width={490}
        height={490}/>
      ))}
      </section>
    
    <section className="RightBody ">
      <div className="LoginSection">
        <Image
          className="Logo"
          src="/InstaCloneLogo.svg"
          alt="Logo"
          width={200}
          height={100}
        />
        <form className = "LoginForm"onSubmit={handleLogin}>
          <input
            placeholder="Email"
            value = {email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value )}
          />
    
          <button type = "submit" className="Nav-button Login">Login</button>
        </form>
      </div>

      <div className="SignupSection">
        <button className="Nav-button" onClick={() => ToSignup()}>
          Sign-up
        </button>
      </div>

    </section>
    </section>
  );
}
