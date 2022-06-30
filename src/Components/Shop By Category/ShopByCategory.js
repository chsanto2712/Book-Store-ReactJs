import React from 'react'
import './ShopByCategory.css'
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

function ShopByCategory() {
  return (
    <div className='bg-white'>
      <div className='px-2'>
        <p className='h4 mb-4'>Shop By Category</p>
      </div>
      <Swiper
        style={{
          "--swiper-navigation-color": "black",
        }}
        className="mySwiper mx-2 mr-2 mb-5"
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide>
          <NavLink className="card cd" to="covid">
            <img src="https://www.netmeds.com/images/category/3055/thumb/covid_essentials_1.jpg" alt="" className='img pt-2 p-1 rounded card-img-top' />
            <div className="card-body">
              <h6 className="ct card-title ">Covid Essentials</h6>
            </div>
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink className="card cd" to="ayush">
            <img src="https://www.netmeds.com/images/category/481/thumb/ayush_1.jpg" alt="" className='img pt-2 p-1 img-center rounded card-img-top' />
            <div className="card-body">
              <h6 className="ct card-title">Ayush</h6>
            </div>
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink className="card cd" to="mom-baby">
            <img src="https://www.netmeds.com/images/category/v1/3085/thumb/mom_baby_1.jpg" alt="" className='img pt-2 p-1 rounded card-img-top' />
            <div className="card-body">
              <h6 className="ct card-title">Mom & Baby</h6>
            </div>
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink className="card cd" to="devices">
            <img src="https://www.netmeds.com/images/category/665/thumb/devices_1.jpg" alt="" className='img pt-2 p-1 rounded card-img-top' />
            <div className="card-body">
              <h6 className="ct card-title">Devices</h6>
            </div>
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink className="card cd" to="fitness">
            <img src="https://www.netmeds.com/images/category/500/thumb/fitness_1.jpg" alt="" className='img pt-2 p-1 rounded card-img-top' />
            <div className="card-body">
              <h6 className="ct card-title">Fitness</h6>
            </div>
          </NavLink>
        </SwiperSlide>
      </Swiper>
    </div>

  )
}

export default ShopByCategory