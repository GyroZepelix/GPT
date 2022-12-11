import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/logo.svg';

const footerLinks = [
  {
    title: "Links",
    links: ["Overons", "Social Media", "Counters", "Contact"]
  },
  {
    title: "Company",
    links: ["Terms & Conditions", "Privacy Policy", "Contact"]
  },
  {
    title: "Get in touch",
    links: ["Crechterwoord K12 182 DK Alknjkcb", "085-132567", "info@payme.net"]
  }
]

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
      </div>

      <div className='gpt3__footer-button'>
        <p>Request Early Access</p>
      </div>

      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3Logo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        {footerLinks.map((footerSection, index) => (
          <div className='gpt3__footer-links_div' key={footerSection.title + index}>
            <h4>{footerSection.title}</h4>
            {footerSection.links.map((link, index) => (
              <p key={link+index}>{link}</p>
            ))}
          </div>
        ))}
      </div>

      <div className='gpt3__footer-copyright'>
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer