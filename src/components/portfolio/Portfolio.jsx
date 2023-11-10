import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

// DO NOT USE THE IMGES IN PRODUCTION

const data =[
  {
    id:1,
    image: IMG1,
    title: 'Crypto Currency Dashboard and Financial Visualization',
    github: 'https://github.com',
    demo: 'https://youtu.be/uFpDexeZsG8'
  },
  {
    id:2,
    image: IMG2,
    title: 'Financial Visualization and Charts',
    github: 'https://github.com',
    demo: 'https://youtu.be/S8SP_bAQZUc'
  },
  {
    id:3,
    image: IMG3,
    title: 'Desamuduru Telugu Movie Full Songs Jukebox',
    github: 'https://github.com',
    demo: 'https://youtu.be/MmZJ1xZ1YtA'
  },
  {
    id:4,
    image: IMG4,
    title: 'SARRAINODU JUKEBOX',
    github: 'https://github.com',
    demo: 'https://youtu.be/auxrmpxkop0'
  },
  {
    id:5,
    image: IMG5,
    title: 'Race Gurram Video Songs | Sweety Sweety Video Song',
    github: 'https://github.com',
    demo: 'https://youtu.be/-7DEJVJG0pc'
  },
  {
    id:6,
    image: IMG6,
    title: 'Telusa Telusa Video Song',
    github: 'https://github.com',
    demo: 'https://youtu.be/fGJA4Z_wqHw'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {/* <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href='https://github.com' className='btn'>Github</a>
            <a href='https://youtube.com' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href='https://github.com' className='btn'>Github</a>
            <a href='https://youtube.com' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href='https://github.com' className='btn'>Github</a>
            <a href='https://youtube.com' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href='https://github.com' className='btn'>Github</a>
            <a href='https://youtube.com' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href='https://github.com' className='btn'>Github</a>
            <a href='https://youtube.com' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href='https://github.com' className='btn'>Github</a>
            <a href='https://youtube.com' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article> */}
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          }
          )
        }
      </div>
    </section>
  )
}

export default Portfolio