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
  console.log('latestPosts', latestPosts)
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
