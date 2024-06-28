import React from 'react'
import About from "../Components/About";
import Banner from "../Components/Banner";
import Blogpost from "../Components/Blogpost";
import Header from "../Components/Header";
import Footer from '../Components/Footer';

function HomePage() {
  return (
    <>
        <Header />
        <Banner />
        <About />
        <Blogpost />
        <Footer/>
    </>
  )
}

export default HomePage