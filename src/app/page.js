import Banner from '@/components/Banner'
import CollegeCards from '@/components/CollegeCards'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Gallery from '@/components/Gallery'
// import Navbar from '@/components/Navbar'
import News from '@/components/News'
import Reviews from '@/components/Reviews'
import React from 'react'


const HomePage = () => {
    return (
        <div >
            {/* <Navbar/> */}
            <Banner/>
            <Features/>
            <CollegeCards/>
            <Gallery/>
            <News/>
            <Reviews/>
            <Footer/>
        </div>
    )
}

export default HomePage

