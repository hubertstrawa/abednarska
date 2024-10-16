import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
// import Container from '../../src/components/Blog/container'
// import PostBody from '../../src/components/Blog/post-body'
// import Header from '../../src/components/Blog/header'
// import PostHeader from '../../src/components/Blog/post-header'
// import Layout from '../../src/components/Blog/layout'
import Link from 'next/link'
import Layout from '../../src/layouts/Layout'

import { getPostBySlug, getAllPosts } from '../../lib/api'
// import PostTitle from '../../src/components/Blog/post-title'
import { CMS_NAME } from '../../lib/constants'
import Head from 'next/head'

import markdownToHtml from '../../lib/markdownToHtml'
import { slugifyClient } from '../../src/utils'
// import type PostType from '../../interfaces/post'
// import { Container } from '@chakra-ui/react'
// import egParallaxSmoother from '../../src/components/Blog/egParallaxSmoother'

// type Props = {
//   post: PostType
//   morePosts: PostType[]
//   preview?: boolean
// }

export default function Post({ post, nextPosts }) {
  const router = useRouter()
  const title = `${post.title} | Aleksandra Bednarska`
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  console.log('nextPosts', nextPosts)
  const postIndex = nextPosts.findIndex((el) => el.slug === post.slug)
  const nextPost = nextPosts[postIndex + 1] || nextPosts[0]

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta
          property='og:image'
          content={`https://abednarska.com${post.ogImage.url}`}
        />
      </Head>
      {/* Section Started Heading */}
      <section className='section section-inner started-heading'>
        <div className='container'>
          {/* Heading */}
          <div className='m-titles mystyle-mobile align-center'>
            <div
              className='m-category scrolla-element-anim-1 scroll-animate'
              data-animate='active'
            >
              <Link href='/blog'>Blog</Link> /{' '}
              {post?.tags?.map((tag, i) => {
                return (
                  <Link legacyBehavior href={`/tags/${tag.slug}`}>
                    <a>
                      {tag.name}
                      {i < post?.tags?.length - 1 && ', '}
                    </a>
                  </Link>
                )
              })}
              {/* <Link legacyBehavior href='/blog'>
                <a>Branding</a>
              </Link>
              ,{' '}
              <Link legacyBehavior href='/blog'>
                <a>UI Design</a>
              </Link>{' '} */}
              / {post.date}
            </div>
            <h1
              className='m-title scrolla-element-anim-1 scroll-animate'
              data-animate='active'
            >
              {post.title}
            </h1>
          </div>
        </div>
      </section>
      {/* Single Post Image */}
      <div className='section section-inner m-image-large'>
        <div className='container'>
          <div className='v-line-right v-line-top'>
            <div className='v-line-block'>
              <span />
            </div>
          </div>
        </div>
        <div className='image'>
          <div
            className='img scrolla-element-anim-1 scroll-animate'
            data-animate='active'
            style={{ backgroundImage: `url(${post.ogImage.url})` }}
          />
        </div>
      </div>
      {/* Section - Blog */}
      <section className='section section-inner m-archive'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-10 offset-1'>
              {/* content */}
              <div className='description'>
                <div
                  className='post-content scrolla-element-anim-1 scroll-animate'
                  data-animate='active'
                >
                  <div
                    // className={markdownStyles['markdown']}
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                  {/* <p>
                    Vivamus interdum suscipit lacus. Nunc ultrices accumsan
                    mattis. Aliquam vel sem vel velit efficitur malesuada. Donec
                    arcu lacus, ornare eget ligula vel, commodo luctus felis. Ut
                    dignissim sapien sit amet molestie rutrum. Orci varius
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Pellentesque in porta dolor, a suscipit
                    risus. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Cras ac arcu in lorem rhoncus ullamcorper. Ut at nulla
                    ut libero mollis viverra sed vitae purus.
                  </p>
                  <p>
                    Nam dui mauris, congue vel nisi in, tempus gravida enim.
                    Nulla et tristique orci. Pellentesque lectus sapien, maximus
                    id gravida sit amet, tristique non eros. Etiam aliquet, sem
                    vitae sagittis convallis, ante sapien tincidunt nisl, eget
                    dapibus tortor velit quis ex. Proin et condimentum est, sed
                    pretium ex. Mauris posuere est metus, vitae commodo sem
                    posuere eget. Praesent maximus augue rutrum, consequat magna
                    id, facilisis lorem. Quisque molestie, turpis ac interdum
                    gravida
                  </p>
                  <blockquote>
                    <p>
                      Photography is the story I fail to put into words get
                      ligula vel, commodo luctus felis. Ut dignissim sapien sit
                      amet molestie rutr
                    </p>
                    <p>
                      <cite>– Destin Sparks</cite>
                    </p>
                  </blockquote>
                  <p>
                    <br />
                  </p>
                  <h3>Aliquam vel sem vel vellesuada</h3>
                  <p>
                    Vivamus interdum suscipit lacus. Nunc ultrices accumsan
                    mattis. Aliquam vel sem vel velit efficitur malesuada. Donec
                    arcu lacus, ornare eget ligula vel, commodo luctus felis. Ut
                    dignissim sapien sit amet molestie rutrum. Orci varius
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Pellentesque in porta dolor, a suscipit
                    risus. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Cras ac arcu in lorem rhoncus ullamcorper. Ut at nulla
                    ut libero mollis viverra sed vitae purus.
                  </p>
                  <ul className='gallery gallery-columns-2'>
                    <li className='gallery-item'>
                      <figure>
                        <img src='assets/images/blog8.jpg' alt='' />
                      </figure>
                    </li>
                    <li className='gallery-item'>
                      <figure>
                        <img src='assets/images/blog6.jpg' alt='' />
                      </figure>
                    </li>
                  </ul>
                  <p>
                    Nam dui mauris, congue vel nisi in, tempus gravida enim.
                    Nulla et tristique orci. Pellentesque lectus sapien, maximus
                    id gravida sit amet, tristique non eros. Etiam aliquet, sem
                    vitae sagittis convallis, ante sapien tincidunt nisl, eget
                    dapibus tortor velit quis ex. Proin et condimentum est, sed
                    pretium ex. Mauris posuere est metus, vitae commodo sem
                    posuere eget. Praesent maximus augue rutrum, consequat magna
                    id, facilisis lorem. Quisque molestie, turpis ac interdum
                    gravida
                  </p>
                  <ul>
                    <li>
                      Donec arcu lacus, ornare eget ligula vel, commodo luctus
                      felis.
                    </li>
                    <li>Ut dignissim sapien sit amet molestie rutrum.</li>
                    <li>
                      Orci varius natoque penatibus et magnis dis parturient
                      montes.
                    </li>
                    <li>
                      Ut at nulla ut libero mollis viverra sed vitae purus.
                    </li>
                  </ul>
                  <p>
                    Nam dui mauris, congue vel nisi in, tempus gravida enim.
                    Nulla et tristique orci. Pellentesque lectus sapien, maximus
                    id gravida sit amet, tristique non eros. Etiam aliquet, sem
                    vitae sagittis convallis, ante sapien tincidunt nisl, eget
                    dapibus tortor velit quis ex.
                  </p>
                  <span className='tags-links'>
                    <span>Tags:</span>
                    <a href='#'>Design</a>
                    <a href='#'>HTML</a>
                    <a href='#'>UX</a>
                    <a href='#'>WordPress</a>
                  </span> */}
                  <span className='tags-links'>
                    <span>Tagi:</span>
                    {post?.tags?.map((tag) => {
                      return (
                        <Link legacyBehavior href={`/tags/${tag.slug}`}>
                          <a>{tag.name}</a>
                        </Link>
                      )
                    })}
                  </span>
                </div>
              </div>
              {/* Comments */}
              {/* <div
                className='comments-post scrolla-element-anim-1 scroll-animate'
                data-animate='active'
              >
                <div className='section__comments'>
                  <div className='m-titles'>
                    <div className='m-title align-left'>2 Comments</div>
                  </div>
                  <ul className='comments'>
                    <li className='comment comment-item'>
                      <div className='comment comment-box'>
                        <img
                          src='assets/images/avatar.png'
                          className='avatar'
                          alt=''
                        />
                        <div className='comment-box__body'>
                          <div className='content-caption post-content description'>
                            <h5 className='comment-box__details'>
                              Robert Brown <span>December 9, 2021</span>
                            </h5>
                            <p>
                              Nam dui mauris, congue vel nisi in, tempus gravida
                              enim. Nulla et tristique orci. Pellentesque lectus
                              sapien, maximus id gravida sit amet, tristique non
                              eros. Etiam aliquet, sem vitae sagittis convallis,
                              ante sapien tincidunt nisl, eget dapibus tortor
                              velit quis ex.
                            </p>
                          </div>
                        </div>
                        <div className='comment-footer'>
                          <a className='comment-reply-link' href='#'>
                            Reply
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className='comment comment-item'>
                      <div className='comment comment-box'>
                        <img
                          src='assets/images/avatar.png'
                          className='avatar'
                          alt=''
                        />
                        <div className='comment-box__body'>
                          <div className='content-caption post-content description'>
                            <h5 className='comment-box__details'>
                              Ryan Berg <span>December 9, 2021</span>
                            </h5>
                            <p>
                              Proin et condimentum est, sed pretium ex. Mauris
                              posuere est metus, vitae commodo sem posuere eget.
                            </p>
                          </div>
                        </div>
                        <div className='comment-footer'>
                          <a className='comment-reply-link' href='#'>
                            Reply
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className='form-comment'>
                    <div className='comment-respond'>
                      <div className='m-titles'>
                        <div className='m-title align-left'>
                          Leave a comment
                        </div>
                      </div>
                      <form
                        onSubmit={(e) => e.preventDefault()}
                        className='comment-form'
                      >
                        <div className='group-row'>
                          <div className='group'>
                            <textarea
                              className='textarea'
                              name='comment'
                              rows={3}
                              placeholder='Comment'
                              defaultValue={''}
                            />
                          </div>
                        </div>
                        <div className='group-row'>
                          <div className='group'>
                            <input
                              type='text'
                              name='author'
                              className='input'
                              placeholder='Name'
                            />
                          </div>
                          <div className='group'>
                            <input
                              type='text'
                              name='email'
                              className='input'
                              placeholder='Email'
                            />
                          </div>
                        </div>
                        <div className='group-row'>
                          <div className='group'>
                            <button type='submit' name='submit' className='btn'>
                              Submit
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className='v-line-left v-line-top'>
            <div className='v-line-block'>
              <span />
            </div>
          </div>
        </div>
      </section>
      {/* Section Navigation */}
      <div className='section section-inner m-page-navigation'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-10 offset-1'>
              <div className='h-titles h-navs'>
                <Link legacyBehavior href={`/posts/${nextPost.slug}`}>
                  <a>
                    <span
                      className='nav-arrow splitting-text-anim-1 scroll-animate'
                      data-splitting='chars'
                      data-animate='active'
                    >
                      {nextPosts[postIndex + 1]
                        ? 'Następny artykuł'
                        : 'Inny artykuł'}
                    </span>
                    <span
                      className='h-title splitting-text-anim-2 scroll-animate'
                      data-splitting='chars'
                      data-animate='active'
                    >
                      {nextPost.title}
                    </span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
  // return (
  //   <Layout preview={preview}>
  //     {/* <Header /> */}
  //     {router.isFallback ? (
  //       <PostTitle>Loading…</PostTitle>
  //     ) : (
  //       <Container maxW={'7xl'} bgColor={'gray.800'} p={30} size='l'>
  //         <article className='mb-32'>
  //           <Head>
  //             <title>{title}</title>
  //             <meta property='og:image' content={post.ogImage.url} />
  //           </Head>
  //           {/* <egParallaxSmoother /> */}
  //           <PostHeader
  //             title={post.title}
  //             coverImage={post.coverImage}
  //             date={post.date}
  //             author={post.author}
  //           />
  //           <PostBody content={post.content} />
  //         </article>
  //       </Container>
  //     )}
  //   </Layout>
  // )
}

// type Params = {
//   params: {
//     slug: string,
//   },
// }

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
    'tags',
  ])
  const content = await markdownToHtml(post.content || '')

  const nextPosts = getAllPosts(['slug', 'title'])

  return {
    props: {
      post: {
        ...post,
        content,
      },
      nextPosts,
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
