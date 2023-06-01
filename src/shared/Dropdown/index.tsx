import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

interface Option {
    name: string
    active: boolean
}

export interface Props {
    options: Option[]
    className?: string
}

export default function Dropdown({ className, options }: Props) {

    const backgroundColorByMenu = (activatedBySelection: boolean, activatedByHover: boolean) => {
        if (activatedBySelection)
            return 'bg-orange-400 text-white'
        else if (activatedByHover)
            return 'bg-orange-200'
        else 'text-gray-900'
    }

    return (
        <>
            <Menu as="div" className={`${className} relative inline-block text-left`}>
                <>
                    <Menu.Button className="inline-flex w-full justify-center rounded-md bg-orange-400 bg-opacity-50 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-100">
                        Organizar por
                        <ChevronDownIcon
                            className="ml-2 -mr-1 h-5 w-5"
                            aria-hidden="true"
                        />
                    </Menu.Button>
                </>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1">
                            {options.map((menu, index) => (
                                <Menu.Item key={`menu-${index}`}>
                                    {({ active }) => (
                                        <button
                                            className={`${backgroundColorByMenu(menu.active, active)} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                        >
                                            {menu.name}
                                        </button>
                                    )}
                                </Menu.Item>
                            ))}
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </>
    )
}

