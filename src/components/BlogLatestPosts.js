import Link from 'next/link'

const BlogLatestPots = ({ latestPosts }) => {
  console.log(latestPosts)
  return (
    <section className='lui-section lui-gradient-top' id='blog-section'>
      {/* Heading */}
      <div className='lui-heading'>
        <div className='container'>
          <div className='m-titles align-center'>
            <h2
              className='m-title splitting-text-anim-1 scroll-animate'
              data-splitting='words'
              data-animate='active'
            >
              <span> Blog </span>
            </h2>
            <div
              className='m-subtitle splitting-text-anim-1 scroll-animate'
              data-splitting='words'
              data-animate='active'
            >
              <span>
                {' '}
                moje <b>najnowsze posty</b>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Archive */}
      <div className='v-line v-line-right'>
        <div className='container'>
          <div className='blog-items row'>
            {latestPosts.map((post) => {
              return (
                <div className='col-xs-12 col-sm-6 col-md-6 col-lg-6'>
                  <div
                    className='archive-item scrolla-element-anim-1 scroll-animate'
                    data-animate='active'
                  >
                    <div className='image'>
                      <Link legacyBehavior href={`/posts/${post.slug}`}>
                        <a>
                          <img
                            decoding='async'
                            src={post.ogImage.url}
                            alt='The Main Thing For The Designer'
                          />
                        </a>
                      </Link>
                    </div>
                    <div className='desc'>
                      <div className='category lui-subtitle'>
                        <span>{post.date}</span>
                      </div>
                      <h5 className='lui-title'>
                        <Link legacyBehavior href={`/posts/${post.slug}`}>
                          <a>{post.title}</a>
                        </Link>
                      </h5>
                      <div className='lui-text'>
                        <p>{post.excerpt}</p>
                        <div className='readmore'>
                          <Link legacyBehavior href={`/posts/${post.slug}`}>
                            <a className='lnk'>Czytaj więcej</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className='load-more'>
            <Link legacyBehavior href='/blog'>
              <a
                className='btn scrolla-element-anim-1 scroll-animate'
                data-animate='active'
              >
                <span>Zobacz blog</span>
              </a>
            </Link>
          </div>
          <div className='lui-bgtitle'>
            <span> Blog </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogLatestPots
