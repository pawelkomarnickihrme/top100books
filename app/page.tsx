import { BooksGrid } from '../components/BookGrid'
import { createClient } from '../utils/supabase/server'
export default async function IndexPage() {
  const supabase = createClient()
  let { data: books, error } = await supabase.from('top 100 novels').select('*')
  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow overflow-auto min-h-[200px]">
        <div className="group-has-[[data-pending]]:animate-pulse p-4">
          <BooksGrid books={books} />
        </div>
      </div>
      <div className="mt-auto p-4 border-t">
        {/* <Suspense fallback={null}>
      <BookPagination
        currentPage={pagination.currentPage}
        totalPages={pagination.totalPages}
        searchParams={searchParams}
      />
    </Suspense> */}
      </div>
    </div>
  )
}
