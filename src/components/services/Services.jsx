import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                The things are getting things worse and worse
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                The things are getting things worse and worse
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                The things are getting things worse and worse
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                The things are getting things worse and worse
              </p>
            </li> 
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                The things are getting things worse and worse
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                The things are getting things worse and worse
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                The things are getting things worse and worse
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                The things are getting things worse and worse
              </p>
            </li> 
          </ul>
        </article>
        {/* END OF Web Development */}
        <article className="service">
          <div className="service__head">
            <h3>Content Writing</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                The things are getting things worse and worse
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                The things are getting things worse and worse
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                The things are getting things worse and worse
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                The things are getting things worse and worse
              </p>
            </li> 
          </ul>
        </article>
        {/* END OF Content Writing */}
      </div>
    </section>
  )
}

export default Services