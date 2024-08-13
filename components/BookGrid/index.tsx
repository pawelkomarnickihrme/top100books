import Link from 'next/link'
import { books } from '@/lib/db'
import { Photo } from '../Photo'
import { replaceSpacesWithHyphens } from '../../utils/strings'

export async function BooksGrid({ books }: { books: any[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {!books?.length ? (
        <p className="text-center text-muted-foreground col-span-full">No books found.</p>
      ) : (
        books.map((book, index) => (
          <Link
            href={`/${book.Index}-${replaceSpacesWithHyphens(book.Title)}`}
            key={book.Index}
            className="block transition ease-in-out md:hover:scale-105"
          >
            <Photo src={book['Cover Image URL']!} title={book.Title} priority={index < 4} />
          </Link>
        ))
      )}
    </div>
  )
}
