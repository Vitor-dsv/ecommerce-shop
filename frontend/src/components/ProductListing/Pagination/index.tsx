import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { useContext, useMemo } from 'react'
import { UseProductContext } from '../Providers/useProductsProvider'
import { EFilterProducts, TUseProducts } from '../hooks/useProducts'

const Pagination = () => {
    const { isLoading, countAll, index: activePage, getAll, getAllHighestPrice, getAllLowestPrice, filter } = useContext(UseProductContext) as TUseProducts

    const fetch = (newPage: number) => {
        if (newPage >= 0 && newPage <= getPages.length - 1 && newPage !== activePage)
            if (filter === EFilterProducts.All)
                getAll(newPage)
            else if (filter === EFilterProducts.Highest)
                getAllHighestPrice(newPage)
            else if (filter === EFilterProducts.Lowest)
                getAllLowestPrice(newPage)
    }

    const getPages = useMemo(() => {
        let pages: string[] = [];

        if (countAll) {
            const roundCountAll = Math.ceil(countAll / 10) * 10
            const pagesCount = roundCountAll / 10;

            for (let index = 0; index < pagesCount; index++)
                pages.push((index + 1).toString())
        }

        return pages;
    }, [countAll])

    return (
        <div className={`${isLoading ? 'opacity-20' : ''} flex items-center dk:justify-between`}>
            <div className="flex flex-1 items-center justify-between md:w-full">
                <div>
                    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                        <a
                            onClick={() => fetch(activePage - 1)}
                            className={`${(activePage - 1) >= 0 ? 'cursor-pointer hover:bg-gray-50 focus:z-20 focus:outline-offset-0' : 'disabled:opacity-10'} relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300`}
                        >
                            <span className="sr-only">Antes</span>
                            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                        </a>
                        {getPages.map((pageNumber, index) => (
                            <a
                                onClick={() => fetch(Number(pageNumber) - 1)}
                                key={`page-${index}`}
                                aria-current="page"
                                className={`relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${pageNumber === (activePage + 1).toString() ? 'bg-orange-400' : 'cursor-pointer hover:bg-gray-50 focus:z-20 focus:outline-offset-0'}`}
                            >
                                {pageNumber}
                            </a>
                        ))}

                        <a
                            onClick={() => fetch(activePage + 1)}
                            className={`${(activePage + 1) <= getPages.length - 1 ? 'cursor-pointer hover:bg-gray-50 focus:z-20 focus:outline-offset-0' : 'disabled:opacity-10'} relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 `}
                        >
                            <span className="sr-only">Depois</span>
                            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    )
}
export default Pagination