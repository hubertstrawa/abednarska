const Skills = () => {
  return (
    <section className='lui-section lui-gradient-center' id='skills'>
      {/* Heading */}
      <div className='lui-heading'>
        <div className='container'>
          <div className='m-titles align-center'>
            <h2
              className='m-title splitting-text-anim-1 scroll-animate'
              data-splitting='words'
              data-animate='active'
              style={{ paddingBottom: '20px' }}
            >
              <span> Ucz się ze mną, jeśli: </span>
            </h2>
            <div
              className='m-subtitle splitting-text-anim-1 scroll-animate'
              data-splitting='words'
              data-animate='active'
            >
              {/* <span>
            {' '}
            my <b>Talent</b>{' '}
          </span> */}
            </div>
          </div>
        </div>
      </div>
      {/* Skills */}
      <div className='v-line v-line-left'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12 col-sm-6 col-md-4 col-lg-4'>
              <div className='skills-items'>
                <div
                  className='skills-item scrolla-element-anim-1 scroll-animate'
                  data-animate='active'
                >
                  <h6 className='name'>
                    <span> Praktyka </span>
                  </h6>
                  <div className='text'>
                    <div>
                      <p>
                        chcesz zacząć używać języka w praktyce, nauczyć się jak
                        reagować w życiowych, realnych sytuacjach
                      </p>
                    </div>
                  </div>
                  <div className='dots'>
                    <div className='dot' style={{ width: '99%' }}>
                      <span />
                    </div>
                  </div>
                  {/* <div className='value'>
                <span className='num'>
                  85 <span>%</span>
                </span>
              </div> */}
                </div>
                <div
                  className='skills-item scrolla-element-anim-1 scroll-animate'
                  data-animate='active'
                >
                  <h6 className='name'>
                    <span> Wiedza </span>
                  </h6>
                  <div className='text'>
                    <div>
                      <p>
                        interesuje Cię rozmawianie w języku obcym na różne
                        tematy, chcesz poszerzyć horyzonty
                      </p>
                    </div>
                  </div>
                  <div className='dots'>
                    <div className='dot' style={{ width: '99%' }}>
                      <span />
                    </div>
                  </div>
                  {/* <div className='value'>
                <span className='num'>
                  75 <span>%</span>
                </span>
              </div> */}
                </div>
              </div>
            </div>
            <div className='col-xs-12 col-sm-6 col-md-4 col-lg-4'>
              <div className='skills-items'>
                <div
                  className='skills-item scrolla-element-anim-1 scroll-animate'
                  data-animate='active'
                >
                  <h6 className='name'>
                    <span> Systematyczność </span>
                  </h6>
                  <div className='text'>
                    <div>
                      <p>
                        masz potrzebę powtórzenia pewnego obszaru materiału,
                        odświeżenia swojej wiedzy
                      </p>
                    </div>
                  </div>
                  <div className='dots'>
                    <div className='dot' style={{ width: '99%' }}>
                      <span />
                    </div>
                  </div>
                  {/* <div className='value'>
                <span className='num'>
                  75 <span>%</span>
                </span>
              </div> */}
                </div>
                <div
                  className='skills-item scrolla-element-anim-1 scroll-animate'
                  data-animate='active'
                >
                  <h6 className='name'>
                    <span> Motywacja </span>
                  </h6>
                  <div className='text'>
                    <div>
                      <p>
                        zależy Ci na podniesieniu konkretnych kompetencji i
                        posiadasz motywację do pracy
                      </p>
                    </div>
                  </div>
                  <div className='dots'>
                    <div className='dot' style={{ width: '99%' }}>
                      <span />
                    </div>
                  </div>
                  {/* <div className='value'>
                <span className='num'>
                  70 <span>%</span>
                </span>
              </div> */}
                </div>
              </div>
            </div>
            <div className='col-xs-12 col-sm-6 col-md-4 col-lg-4'>
              <div className='skills-items'>
                <div
                  className='skills-item scrolla-element-anim-1 scroll-animate'
                  data-animate='active'
                >
                  <h6 className='name'>
                    <span> Ambicja </span>
                  </h6>
                  <div className='text'>
                    <div>
                      <p>
                        chcesz realizować swoje plany i marzenia, a brak
                        znajomości języka Cię blokuje
                      </p>
                    </div>
                  </div>
                  <div className='dots'>
                    <div className='dot' style={{ width: '99%' }}>
                      <span />
                    </div>
                  </div>
                  {/* <div className='value'>
                <span className='num'>
                  90 <span>%</span>
                </span>
              </div> */}
                </div>
                <div
                  className='skills-item scrolla-element-anim-1 scroll-animate'
                  data-animate='active'
                >
                  <h6 className='name'>
                    <span> Odwaga </span>
                  </h6>
                  <div className='text'>
                    <div>
                      <p>
                        nie boisz się wyzwań i chcesz, aby Twój angielski
                        wskoczył na wyższy poziom
                      </p>
                    </div>
                  </div>
                  <div className='dots'>
                    <div className='dot' style={{ width: '99%' }}>
                      <span />
                    </div>
                  </div>
                  {/* <div className='value'>
                <span className='num'>
                  80 <span>%</span>
                </span>
              </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className='lui-bgtitle'>
            <span> Umiejętności </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
