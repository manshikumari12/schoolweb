import React from 'react'
import Nav from '../Component/Nav'
import { Flex } from '@chakra-ui/react'
import Footer from '../Component/Footer'
import Features from '../Component/Features'
import Landing from '../Component/Landing'
function Home() {
  return (
    <div>
        <Nav/>
        <Landing/>
<Features/>


        <Footer/>
      
    </div>
  )
}

export default Home
