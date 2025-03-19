const Contact = () => {
  return (
    <section className='lui-section lui-gradient-bottom' id='contact-section'>
      {/* Heading */}
      <div className='lui-heading'>
        <div className='container'>
          <div className='m-titles align-center'>
            <h2
              className='m-title splitting-text-anim-1 scroll-animate'
              data-splitting='words'
              data-animate='active'
            >
              <span> Kontakt </span>
            </h2>
            <div
              className='m-subtitle splitting-text-anim-1 scroll-animate'
              data-splitting='words'
              data-animate='active'
            >
              <span>
                {' '}
                ucz <b>się ze mną</b>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Contact */}
      <div className='lui-contacts v-line v-line-left'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12 col-sm-12 col-md-5 col-lg-5'>
              <div className='numbers-items'>
                <div
                  className='numbers-item scrolla-element-anim-1 scroll-animate'
                  data-animate='active'
                >
                  <div className='icon'>
                    <i aria-hidden='true' className='far fa-map' />
                  </div>
                  <div className='title'>
                    <span> Adres </span>
                  </div>
                  <div className='lui-text'>
                    <span> Jarosław / online (Google Meet) </span>
                  </div>
                </div>
                <div
                  className='numbers-item scrolla-element-anim-1 scroll-animate'
                  data-animate='active'
                >
                  <div className='icon'>
                    <i aria-hidden='true' className='far fa-address-book' />
                  </div>
                  <div className='title'>
                    <span> Telefon </span>
                  </div>
                  <div className='lui-text'>
                    <span>
                      <a href='tel:731057696' style={{ color: '#000' }}>
                        731 057 696
                      </a>
                    </span>
                  </div>
                </div>
                <div
                  className='numbers-item scrolla-element-anim-1 scroll-animate'
                  data-animate='active'
                >
                  <div className='icon'>
                    <i aria-hidden='true' className='far fa-envelope' />
                  </div>
                  <div className='title'>
                    <span> E-mail </span>
                  </div>
                  <div className='lui-text'>
                    <span>
                      <a
                        href='mailto:abednarska.kontakt@gmail.com'
                        style={{ color: '#000' }}
                      >
                        abednarska.kontakt@gmail.com
                      </a>
                    </span>
                  </div>
                </div>
                <div
                  className='numbers-item scrolla-element-anim-1 scroll-animate'
                  data-animate='active'
                >
                  <div className='icon'>
                    <i aria-hidden='true' className='far fa-user' />
                  </div>
                  <div className='title'>
                    <span> Czas odpowiedzi </span>
                  </div>
                  <div className='lui-text'>
                    <span> Jak najszybciej :) </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xs-12 col-sm-12 col-md-7 col-lg-7'>
              <div
                className='contacts-form scrolla-element-anim-1 scroll-animate'
                data-animate='active'
              >
                <div
                  className='bg-img'
                  style={{
                    backgroundImage: 'url(assets/images/pat-1.png)',
                  }}
                />
                <div className='contacts-form'></div>
              </div>
            </div>
          </div>
          <div className='lui-bgtitle'>
            <span> Kontakt </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
