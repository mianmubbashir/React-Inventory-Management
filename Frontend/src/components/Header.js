import { Disclosure } from '@headlessui/react'


export default function Header() {
  return (
    <div className='overflow-x-auto '>
      <div className="min-h-full ">
        <Disclosure as="nav" className="bg-teal-600 ">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="hidden md:block">
                    <span
                  className="grid place-content-center rounded-lg bg-teal-100 text-md font-bold text-gray-900"
                  >
                   The Lead Commerce
                </span>
                    </div>
                  </div>
                </div>
              </div>

            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}
