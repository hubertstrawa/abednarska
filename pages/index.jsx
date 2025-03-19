import dynamic from 'next/dynamic'
import Link from 'next/link'
import Resume from '../src/components/Resume'
import Layout from '../src/layouts/Layout'
import Services from '../src/components/Services'
import Contact from '../src/components/Contact'
import Skills from '../src/components/Skills'
import Pricing from '../src/components/Pricing'
import BlogLatestPots from '../src/components/BlogLatestPosts'
import { getLatestPosts } from '../lib/api'

// const PortfolioIsotope = dynamic(
//   () => import('../src/components/PortfolioIsotope'),
//   {
//     ssr: false,
//   }
// )

const Index = ({ latestPosts }) => {
  return (
    <Layout pageClassName={'home'}>
      {/* Section - Hero Started */}
      <section
        className='lui-section lui-section-hero lui-gradient-top'
        id='started-section'
      >
        <div className='container'>
          {/* Hero Started */}
          <div className='lui-started v-line v-line-left'>
            <div className='section hero-started'>
              <div
                className='content scrolla-element-anim-1 scroll-animate'
                data-animate='active'
              >
                <div className='titles'>
                  <div className='lui-subtitle'>
                    <span>
                      {' '}
                      Hello, <b>nazywam się</b>
                    </span>
                  </div>
                  <h1
                    className='title splitting-text-anim-1 scroll-animate'
                    data-splitting='chars'
                    data-animate='active'
                  >
                    <span>
                      <b>Aleksandra</b> Bednarska{' '}
                    </span>
                  </h1>
                  <div className='label lui-subtitle'>
                    {' '}
                    Jestem <strong>lektorką języka angielskiego</strong>
                  </div>
                </div>
                <div className='description'>
                  <div>
                    <p>
                      Jeśli zależy Ci na podniesieniu swoich kompetencji
                      językowych to zapraszam Cię do kontaktu!
                    </p>
                  </div>
                  <div className='social-links'>
                    <a
                      target='_blank'
                      rel='nofollow'
                      href='https://www.instagram.com/teacher.bednarska/'
                    >
                      <i aria-hidden='true' className='fab fa-instagram' />
                    </a>

                    {/* <a target='_blank' rel='nofollow' href='#'>
                      <i aria-hidden='true' className='fab fa-dribbble' />
                    </a>*/}
                  </div>
                </div>
                <div className='bts'>
                  <a href='#contact-section' className='btn'>
                    <span>Kontakt</span>
                  </a>
                  <a href='#learn-with-me' className='btn-lnk'>
                    {' '}
                    Więcej o mnie{' '}
                  </a>
                </div>
              </div>
              <div
                className='slide scrolla-element-anim-1 scroll-animate'
                data-animate='active'
              >
                <img
                  decoding='async'
                  src='assets/images/ola3.png'
                  alt='<b>Zoé</b> Miller'
                />
                <span className='circle circle-1' />
                <span
                  className='circle img-1'
                  style={{
                    backgroundImage: 'url(assets/images/pat-1.png)',
                  }}
                />
                <span
                  className='circle img-2'
                  style={{
                    backgroundImage: 'url(assets/images/pat-2.png)',
                  }}
                />
                <span
                  className='circle img-3'
                  style={{
                    backgroundImage: 'url(assets/images/pat-2.png)',
                  }}
                />
                <div className='info-list'>
                  <ul>
                    <li>
                      <span className='num'>
                        300<strong>+</strong>
                      </span>
                      <span className='value'>
                        zadowolonych <strong>kursantów</strong>
                      </span>
                    </li>
                    <li>
                      <span className='num'>
                        5<strong>+</strong>
                      </span>
                      <span className='value'>
                        lat <strong>praktyki</strong>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='lui-bgtitle'>
              <span> Angielski </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Services */}
      <Services />
      {/* Section - Skills */}
      <Skills />
      {/* Section - Works */}
      {/* <section className='lui-section lui-gradient-top' id='works-section'>
        <div className='lui-heading'>
          <div className='container'>
            <div className='m-titles align-center'>
              <h2
                className='m-title splitting-text-anim-1 scroll-animate'
                data-splitting='words'
                data-animate='active'
              >
                <span> Portfolio </span>
              </h2>
              <div
                className='m-subtitle splitting-text-anim-1 scroll-animate'
                data-splitting='words'
                data-animate='active'
              >
                <span>
                  {' '}
                  my <b>Cases</b>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='v-line v-line-right'>
          <div className='container'>
            <PortfolioIsotope />
            <div className='lui-bgtitle'>
              <span> Portfolio </span>
            </div>
          </div>
        </div>
      </section> */}

      {/* Section - Resume */}
      <Resume />
      <Pricing />

      {/* Section - Blog */}
      <BlogLatestPots latestPosts={latestPosts} />

      {/* <div
        id='mlb2-23737190'
        class='ml-form-embedContainer ml-subscribe-form ml-subscribe-form-23737190'
      >
        <div class='ml-form-align-center'>
          <div class='ml-form-embedWrapper embedForm'>
            <div class='ml-form-embedBody ml-form-embedBodyDefault row-form'>
              <div class='ml-form-embedContent'>
                <h4>Newsletter</h4>

                <p>Signup for news and special offers!</p>
              </div>

              <form
                class='ml-block-form'
                action='https://assets.mailerlite.com/jsonp/1389481/forms/149025632834028856/subscribe'
                data-code=''
                method='post'
                target='_blank'
              >
                <div class='ml-form-formContent'>
                  <div class='ml-form-fieldRow ml-last-item'>
                    <div class='ml-field-group ml-field-email ml-validate-email ml-validate-required'>
                      <input
                        aria-label='email'
                        aria-required='true'
                        type='email'
                        class='form-control'
                        data-inputmask=''
                        name='fields[email]'
                        placeholder='Email'
                        autocomplete='email'
                      />
                    </div>
                  </div>
                </div>

                <input type='hidden' name='ml-submit' value='1' />

                <div class='ml-form-embedSubmit'>
                  <button type='submit' class='primary'>
                    Subscribe
                  </button>

                  <button
                    disabled='disabled'
                    style={{ display: 'none' }}
                    type='button'
                    class='loading'
                  >
                    <div class='ml-form-embedSubmitLoad'></div>
                    <span class='sr-only'>Loading...</span>
                  </button>
                </div>

                <input type='hidden' name='anticsrf' value='true' />
              </form>
            </div>

            <div
              class='ml-form-successBody row-success'
              style={{ display: 'none' }}
            >
              <div class='ml-form-successContent'>
                <h4>Thank you!</h4>

                <p>You have successfully joined our subscriber list.</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Section - Contacts */}
      <Contact />
    </Layout>
  )
}

export const getStaticProps = async () => {
  const latestPosts = getLatestPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'ogImage',
    'excerpt',
    'tags',
  ])

  return {
    props: { latestPosts },
  }
}

export default Index
