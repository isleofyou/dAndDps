import React from 'react';
import * as AiIcons from 'react-icons/ai';
import './Footer.css';

export default function Footer() {
  return (
    <div className='footer-container'>
          <div className='foot-links'>
            <div className='footer-link-wrapper'>
              <div className='footer-link-items'>
                <h2>Created by</h2>
                  <div className='contact-info'>
                    <h4>David Tran</h4>
                    <a className='linked-in-icon' href={'https://www.linkedin.com/in/david-tran7/'} target={'blank'}><AiIcons.AiOutlineLinkedin /></a>
                    <a className='contact-icons' href={'https://github.com/isleofyou'} target={'blank'}><AiIcons.AiOutlineGithub /></a>
                  </div>
              </div>
            </div>
          </div>
          <section className='application-name'>
            <div className='application-name-wrap'>
              <small className='copyright'>D&DPS © 2022</small>
            </div>
          </section>
        </div>    
  )
}
