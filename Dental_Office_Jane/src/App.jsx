import React from 'react'
import styles from './styles'

import { Billing, Business, Button, CardDeal, Clients, CTA, FeedbackCard, Footer, GetStarted, Hero, NavBar, Stats, Testimonials } from "./components"

const App = () => {
  return (

    // This is the NavBar
    <div className="bg-red-900 w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>

      {/* This is the Hero*/}
      <div className={`bg-blue-900 ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      {/* List */}
      <div className={`bg-green-900 ${styles.padding} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats /> 
          <Business />
          <Billing /> 
          <CardDeal />
          <Testimonials /> 
          <Clients /> 
          <CTA /> 
          <Footer />
        </div>
      </div>

    </div>
  );
}

export default App