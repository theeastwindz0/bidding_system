import React from 'react'
import PopularDestinations from '../components/PopularDestinations'
import TopSellers from '../components/TopSellers'
import Section1 from '../sections/Section1'
import styles from '../styles/css/Parallex.module.css'
const HomePage = () => {
  return (
    <div className=''>
      <Section1/>
      <div className={`${styles.parallex_1} h-80`}  />
      <PopularDestinations/>
      <TopSellers/>
    </div>
  )
}

export default HomePage