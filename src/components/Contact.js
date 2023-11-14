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
                    <span> Jarosław / Rzeszów </span>
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
                    <span> abednarska.kontakt@gmail.com </span>
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
                {/* <div
                  className='numbers-item scrolla-element-anim-1 scroll-animate'
                  data-animate='active'
                >
                  <div className='icon'>
                    <i aria-hidden='true' className='far fa-address-book' />
                  </div>
                  <div className='title'>
                    <span> Phone </span>
                  </div>
                  <div className='lui-text'>
                    <span> +1 900 - 900 - 9000 </span>
                  </div>
                </div> */}
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
                <div className='contacts-form'>
                  <form
                    action='https://formkeep.com/f/2a9b3842ce33'
                    accept-charset='UTF-8'
                    enctype='multipart/form-data'
                    method='POST'
                    // onSubmit={(e) => e.preventDefault()}
                    id='cform'
                  >
                    <div className='row'>
                      <div className='col-xs-12 col-sm-6 col-md-6 col-lg-6'>
                        <div className='group'>
                          <label>
                            Twoje imię / nickname <b>*</b>
                            <input type='text' name='name' required />
                          </label>
                        </div>
                      </div>
                      <div className='col-xs-12 col-sm-6 col-md-6 col-lg-6'>
                        <div className='group'>
                          <label>
                            Twój adres e-mail <b>*</b>
                            <input type='email' name='email' required />
                          </label>
                        </div>
                      </div>
                      <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                        <div className='group'>
                          <label>
                            temat <b>*</b>
                            <input type='text' name='subject' required />
                          </label>
                        </div>
                      </div>
                      <div
                        aria-hidden='true'
                        style={{ position: 'absolute', left: '-5000px' }}
                      >
                        /* real people should not fill this in and expect good
                        things - do not remove this or risk form bot signups */
                        <input
                          type='text'
                          name='b_79bc3bb6249522a842a3cd4be_e6d3c3f8f6'
                          tabindex='-1'
                          value=''
                        />
                      </div>
                      <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                        <div className='group'>
                          <label>
                            Wiadomość <b>*</b>
                            <textarea
                              name='message'
                              defaultValue={''}
                              required
                            />
                          </label>
                        </div>
                      </div>
                      <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 align-right'>
                        {/* <div className='terms-label'>
                          * Wyrażam zgodę na przetwarzanie moich danych
                          osobowych.
                        </div> */}
                        <button
                          className='btn'
                          type='submit'
                          // onclick="$('#cform').submit(); return false;"
                        >
                          <span>Wyślij wiadomość</span>
                        </button>
                      </div>
                    </div>
                  </form>
                  <div className='alert-success' style={{ display: 'none' }}>
                    <p>Thanks, your message is sent successfully.</p>
                  </div>
                </div>
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
