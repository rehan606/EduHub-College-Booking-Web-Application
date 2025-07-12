import Banner from '@/components/Banner'
import CollegeCards from '@/components/CollegeCards'
import Footer from '@/components/Footer'
import Gallery from '@/components/Gallery'
import Navbar from '@/components/Navbar'
import News from '@/components/News'
import React from 'react'

const HomePage = () => {
    return (
        <div >
            <Navbar/>
            <Banner/>
            <CollegeCards/>
            <Gallery/>
            <News/>
            <Footer/>
        </div>
    )
}

export default HomePage

