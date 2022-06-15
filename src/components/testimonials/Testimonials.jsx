import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar.png'
import AVTR2 from '../../assets/avatar (1).png'
import AVTR3 from '../../assets/avatar (2).png'
import AVTR4 from '../../assets/avatar (3).png'


import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';




const data = [
  {
  avatar: AVTR1,
  name: 'Tina Snow',
  review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, obcaecati quia aperiam laudantium porro earum natus consequuntur itaque. Quis vero ut fugit quibusdam impedit provident similique commodi, velit molestiae dolorem incidunt illum reiciendis minima non ipsa inventore consequuntur. Voluptate, provident.'
},
  {
  avatar: AVTR2,
  name: 'Shataa Wale',
  review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, obcaecati quia aperiam laudantium porro earum natus consequuntur itaque. Quis vero ut fugit quibusdam impedit provident similique commodi, velit molestiae dolorem incidunt illum reiciendis minima non ipsa inventore consequuntur. Voluptate, provident.'
},
  {
  avatar: AVTR3,
  name: 'Kwame Despite',
  review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, obcaecati quia aperiam laudantium porro earum natus consequuntur itaque. Quis vero ut fugit quibusdam impedit provident similique commodi, velit molestiae dolorem incidunt illum reiciendis minima non ipsa inventore consequuntur. Voluptate, provident.'
},
  {
  avatar: AVTR4,
  name: 'Nana Mac Brown',
  review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, obcaecati quia aperiam laudantium porro earum natus consequuntur itaque. Quis vero ut fugit quibusdam impedit provident similique commodi, velit molestiae dolorem incidunt illum reiciendis minima non ipsa inventore consequuntur. Voluptate, provident.'
}
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" 
      
      modules={[Pagination]} spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
   
      {
        data.map(({avatar, name, review}, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          )
        })
      }
      </Swiper>
    </section>
  )
}

export default Testimonials