import React from 'react'

function Dashboard() {

//   const stats = [
//     {
//         data: "35K",
//         desc: "Customers consectetur adipiscing elit."
//     },
//     {
//         data: "10K+",
//         desc: "Downloads efficitur id eu nulla facilisis turpis"
//     },
//     {
//         data: "40+",
//         desc: "Countries maximus sit amet auctor sed,"
//     },
//     {
//         data: "30M+",
//         desc: "Total revenue consectetur adipiscing elit"
//     },
// ]

  return (

    // <section className="py-28 ">
    //         <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-8">
    //             <div className="max-w-2xl xl:mx-auto xl:text-center">
    //                 <h3 className="text-black text-3xl font-bold sm:text-4xl">
    //                     Our customers are always happy
    //                 </h3>
    //                 <p className="mt-3 text-black-300">
    //                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis sollicitudin quam ut tincidunt.
    //                 </p>
    //             </div>
    //             <div className="mt-12">
    //                 <ul className="flex-wrap gap-x-12 gap-y-10 items-center space-y-8 sm:space-y-0 sm:flex xl:justify-center">
    //                     {
    //                         stats.map((item, idx) => (
    //                             <li key={idx} className="sm:max-w-[15rem]">
    //                                 <h4 className="text-4xl text-black font-semibold">{item.data}</h4>
    //                                 <p className="mt-3 text-black-400 font-medium">{item.desc}</p>
    //                             </li>
    //                         ))
    //                     }
    //                 </ul>
    //             </div>
    //         </div>
    //         <div className="absolute inset-0 max-w-md mx-auto h-80 blur-[118px] sm:h-72" 
    //         style={{ background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)" }}
    //         ></div>
    //     </section>


    <div className='grid grid-cols-1 sm:grid-cols-3 h-auto gap-4  bg-slate-200'>
    <article
    class="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white p-6"
  >
    <div
      class="inline-flex gap-2 self-end rounded bg-green-100 p-1 text-green-600"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
  
      <span class="text-xs font-medium"> 67.81% </span>
    </div>
  
    <div>
      <strong class="block text-sm font-medium text-gray-500"> Profit </strong>
  
      <p>
        <span class="text-2xl font-medium text-gray-900"> $404.32 </span>
  
        <span class="text-xs text-gray-500"> from $240.94 </span>
      </p>
    </div>
  </article>
  
  <article
    class="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white p-6 "
  >
    <div class="inline-flex gap-2 self-end rounded bg-red-100 p-1 text-red-600">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
        />
      </svg>
  
      <span class="text-xs font-medium"> 67.81% </span>
    </div>
  
    <div>
      <strong class="block text-sm font-medium text-gray-500"> Profit </strong>
  
      <p>
        <span class="text-2xl font-medium text-gray-900"> $240.94 </span>
  
        <span class="text-xs text-gray-500"> from $404.32 </span>
      </p>
    </div>
  </article>

  <article
    class="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white p-6"
  >
    <div class="inline-flex gap-2 self-end rounded bg-red-100 p-1 text-red-600">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
        />
      </svg>
  
      <span class="text-xs font-medium"> 67.81% </span>
    </div>
  
    <div>
      <strong class="block text-sm font-medium text-gray-500"> Profit </strong>
  
      <p>
        <span class="text-2xl font-medium text-gray-900"> $240.94 </span>
  
        <span class="text-xs text-gray-500"> from $404.32 </span>
      </p>
    </div>
  </article>

  <article
    class="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white p-6"
  >
    <div class="inline-flex gap-2 self-end rounded bg-red-100 p-1 text-red-600">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
        />
      </svg>
  
      <span class="text-xs font-medium"> 67.81% </span>
    </div>
  
    <div>
      <strong class="block text-sm font-medium text-gray-500"> Profit </strong>
  
      <p>
        <span class="text-2xl font-medium text-gray-900"> $240.94 </span>
  
        <span class="text-xs text-gray-500"> from $404.32 </span>
      </p>
    </div>
  </article>

  <article
    class="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white p-6"
  >
    <div class="inline-flex gap-2 self-end rounded bg-red-100 p-1 text-red-600">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
        />
      </svg>
  
      <span class="text-xs font-medium"> 67.81% </span>
    </div>
  
    <div>
      <strong class="block text-sm font-medium text-gray-500"> Profit </strong>
  
      <p>
        <span class="text-2xl font-medium text-gray-900"> $240.94 </span>
  
        <span class="text-xs text-gray-500"> from $404.32 </span>
      </p>
    </div>
  </article>

  <article
    class="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white p-6"
  >
    <div class="inline-flex gap-2 self-end rounded bg-red-100 p-1 text-red-600">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
        />
      </svg>
  
      <span class="text-xs font-medium"> 67.81% </span>
    </div>
  
    <div>
      <strong class="block text-sm font-medium text-gray-500"> Profit </strong>
  
      <p>
        <span class="text-2xl font-medium text-gray-900"> $240.94 </span>
  
        <span class="text-xs text-gray-500"> from $404.32 </span>
      </p>
    </div>
  </article>

  <article
    class="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white p-6"
  >
    <div class="inline-flex gap-2 self-end rounded bg-red-100 p-1 text-red-600">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
        />
      </svg>
  
      <span class="text-xs font-medium"> 67.81% </span>
    </div>
  
    <div>
      <strong class="block text-sm font-medium text-gray-500"> Profit </strong>
  
      <p>
        <span class="text-2xl font-medium text-gray-900"> $240.94 </span>
  
        <span class="text-xs text-gray-500"> from $404.32 </span>
      </p>
    </div>
  </article>

  <article
    class="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white p-6"
  >
    <div class="inline-flex gap-2 self-end rounded bg-red-100 p-1 text-red-600">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
        />
      </svg>
  
      <span class="text-xs font-medium"> 67.81% </span>
    </div>
  
    <div>
      <strong class="block text-sm font-medium text-gray-500"> Profit </strong>
  
      <p>
        <span class="text-2xl font-medium text-gray-900"> $240.94 </span>
  
        <span class="text-xs text-gray-500"> from $404.32 </span>
      </p>
    </div>
  </article>

  <article
    class="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white p-6"
  >
    <div class="inline-flex gap-2 self-end rounded bg-red-100 p-1 text-red-600">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
        />
      </svg>
  
      <span class="text-xs font-medium"> 67.81% </span>
    </div>
  
    <div>
      <strong class="block text-sm font-medium text-gray-500"> Profit </strong>
  
      <p>
        <span class="text-2xl font-medium text-gray-900"> $240.94 </span>
  
        <span class="text-xs text-gray-500"> from $404.32 </span>
      </p>
    </div>
  </article>

  </div>
  )
}

export default Dashboard