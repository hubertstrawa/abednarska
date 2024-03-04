import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { servicesSliderProps, testimonialsSliderProps } from '../sliderProps'

const SlideNextButton = () => {
  const swiper = useSwiper()

  return (
    <>
      <button
        className='btn lnk showDesktop'
        onClick={() => swiper.slideNext()}
      >
        dalej
      </button>
      <span
        onClick={() => swiper.slideNext()}
        className='lnk showMobile'
      ></span>
    </>
  )
}

const Services = () => {
  return (
    <section className='lui-section lui-gradient-bottom' id='learn-with-me'>
      {/* Heading */}
      <div className='lui-heading'>
        <div className='container'>
          <div className='m-titles align-center'>
            <h2
              className='m-title splitting-text-anim-1 scroll-animate'
              data-splitting='words'
              data-animate='active'
            >
              <span> Nauka ze mną </span>
            </h2>
            <div
              className='m-subtitle splitting-text-anim-1 scroll-animate'
              data-splitting='words'
              data-animate='active'
            >
              <span>
                {' '}
                jak <b>wygląda?</b>{' '}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Services */}
      <div className='v-line v-line-right'>
        <div className='container'>
          <Swiper
            {...servicesSliderProps}
            className='swiper-container js-services scrolla-element-anim-1 scroll-animate'
            data-animate='active'
          >
            <SwiperSlide className='swiper-slide'>
              <div className='services-item'>
                <div className='lui-subtitle'>
                  <span> I </span>
                </div>
                <div className='icon' />
                <h5 className='lui-title'>
                  <span> Pierwsze spotkanie </span>
                </h5>
                <div className='lui-text'>
                  <div>
                    {' '}
                    Na pierwszym spotkaniu ustalamy cel, do którego wspólnie
                    będziemy dążyć podczas kursu dzięki sprawdzonym, nowoczesnym
                    metodom.{' '}
                  </div>
                </div>
                {/* <a href='#contact-section' className='lnk'>
                  Kontakt
                </a> */}
                <SlideNextButton />
                <div
                  className='image'
                  style={{
                    backgroundImage: 'url(assets/images/pat-2.png)',
                  }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
              <div className='services-item'>
                <div className='lui-subtitle'>
                  <span> II </span>
                </div>
                <div className='icon' />
                <h5 className='lui-title'>
                  <span> Indywidualne podejście </span>
                </h5>
                <div className='lui-text'>
                  <div>
                    <p>
                      Podejście i sposób nauki jest dopasowany do Twoich potrzeb
                      i możliwości. Nie tracimy czasu na omawianie tematów,
                      które są dla Ciebie nudne lub niepotrzebne.
                    </p>
                  </div>
                </div>
                <SlideNextButton />
                <div
                  className='image'
                  style={{
                    backgroundImage: 'url(assets/images/pat-2.png)',
                  }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
              <div className='services-item'>
                <div className='lui-subtitle'>
                  <span> III </span>
                </div>
                <div className='icon' />
                <h5 className='lui-title'>
                  <span> Struktura zajęć </span>
                </h5>
                <div className='lui-text'>
                  <div>
                    Każda lekcja ma konkretną strukturę, która została stworzona
                    w oparciu o wieloletnie doświadczenie.
                  </div>
                </div>
                <SlideNextButton />
                <div
                  className='image'
                  style={{
                    backgroundImage: 'url(assets/images/pat-2.png)',
                  }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
              <div className='services-item'>
                <div className='lui-subtitle'>
                  <span> IV </span>
                </div>
                <div className='icon' />
                <h5 className='lui-title'>
                  <span> Rodzaje zajęć </span>
                </h5>
                <div className='lui-text'>
                  <div>
                    Oferuję zajęcia ogólnorozwojowe (General English Course) lub
                    konwersacyjne (Conversational Course), istnieje możliwość
                    zajęć grupowych.
                  </div>
                </div>
                <SlideNextButton />
                <div
                  className='image'
                  style={{
                    backgroundImage: 'url(assets/images/pat-2.png)',
                  }}
                />
              </div>
            </SwiperSlide>
            {/* <SwiperSlide className='swiper-slide'>
              <div className='services-item'>
                <div className='lui-subtitle'>
                  <span> Music Writing </span>
                </div>
                <div className='icon' />
                <h5 className='lui-title'>
                  <span> Sound Track </span>
                </h5>
                <div className='lui-text'>
                  <div>
                    <p>
                      Music copying, writing, creating, transcription and
                      composition services.
                    </p>
                  </div>
                </div>
                <a href='#contact-section' className='lnk'>
                  {' '}
                  See Pricing{' '}
                </a>
                <div
                  className='image'
                  style={{
                    backgroundImage: 'url(assets/images/pat-2.png)',
                  }}
                />
              </div>
            </SwiperSlide> */}
            <div className='swiper-pagination' />
          </Swiper>
          <div className='lui-bgtitle'>
            <span> Nauka </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
