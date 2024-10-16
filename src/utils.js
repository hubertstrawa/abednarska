export function initCursor() {
  let mouseX = window.innerWidth / 2,
    mouseY = window.innerHeight / 2

  let cursor = {
    el: document.querySelector('.cursor'),
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    w: 30,
    h: 30,
    update: function () {
      let l = this.x - this.w / 2
      let t = this.y - this.h / 2
      this.el.style.transform = 'translate3d(' + l + 'px,' + t + 'px, 0)'
    },
  }

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
  })

  const link = document.querySelectorAll(
    'a, .swiper-pagination, .swiper-button-prev, .swiper-button-next, button, .button, .btn, .lnk'
  )
  link.forEach((link) => {
    link.addEventListener('mouseenter', () => {
      cursor.el.classList.add('cursor-zoom')
    })
    link.addEventListener('mouseleave', () => {
      cursor.el.classList.remove('cursor-zoom')
    })
  })

  setInterval(move, 1000 / 60)
  function move() {
    cursor.x = lerp(cursor.x, mouseX, 0.1)
    cursor.y = lerp(cursor.y, mouseY, 0.1)
    cursor.update()
  }
  function lerp(start, end, amt) {
    return (1 - amt) * start + amt * end
  }
}
export const activeAnimation = () => {
  const progress_inner = document.querySelectorAll('.scroll-animate'),
    triggerBottom = (window.innerHeight / 5) * 5 - 20
  progress_inner.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top
    if (boxTop < triggerBottom) {
      box.style.visibility = 'visible'
      box.classList.add('animate__active')
    }
  })
}

export const stickyNav = () => {
  let offset = window.scrollY
  const sticky = document.querySelectorAll('.header')
  sticky.forEach((sticky) => {
    if (sticky) {
      if (offset > 100) {
        sticky.classList.add('animate-in', 'sticky')
      } else {
        sticky.classList.remove('animate-in', 'sticky')
      }
    }
  })
}

export const toggleMenu = (e) => {
  e.preventDefault()
  const menu = document.querySelector('.menu-btn')
  if (menu.classList.contains('active')) {
    menu.classList.remove('active')
    menu.classList.add('no-touch')
    document.body.classList.remove('no-scroll')
    document.querySelector('.menu-full-overlay').classList.remove('is-open')
    document.querySelector('.menu-full-overlay').classList.remove('has-scroll')
    document
      .querySelector('.menu-full-overlay')
      .classList.remove('animate-active')
    setTimeout(function () {
      document.querySelector('.menu-full-overlay').classList.remove('visible')
      menu.classList.remove('no-touch')
    }, 1000)
  } else {
    menu.classList.add('active', 'no-touch')
    document.body.classList.add('no-scroll')
    document
      .querySelector('.menu-full-overlay')
      .classList.add('is-open', 'visible')
    setTimeout(function () {
      document
        .querySelector('.menu-full-overlay')
        .classList.add('has-scroll', 'animate-active')
      menu.classList.remove('no-touch')
    }, 1000)
  }
  return false
}

export const linkClick = () => {
  const menu = document.querySelector('.menu-btn')
  if (menu.classList.contains('active')) {
    menu.classList.remove('active')
    menu.classList.add('no-touch')
    document.body.classList.remove('no-scroll')
    document.querySelector('.menu-full-overlay').classList.remove('is-open')
    document.querySelector('.menu-full-overlay').classList.remove('has-scroll')
    document
      .querySelector('.menu-full-overlay')
      .classList.remove('animate-active')
    setTimeout(function () {
      document.querySelector('.menu-full-overlay').classList.remove('visible')
      menu.classList.remove('no-touch')
    }, 1000)
  } else {
    menu.classList.add('active', 'no-touch')
    document.body.classList.add('no-scroll')
    document
      .querySelector('.menu-full-overlay')
      .classList.add('is-open', 'visible')
    setTimeout(function () {
      document
        .querySelector('.menu-full-overlay')
        .classList.add('has-scroll', 'animate-active')
      menu.classList.remove('no-touch')
    }, 1000)
  }
  return false
}

export const jarallaxAnimation = () => {
  let { jarallax, jarallaxVideo } = require('jarallax')
  jarallax(document.querySelectorAll(`.js-parallax`), {
    speed: 0.65,
    type: 'scroll',
  })
}

export const slugifyClient = (str) => {
  return str
    .toLowerCase()
    .trim()
    .replace('ą', 'a')
    .replace('ć', 'c')
    .replace('ę', 'e')
    .replace('ł', 'l')
    .replace('ń', 'n')
    .replace('ó', 'o')
    .replace('ś', 's')
    .replace('ż', 'z')
    .replace('ź', 'ź')
    .replace(/[\s_]+/g, '-') // Replace spaces and underscores with dashes
    .replace(/[^\w-]+/g, '') // Remove non-alphanumeric characters
}

// export const countCategories = (posts) => {
//   const tagCount = {}

//   // Loop through each post
//   posts.forEach((post) => {
//     // Loop through each tag in the current post's tags array
//     post.tags.forEach((tag) => {
//       console.log(tag, post)
//       // If the tag already exists in the tagCount object, increment its count
//       if (tagCount[tag]) {
//         tagCount[tag] += 1
//       } else {
//         // Otherwise, initialize the count for this tag to 1
//         tagCount[tag] = 0
//       }
//     })
//   })

//   // Convert the tagCount object to an array of objects
//   const tagArray = Object.keys(tagCount).map((tag) => ({
//     categoryTitle: tag,
//     categoryCount: tagCount[tag],
//     categorySlug: slugifyClient(tag),
//   }))

//   return tagArray
// }

export const countCategories = (posts) => {
  const tagCount = {}

  // Loop through each post
  posts.forEach((post) => {
    // Loop through each tag object in the current post's tags array
    post.tags.forEach((tag) => {
      const { slug, name } = tag // Destructure slug and name from the tag object

      // If the tag slug already exists in the tagCount object, increment its count
      if (tagCount[slug]) {
        tagCount[slug].count += 1
      } else {
        // Otherwise, initialize the count for this tag slug to 1, and store the name
        tagCount[slug] = {
          name: name, // Save the name for future use
          count: 1,
        }
      }
    })
  })

  // Convert the tagCount object to an array of objects
  const tagArray = Object.keys(tagCount).map((slug) => ({
    categoryTitle: tagCount[slug].name, // Get the tag name
    categoryCount: tagCount[slug].count, // Get the count for this tag
    categorySlug: slug, // Use the slug directly from the key
  }))

  return tagArray
}
