import React from 'react'

function ManageStore() {
  return (
    <div>


<div className="xl:w-full w-11/12 mx-auto  my-6 md:w-2/3 sm:px-10 py-4 rounded-md ">
<div className="flex justify-between ">
             <div class="text-lg text-gray-900 dark:text-gray-600 font-bold ">
                  Store's Location
             </div>

                <div class="flex justify-end gap-4  whitespace-nowrap mb-4 text-end font-large text-gray-900">
                <button
                  class="inline-block rounded border border-blue-600 bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring "
                  href="/download"
                >
                  Add Location
                </button>
                </div>
             </div>


            <div className="flex bg-gray-700 rounded-md relative">
                <div className="flex">
                    {/* <div className="px-4 py-6 border-r border-indigo-600">
                        <div className="h-10 w-10">
                            <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80" className="h-full w-full rounded-full overflow-hidden shadow object-cover" />
                        </div>
                    </div> */}
                    <div className="flex flex-col justify-center pl-4 py-2 sm:py-8">
                        <p className="text-md font-bold text-white pb-1">Store 1</p>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center">
                            <p className="text-sm text-white leading-5">New York &nbsp; - &nbsp;</p>
                            <p className="text-sm text-white leading-5">150 Quaker Bridge Mall Lawrence Township, NY 08648</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

{/* 
          <div className="container mx-auto pt-8 gap-8">
                <div className="rounded border-gray-300  dark:border-gray-700 border-2 h-40"></div>
          </div> */}
    </div>
  )
}

export default ManageStore