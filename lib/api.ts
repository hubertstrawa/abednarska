import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  console.log('slug', slug)
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

// Utility function to create URL-friendly slugs
// export function slugify(str: string): string {
//   return str
//     .toLowerCase()
//     .trim()
//     .replace('ą', 'a')
//     .replace('ć', 'c')
//     .replace('ę', 'e')
//     .replace('ł', 'l')
//     .replace('ń', 'n')
//     .replace('ó', 'o')
//     .replace('ś', 's')
//     .replace('ż', 'z')
//     .replace('ź', 'ź')
//     .replace(/[\s_]+/g, '-') // Replace spaces and underscores with dashes
//     .replace(/[^\w-]+/g, '') // Remove non-alphanumeric characters
// }

export function getAllPostsByTag(tag: string, fields: string[] = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .filter((post) => {
      const postTags = post.tags || []
      // Check if any tag's slug matches the provided tag argument
      // @ts-ignore
      return postTags.some((postTag: { slug: string }) => postTag.slug === tag)
    })
    .sort((post1, post2) => (post1.dateISO > post2.dateISO ? -1 : 1))

  return posts
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.dateISO > post2.dateISO ? -1 : 1))
  return posts
}

export function getLatestPosts(fields: string[] = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.dateISO > post2.dateISO ? -1 : 1))
  return posts.slice(0, 3)
}
