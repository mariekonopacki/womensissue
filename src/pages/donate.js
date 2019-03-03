import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Navbar from '../components/navbar'
import DonateIcon from '../images/donate.png'


const Donate = () => (
  <Layout>
    <SEO title="Donate" />
    <Navbar></Navbar>
    <div class="aboutcontent">
      <div class="backHome">
        <a href="/">
          <small> ← Back to home</small>
        </a>
      </div>
      <h2>Donate to the Women's Issue</h2> <br /><br />
      <p>All Women’s Issue content is available online for $0+, with all proceeds going to Planned Parenthood and Y2Y. This makes the magazine accessible, while still continuing to raise money for Planned Parenthood and Y2Y’s important work. Please consider donating.</p>
      <div class="donationCall" href="https://theharvardadvocate.com/financialaid">
        <a class="donatebutton" href="https://theharvardadvocate.com/financialaid">
          <img alt="donate icon" class="shareIcon" src={DonateIcon}></img>
          <small>Donate to the Women's Issue here</small>
        </a>
      </div>
      <div class="donationSubtext"><i>In the comments of your donation, make sure to mention the Women's Issue so your donation can go towards Planned Parenthood.</i></div>
    </div>
  </Layout>
)

export default Donate
