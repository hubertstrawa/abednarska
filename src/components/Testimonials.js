const Testimonials = () => {
  return (
    <section
      className='lui-section lui-gradient-center'
      id='testimonials-section'
    >
      {/* Heading */}
      <div className='lui-heading'>
        <div className='container'>
          <div className='m-titles align-center'>
            <h2
              className='m-title splitting-text-anim-1 scroll-animate'
              data-splitting='words'
              data-animate='active'
            >
              <span> Testimonials </span>
            </h2>
            <div
              className='m-subtitle splitting-text-anim-1 scroll-animate'
              data-splitting='words'
              data-animate='active'
            >
              <span>
                {' '}
                what <b>Customers Say</b>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonials */}
      <div className='v-line v-line-right'>
        <div className='container'>
          <Swiper
            {...testimonialsSliderProps}
            className='swiper-container js-testimonials scrolla-element-anim-1 scroll-animate'
            data-animate='active'
          >
            <SwiperSlide className='swiper-slide'>
              <div className='testimonials-item'>
                <div className='image'>
                  <img
                    decoding='async'
                    src='assets/images/testi4-2.jpg'
                    alt='Barbara Wilson'
                  />
                  <div className='icon'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      xmlnsXlink='http://www.w3.org/1999/xlink'
                      width='44px'
                      height='34px'
                    >
                      <path
                        fillRule='evenodd'
                        strokeWidth='2px'
                        stroke='rgb(0, 0, 0)'
                        fill='rgb(41, 165, 135)'
                        d='M17.360,8.325 C15.490,5.563 11.616,4.762 8.705,6.536 C6.901,7.635 5.815,9.533 5.826,11.567 C5.828,14.854 8.637,17.516 12.101,17.515 C13.290,17.513 14.456,17.192 15.460,16.587 C14.967,17.975 14.049,19.457 12.537,20.942 C11.934,21.533 11.951,22.476 12.574,23.048 C13.198,23.619 14.192,23.604 14.794,23.012 C20.384,17.515 19.658,11.539 17.360,8.333 L17.360,8.325 ZM32.407,8.325 C30.538,5.563 26.663,4.762 23.752,6.536 C21.949,7.635 20.863,9.533 20.873,11.567 C20.875,14.854 23.685,17.516 27.148,17.515 C28.338,17.513 29.503,17.192 30.508,16.587 C30.015,17.975 29.097,19.457 27.585,20.942 C26.982,21.533 26.999,22.476 27.622,23.048 C28.245,23.619 29.239,23.604 29.842,23.012 C35.432,17.515 34.706,11.539 32.407,8.333 L32.407,8.325 Z'
                      />
                    </svg>
                  </div>
                </div>
                <div className='text lui-text'>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
                <div className='info'>
                  <h6 className='name'>
                    <span>Barbara Wilson</span>
                  </h6>
                  <div className='author'>
                    <span>CEO Company</span>
                  </div>
                </div>
                <div
                  className='bg-img'
                  style={{
                    backgroundImage: 'url(assets/images/pat-2.png)',
                  }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
              <div className='testimonials-item'>
                <div className='image'>
                  <img
                    decoding='async'
                    src='assets/images/testi4-1.jpg'
                    alt='Charlie Smith'
                  />
                  <div className='icon'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      xmlnsXlink='http://www.w3.org/1999/xlink'
                      width='44px'
                      height='34px'
                    >
                      <path
                        fillRule='evenodd'
                        strokeWidth='2px'
                        stroke='rgb(0, 0, 0)'
                        fill='rgb(41, 165, 135)'
                        d='M17.360,8.325 C15.490,5.563 11.616,4.762 8.705,6.536 C6.901,7.635 5.815,9.533 5.826,11.567 C5.828,14.854 8.637,17.516 12.101,17.515 C13.290,17.513 14.456,17.192 15.460,16.587 C14.967,17.975 14.049,19.457 12.537,20.942 C11.934,21.533 11.951,22.476 12.574,23.048 C13.198,23.619 14.192,23.604 14.794,23.012 C20.384,17.515 19.658,11.539 17.360,8.333 L17.360,8.325 ZM32.407,8.325 C30.538,5.563 26.663,4.762 23.752,6.536 C21.949,7.635 20.863,9.533 20.873,11.567 C20.875,14.854 23.685,17.516 27.148,17.515 C28.338,17.513 29.503,17.192 30.508,16.587 C30.015,17.975 29.097,19.457 27.585,20.942 C26.982,21.533 26.999,22.476 27.622,23.048 C28.245,23.619 29.239,23.604 29.842,23.012 C35.432,17.515 34.706,11.539 32.407,8.333 L32.407,8.325 Z'
                      />
                    </svg>
                  </div>
                </div>
                <div className='text lui-text'>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
                <div className='info'>
                  <h6 className='name'>
                    <span>Charlie Smith</span>
                  </h6>
                  <div className='author'>
                    <span>Designer</span>
                  </div>
                </div>
                <div
                  className='bg-img'
                  style={{
                    backgroundImage: 'url(assets/images/pat-2.png)',
                  }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
              <div className='testimonials-item'>
                <div className='image'>
                  <img
                    decoding='async'
                    src='assets/images/testi4-4.jpg'
                    alt='Roy Wang'
                  />
                  <div className='icon'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      xmlnsXlink='http://www.w3.org/1999/xlink'
                      width='44px'
                      height='34px'
                    >
                      <path
                        fillRule='evenodd'
                        strokeWidth='2px'
                        stroke='rgb(0, 0, 0)'
                        fill='rgb(41, 165, 135)'
                        d='M17.360,8.325 C15.490,5.563 11.616,4.762 8.705,6.536 C6.901,7.635 5.815,9.533 5.826,11.567 C5.828,14.854 8.637,17.516 12.101,17.515 C13.290,17.513 14.456,17.192 15.460,16.587 C14.967,17.975 14.049,19.457 12.537,20.942 C11.934,21.533 11.951,22.476 12.574,23.048 C13.198,23.619 14.192,23.604 14.794,23.012 C20.384,17.515 19.658,11.539 17.360,8.333 L17.360,8.325 ZM32.407,8.325 C30.538,5.563 26.663,4.762 23.752,6.536 C21.949,7.635 20.863,9.533 20.873,11.567 C20.875,14.854 23.685,17.516 27.148,17.515 C28.338,17.513 29.503,17.192 30.508,16.587 C30.015,17.975 29.097,19.457 27.585,20.942 C26.982,21.533 26.999,22.476 27.622,23.048 C28.245,23.619 29.239,23.604 29.842,23.012 C35.432,17.515 34.706,11.539 32.407,8.333 L32.407,8.325 Z'
                      />
                    </svg>
                  </div>
                </div>
                <div className='text lui-text'>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
                <div className='info'>
                  <h6 className='name'>
                    <span>Roy Wang</span>
                  </h6>
                  <div className='author'>
                    <span>Manager GYM</span>
                  </div>
                </div>
                <div
                  className='bg-img'
                  style={{
                    backgroundImage: 'url(assets/images/pat-2.png)',
                  }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
              <div className='testimonials-item'>
                <div className='image'>
                  <img
                    decoding='async'
                    src='assets/images/testi4-3.jpg'
                    alt='Jennifer Smith'
                  />
                  <div className='icon'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      xmlnsXlink='http://www.w3.org/1999/xlink'
                      width='44px'
                      height='34px'
                    >
                      <path
                        fillRule='evenodd'
                        strokeWidth='2px'
                        stroke='rgb(0, 0, 0)'
                        fill='rgb(41, 165, 135)'
                        d='M17.360,8.325 C15.490,5.563 11.616,4.762 8.705,6.536 C6.901,7.635 5.815,9.533 5.826,11.567 C5.828,14.854 8.637,17.516 12.101,17.515 C13.290,17.513 14.456,17.192 15.460,16.587 C14.967,17.975 14.049,19.457 12.537,20.942 C11.934,21.533 11.951,22.476 12.574,23.048 C13.198,23.619 14.192,23.604 14.794,23.012 C20.384,17.515 19.658,11.539 17.360,8.333 L17.360,8.325 ZM32.407,8.325 C30.538,5.563 26.663,4.762 23.752,6.536 C21.949,7.635 20.863,9.533 20.873,11.567 C20.875,14.854 23.685,17.516 27.148,17.515 C28.338,17.513 29.503,17.192 30.508,16.587 C30.015,17.975 29.097,19.457 27.585,20.942 C26.982,21.533 26.999,22.476 27.622,23.048 C28.245,23.619 29.239,23.604 29.842,23.012 C35.432,17.515 34.706,11.539 32.407,8.333 L32.407,8.325 Z'
                      />
                    </svg>
                  </div>
                </div>
                <div className='text lui-text'>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
                <div className='info'>
                  <h6 className='name'>
                    <span>Jennifer Smith</span>
                  </h6>
                  <div className='author'>
                    <span>CEO &amp; Founder</span>
                  </div>
                </div>
                <div
                  className='bg-img'
                  style={{
                    backgroundImage: 'url(assets/images/pat-2.png)',
                  }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
              <div className='testimonials-item'>
                <div className='image'>
                  <img
                    decoding='async'
                    src='assets/images/testi4-5.jpg'
                    alt='Paul Freeman'
                  />
                  <div className='icon'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      xmlnsXlink='http://www.w3.org/1999/xlink'
                      width='44px'
                      height='34px'
                    >
                      <path
                        fillRule='evenodd'
                        strokeWidth='2px'
                        stroke='rgb(0, 0, 0)'
                        fill='rgb(41, 165, 135)'
                        d='M17.360,8.325 C15.490,5.563 11.616,4.762 8.705,6.536 C6.901,7.635 5.815,9.533 5.826,11.567 C5.828,14.854 8.637,17.516 12.101,17.515 C13.290,17.513 14.456,17.192 15.460,16.587 C14.967,17.975 14.049,19.457 12.537,20.942 C11.934,21.533 11.951,22.476 12.574,23.048 C13.198,23.619 14.192,23.604 14.794,23.012 C20.384,17.515 19.658,11.539 17.360,8.333 L17.360,8.325 ZM32.407,8.325 C30.538,5.563 26.663,4.762 23.752,6.536 C21.949,7.635 20.863,9.533 20.873,11.567 C20.875,14.854 23.685,17.516 27.148,17.515 C28.338,17.513 29.503,17.192 30.508,16.587 C30.015,17.975 29.097,19.457 27.585,20.942 C26.982,21.533 26.999,22.476 27.622,23.048 C28.245,23.619 29.239,23.604 29.842,23.012 C35.432,17.515 34.706,11.539 32.407,8.333 L32.407,8.325 Z'
                      />
                    </svg>
                  </div>
                </div>
                <div className='text lui-text'>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
                <div className='info'>
                  <h6 className='name'>
                    <span>Paul Freeman</span>
                  </h6>
                  <div className='author'>
                    <span>Photographer</span>
                  </div>
                </div>
                <div
                  className='bg-img'
                  style={{
                    backgroundImage: 'url(assets/images/pat-2.png)',
                  }}
                />
              </div>
            </SwiperSlide>
            <div className='swiper-pagination' />
          </Swiper>
          <div className='lui-bgtitle'>
            <span> Reviews </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
