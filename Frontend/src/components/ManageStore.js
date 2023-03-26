import React from 'react';
import { useState } from 'react';
import StoreLocation from './StoreLocation';

function ManageStore() {

  const [showAddStore, setShowAddStore] = useState(false)

  const showStore = () => {
     setShowAddStore(!showAddStore)
  }

  return (
    <div>

<div className="xl:w-full w-11/12 mx-auto  my-6 md:w-2/3 sm:px-10 py-4 rounded-md ">
<div className="flex justify-between ">
             <div class="text-lg text-gray-900 dark:text-gray-900 font-bold ">
                  Store's Location
             </div>

                <div class="flex justify-end gap-4  whitespace-nowrap mb-4 text-end font-large text-gray-900">
                <button
                  class="inline-block rounded border border-blue-600 bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring "
                  href="/download"
                  onClick={showStore}
                >
                  Add Store Location
                </button>
                {showAddStore && <StoreLocation />}
                </div>
             </div>


            <div className="flex bg-gray-700 rounded-md relative">
                <div className="flex">
                
                    <div className="flex flex-col justify-center pl-4 py-2 sm:py-8">
                        <p className="text-md font-bold text-white pb-1">Store Name</p>
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