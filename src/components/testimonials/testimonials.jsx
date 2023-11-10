import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Modi alias animi dolarem aliquam ea eum beatae moriaors the tpersioho commidi valir porro lblant conserioos tmaloes doles perstihoijto ajoijoiat oijoijo te thting s are delectuis volatputem doles deruant explicale bostrum ducimus quasi?'
  },
  {
    avatar: AVTR2,
    name: 'Tina Snow',
    review: 'Modi alias animi dolarem aliquam ea eum beatae moriaors the tpersioho commidi valir porro lblant conserioos tmaloes doles perstihoijto ajoijoiat oijoijo te thting s are delectuis volatputem doles deruant explicale bostrum ducimus quasi?'
  },
  {
    avatar: AVTR3,
    name: 'Tina Snow',
    review: 'Modi alias animi dolarem aliquam ea eum beatae moriaors the tpersioho commidi valir porro lblant conserioos tmaloes doles perstihoijto ajoijoiat oijoijo te thting s are delectuis volatputem doles deruant explicale bostrum ducimus quasi?'
  },
  {
    avatar: AVTR4,
    name: 'Tina Snow',
    review: 'Modi alias animi dolarem aliquam ea eum beatae moriaors the tpersioho commidi valir porro lblant conserioos tmaloes doles perstihoijto ajoijoiat oijoijo te thting s are delectuis volatputem doles deruant explicale bostrum ducimus quasi?'
  },
]

const testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {/* <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className='client__name'>Enest Achiever</h5>
            <small className="client__review">
              The things are getting worses worse day by day things are etting worse worse atioaht oioit tuioheih thouheoh
            </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR2} alt="Avatar One" />
          </div>
          <h5 className='client__name'>Enest Achiever</h5>
            <small className="client__review">
              The things are getting worses worse day by day things are etting worse worse atioaht oioit tuioheih thouheoh
            </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR3} alt="Avatar One" />
          </div>
          <h5 className='client__name'>Enest Achiever</h5>
            <small className="client__review">
              The things are getting worses worse day by day things are etting worse worse atioaht oioit tuioheih thouheoh
            </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR4} alt="Avatar One" />
          </div>
          <h5 className='client__name'>Enest Achiever</h5>
            <small className="client__review">
              The things are getting worses worse day by day things are etting worse worse atioaht oioit tuioheih thouheoh
            </small>
        </article> */}
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar One" />
                </div>
                <h5 className='client__name'>{name}</h5>
                  <small className="client__review">
                    {review}
                  </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default testimonials