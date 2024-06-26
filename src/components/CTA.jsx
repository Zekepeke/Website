import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta'>
        <p className='cta-text'>
            CONTACT ME HERE<br className='sm:block hidden'/>
            
        </p>
        
        <Link to='/contact' className='btn'>contact</Link>
    </section>
  )
}

export default CTA