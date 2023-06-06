import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

interface Props {
    quantityPage: number
    activePage: number
}

const Pagination = ({ quantityPage, activePage }: Props) => {
    const getPages = (): string[] => {
        let pages: string[] = [];

        for (let index = 0; index < quantityPage; index++)
            pages.push((index + 1).toString());

        return pages;
    }

    return (
        <div className="flex items-center dk:justify-between">
            <div className="flex flex-1 items-center justify-between md:w-full">
                <div>
                    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                        <a
                            href="#"
                            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                            <span className="sr-only">Antes</span>
                            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                        </a>
                        {getPages().map((pageNumber, index) => (
                            <a
                                key={`page-${index}`}
                                href="#"
                                aria-current="page"
                                className={`relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${pageNumber === activePage.toString() ? 'bg-orange-400' : ''}`}
                            >
                                {pageNumber}
                            </a>
                        ))}
                        <a
                            href="#"
                            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
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