import Banner from '@/components/Banner'
import CollegeCards from '@/components/CollegeCards'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const HomePage = () => {
    return (
        <div >
            <Navbar/>
            <Banner/>
            <CollegeCards/>
            <Footer/>
        </div>
    )
}

export default HomePage

