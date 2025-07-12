import Banner from '@/components/Banner'
import CollegeCards from '@/components/CollegeCards'
import Footer from '@/components/Footer'
import Gallery from '@/components/Gallery'
import Navbar from '@/components/Navbar'
import News from '@/components/News'
import Reviews from '@/components/Reviews'
import React from 'react'


const HomePage = () => {
    return (
        <div >
            <Navbar/>
            <Banner/>
            <CollegeCards/>
            <Gallery/>
            <Reviews/>
            <News/>
            <Footer/>
        </div>
    )
}

export default HomePage

