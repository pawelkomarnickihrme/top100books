import React from 'react'
import { MDXRemote } from 'next-mdx-remote/rsc'

import ReactMarkdown from 'react-markdown'
import { BookInfo } from '../BookInfo/BookInfo'
const exampleBook = {
  title: 'Example Book Title',
  author: 'John Doe',
  avgRating: 4.5,
  year: 2021,
  pages: 320,
  link: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1631585309i/32758901.jpg',
  id: 1,
}
export default function FeaturesHover() {
  return (
    <section
      id="features"
      className="container max-w-[42rem]  space-y-6 bg-zinc-50 py-2 dark:bg-zinc-900 md:py-4 lg:py-6  mb-10"
    >
      <BookInfo {...exampleBook} />
      <div className="prose mx-auto leading-6 text-xl"></div>
    </section>
  )
}
