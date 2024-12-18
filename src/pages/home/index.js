import React, { useState, createContext, useContext } from 'react'
import About from './About'
import Service from './Service'
import Category from './Category'
import Product from './Product'
import Subscribe from './Subscribe'
import Layout from '../Layout'
import {BuilderHome} from "../../builderio/BuilderHome";

const Home = () => {
  return (
    <Layout title={'home'}>
      <BuilderHome />
      {/*<About />*/}
      {/*<Service />*/}
      {/*<Category />*/}
      {/*<Subscribe />*/}
    </Layout>
  )
}

export default Home
