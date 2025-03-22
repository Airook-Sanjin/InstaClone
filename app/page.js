"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "./globals.css";
import Nav from "./Components/Nav.js";
import Post from "./Components/Post";


const profileIcon = "/assets/default-user.png";
const More = "/assets/icons/more.svg";
let Signedin;

export default function App() {
  const router = useRouter();

  function ToSignup() {
    router.push("/Landing");
  }
  return (
    <div>
      <div className="InstaClone-Body">
        <Nav />
        <section className="Main-Container">
          <section className="MainHub">
            <section className="Story-sections"></section>
            <Post />
            <button onClick={() => ToSignup()}>Hello</button>
            <section>
              <form>
                <input type="Form" placeholder="Write new post"></input>
                <input type="file"></input>
              </form>
            </section>
          </section>
          <section className="Account-dash"></section>
        </section>
      </div>
    </div>
  );
}
