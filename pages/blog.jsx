import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import Layout from '../src/layouts/Layout'
import { getAllPosts } from '../lib/api'
import { useRouter } from 'next/router'
import { countCategories } from '../src/utils'

const POSTS_PER_PAGE = 3

const searchPosts = (posts, searchTerm) => {
  const regex = new RegExp(searchTerm, 'i')
  return posts.filter((post) => {
    return regex.test(post.title) || regex.test(post.excerpt)
  })
}

const Blog = ({ allPosts }) => {
  const searchRef = useRef()
  const router = useRouter()
  const { query } = router

  const [postsVisible, setPostsVisible] = useState(allPosts)
  const currentPage = Number(query.page) || 1

  useEffect(() => {
    if (query.search?.length) {
      const postsToShow = searchPosts(allPosts, query.search)
      setPostsVisible(postsToShow)
    } else {
      setPostsVisible(allPosts)
    }
  }, [query.search])

  const displayPosts = postsVisible.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage
  )
  const totalPages = Math.ceil(postsVisible.length / POSTS_PER_PAGE)

  const handleSearchSubmit = (e) => {
    window.scrollTo(0, 0)
    e.preventDefault()
    if (searchRef.current.value.length < 2) {
      return
    }

    const newQuery = {
      ...query,
      search: searchRef.current.value,
      page: 1,
    }

    router.push({ query: newQuery }, undefined, { shallow: true }) // Use shallow routing to prevent full page reload

    const filteredPosts = searchPosts(allPosts, searchRef.current.value)
    setPostsVisible(filteredPosts)
    searchRef.current.value = ''
  }

  const clearSearch = () => {
    const { search, ...newQuery } = query // Remove search from the query object
    router.push({ query: newQuery }, undefined, { shallow: true }) // Update the URL without the search query
    setPostsVisible(allPosts) // Reset the posts to all posts
  }

  const categories = countCategories(postsVisible)

  return (
    <Layout>
      {/* Section Started Heading */}
      <section className='section section-inner started-heading'>
        <div className='container'>
          {/* Heading */}
          <div className='m-titles align-center'>
            <h1
              className='m-title splitting-text-anim-1 scroll-animate'
              data-splitting='words'
              data-animate='active'
            >
              {query.search ? (
                <span>Wyniki dla: </span>
              ) : (
                <span> Mój blog </span>
              )}
            </h1>
            <div
              className='m-subtitle splitting-text-anim-1 scroll-animate'
              data-splitting='words'
              data-animate='active'
            >
              {query.search ? (
                <span>
                  {query.search} ({postsVisible.length})
                </span>
              ) : (
                <span> o tym i o tamtym </span>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* Section - Blog */}
      <div className='section section-inner m-archive'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-8'>
              {/* Blog Items */}
              <div className='articles-container'>
                {displayPosts.map((post) => {
                  return (
                    <div
                      className='archive-item'
                      // className='archive-item scrolla-element-anim-1 scroll-animate'
                      data-animate='active'
                    >
                      <div className='image'>
                        <Link legacyBehavior href={`/posts/${post.slug}`}>
                          <a>
                            <img
                              src={post.ogImage.url}
                              alt={post.title}
                              loading='lazy'
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
                  )
                })}

                {/* <div
                  className='archive-item scrolla-element-anim-1 scroll-animate'
                  data-animate='active'
                >
                  <div className='image'>
                    <Link legacyBehavior href='/blog-single'>
                      <a>
                        <img
                          src='assets/images/blog-4-scaled-1.jpg'
                          alt='Follow Your Own Design Process'
                          loading='lazy'
                        />
                      </a>
                    </Link>
                  </div>
                  <div className='desc'>
                    <div className='category lui-subtitle'>
                      <span>October 31, 2022</span>
                    </div>
                    <h5 className='lui-title'>
                      <Link legacyBehavior href='/blog-single'>
                        <a>Follow Your Own Design Process</a>
                      </Link>
                    </h5>
                    <div className='lui-text'>
                      <p>
                        Vivamus interdum suscipit lacus. Nunc ultrices accumsan
                        mattis. Aliquam vel sem vel velit efficitur malesuada.
                        Donec arcu lacus, ornare eget…{' '}
                      </p>
                      <div className='readmore'>
                        <Link legacyBehavior href='/blog-single'>
                          <a className='lnk'>Read more</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className='archive-item scrolla-element-anim-1 scroll-animate'
                  data-animate='active'
                >
                  <div className='image'>
                    <Link legacyBehavior href='/blog-single'>
                      <a>
                        <img
                          src='assets/images/blog-2.jpg'
                          alt='Usability Secrets to Create Better Interfaces'
                          loading='lazy'
                        />
                      </a>
                    </Link>
                  </div>
                  <div className='desc'>
                    <div className='category lui-subtitle'>
                      <span>November 28, 2021</span>
                    </div>
                    <h5 className='lui-title'>
                      <Link legacyBehavior href='/blog-single'>
                        <a>Usability Secrets to Create Better Interfaces</a>
                      </Link>
                    </h5>
                    <div className='lui-text'>
                      <p>
                        Vivamus interdum suscipit lacus. Nunc ultrices accumsan
                        mattis. Aliquam vel sem vel velit efficitur malesuada.
                        Donec arcu lacus, ornare eget…{' '}
                      </p>
                      <div className='readmore'>
                        <Link legacyBehavior href='/blog-single'>
                          <a className='lnk'>Read more</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
              {query.page <= totalPages || !query.page ? (
                <div className='pager'>
                  {currentPage > 1 && (
                    <Link
                      className='prev page-numbers'
                      style={{ marginRight: '16px' }}
                      href={{
                        query: { ...query, page: currentPage - 1 },
                      }}
                    >
                      Powrót
                    </Link>
                  )}

                  {Array.from({ length: totalPages }, (_, index) => {
                    const pageNum = index + 1
                    return (
                      <Link
                        className={`page-numbers ${
                          currentPage === pageNum ? 'current' : ''
                        }`}
                        key={pageNum}
                        href={{
                          query: { ...query, page: pageNum },
                        }}
                        // href={`?page=${pageNum}`}
                      >
                        {pageNum}
                      </Link>
                    )
                  })}

                  {currentPage < totalPages && (
                    <Link
                      className='next page-numbers'
                      // href={`?page=${currentPage + 1}`}
                      href={{
                        query: { ...query, page: currentPage + 1 },
                      }}
                    >
                      Następna
                    </Link>
                  )}
                </div>
              ) : (
                ''
              )}
            </div>
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-4'>
              {/* sidebar */}
              <div
                className='col__sedebar scrolla-element-anim-1 scroll-animate'
                data-animate='active'
              >
                <div className='content-sidebar'>
                  <aside className='widget-area'>
                    <div className='widget widget_block widget_search'>
                      <form
                        onSubmit={(e) => handleSearchSubmit(e)}
                        className='wp-block-search'
                      >
                        <div className='wp-block-search__inside-wrapper'>
                          <input
                            type='search'
                            className='wp-block-search__input wp-block-search__input'
                            defaultValue=''
                            placeholder='Wyszukaj..'
                            ref={searchRef}
                          />
                          <button
                            type='submit'
                            className='wp-block-search__button wp-element-button'
                          >
                            Wyszukaj
                          </button>
                        </div>
                      </form>
                      {query.search ? (
                        <button
                          class='btn scrolla-element-anim-1 scroll-animate animate__active'
                          data-animate='active'
                          onClick={clearSearch}
                          style={{ visibility: 'visible', width: '100%' }}
                        >
                          <span>Wyczyść frazę</span>
                        </button>
                      ) : (
                        ''
                      )}
                    </div>
                    {postsVisible.length ? (
                      <section className='widget widget_block'>
                        <div className='wp-block-group'>
                          <div className='wp-block-group__inner-container'>
                            <h2>Najnowsze posty</h2>
                            <ul className='wp-block-latest-posts__list wp-block-latest-posts'>
                              {displayPosts.map((post) => {
                                return (
                                  <li>
                                    <Link
                                      legacyBehavior
                                      href={`/posts/${post.slug}`}
                                    >
                                      <a className='wp-block-latest-posts__post-title'>
                                        {post.title}
                                      </a>
                                    </Link>
                                  </li>
                                )
                              })}
                              {/* <li>
                              <Link legacyBehavior href='/blog-single'>
                                <a className='wp-block-latest-posts__post-title'>
                                  The Main Thing For The Designer
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link legacyBehavior href='/blog-single'>
                                <a className='wp-block-latest-posts__post-title'>
                                  Follow Your Own Design Process
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link legacyBehavior href='/blog-single'>
                                <a className='wp-block-latest-posts__post-title'>
                                  Usability Secrets to Create Better Interfaces
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link legacyBehavior href='/blog-single'>
                                <a className='wp-block-latest-posts__post-title'>
                                  Three Ways To Level Up Your Photography
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link legacyBehavior href='/blog-single'>
                                <a className='wp-block-latest-posts__post-title'>
                                  10 Useful Tips to Improve Your Skills
                                </a>
                              </Link>
                            </li> */}
                            </ul>
                          </div>
                        </div>
                      </section>
                    ) : (
                      ''
                    )}
                    {/* <section className='widget widget_block'>
                      <div className='wp-block-group'>
                        <div className='wp-block-group__inner-container'>
                          <h2>Recent Comments</h2>
                          <ul className='wp-block-latest-comments'>
                            <li className='wp-block-latest-comments__comment'>
                              <span className='wp-block-latest-comments__comment-author'>
                                Ryan Berg
                              </span>{' '}
                              on{' '}
                              <Link legacyBehavior href='/blog-single'>
                                <a className='wp-block-latest-comments__comment-link'>
                                  How to Become a Successful UI/UX Designer
                                </a>
                              </Link>
                            </li>
                            <li className='wp-block-latest-comments__comment'>
                              <span className='wp-block-latest-comments__comment-author'>
                                Robert Brown
                              </span>{' '}
                              on{' '}
                              <Link legacyBehavior href='/blog-single'>
                                <a className='wp-block-latest-comments__comment-link'>
                                  How to Become a Successful UI/UX Designer
                                </a>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </section> */}
                    {postsVisible.length ? (
                      <section className='widget widget_block'>
                        <div className='is-layout-flow wp-block-group'>
                          <div className='wp-block-group__inner-container'>
                            <h2>Kategorie</h2>
                            <ul className='wp-block-categories-list wp-block-categories'>
                              {/* {Object.entries(countTags).map((el) => {
                              console.log('el', el)
                              return <h1>jkjk</h1>
                            })} */}
                              {categories.map((category) => {
                                return (
                                  <li className='cat-item cat-item-2'>
                                    <Link
                                      legacyBehavior
                                      href={`/tags/${category.categorySlug}`}
                                    >
                                      <a>
                                        {category.categoryTitle} (
                                        {category.categoryCount})
                                      </a>
                                    </Link>
                                  </li>
                                )
                              })}
                            </ul>
                          </div>
                        </div>
                      </section>
                    ) : (
                      ''
                    )}
                    {/* <section className='widget widget_block'>
                      <div className='wp-block-group'>
                        <div className='wp-block-group__inner-container'>
                          <h2>Archives</h2>
                          <ul className='wp-block-archives-list wp-block-archives'>
                            <li>
                              <Link legacyBehavior href='/blog-single'>
                                <a>October 2022</a>
                              </Link>
                            </li>
                            <li>
                              <Link legacyBehavior href='/blog-single'>
                                <a>November 2021</a>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </section> */}
                  </aside>
                </div>
              </div>
            </div>
          </div>
          <div className='v-line-left v-line-top'>
            <div className='v-line-block'>
              <span />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
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
    props: { allPosts },
  }
}

export default Blog
