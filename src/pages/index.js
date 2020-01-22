import React from "react"
import Header from "../components/header.js"
import Img1 from "../components/img1"
import Img2 from "../components/img2";
import Section3 from "../components/section3"
import Footer from "../components/footer"
import "../components/style.css"

const IndexPage = () =>(
  <section className="container">
    <Header />
    <Img1 />
    <Img2 />
    <Section3 />
    <Footer/>
  </section>
)
export default IndexPage


