import { FC } from 'react'
import Image from 'next/image'

interface BookInfoProps {
  title: string
  author: string
  avgRating: number
  year: number
  pages: number
  link: string
  id: number
}

export const BookInfo: FC<BookInfoProps> = ({ title, author, avgRating, year, pages, link, id }) => {
  return (
    <div className="mx-auto w-full flex  flex-col  space-y-4">
      <div className=" flex flex-col md:flex-row items-center md:items-start md:space-y-0 md:space-x-4">
        <Image src={link} alt="hero" width={217} height={345} />
        <div>
          <h2 className="font-heading text-xl leading-[1.1] sm:text-xl md:text-4xl">{`#${id}  ${title}`}</h2>
          <p className="text-xl mt-2">Author: {author}</p>
          <p className="text-xl">Average Rating: {avgRating}</p>
          <p className="text-xl">Year: {year}</p>
          <p className="text-xl">Pages: {pages}</p>
        </div>
      </div>
    </div>
  )
}
