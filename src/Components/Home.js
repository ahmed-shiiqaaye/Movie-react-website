import React from 'react'
import styled from 'styled-components';
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.css'

function Home() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className='slider-container'>
    <Slider {...settings} className='slider'>
      <div>
          <img src="https://images.unsplash.com/photo-1592561199818-6b69d3d1d6e2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNhcnRvb258ZW58MHx8MHx8&auto=format&fit=crop&w=600" alt="" />
      </div>
      <div>
          <img src="https://images.unsplash.com/photo-1589409514187-c21d14df0d04?ixlib=rb-1.2.1&raw_url=true&q=60&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600" alt="" />
      </div>
      <div>
          <img src="https://images.unsplash.com/photo-1610568781018-995405522539?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNhcnRvb24lMjBjaGFyYWN0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=600" alt="" />
      </div>
      <div>
          <img src="https://media.istockphoto.com/photos/happy-toon-kid-with-his-alien-friends-picture-id636985112?b=1&k=20&m=636985112&s=170667a&w=0&h=ktsII4tZ5c5tmLgVR02_bkvdhwTOk86tdKucCtxISCs=" alt="" />
      </div>
      <div>
          <img src="https://images.unsplash.com/photo-1592561199818-6b69d3d1d6e2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNhcnRvb258ZW58MHx8MHx8&auto=format&fit=crop&w=600" alt="" />
      </div>
      
    </Slider>
  </div>
  )
}

export default Home


