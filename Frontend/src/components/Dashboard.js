import React from "react";

function Dashboard() {
  return (
    <div className=" h-full bg-slate-200">
      <div className="grid grid-cols-1 sm:grid-cols-4 h-40 gap-2 m-2">


        <article className="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white p-6">
          <div className="inline-flex gap-2 self-end rounded bg-green-100 p-1 text-green-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
            >

            </svg>

            <span className="text-xs font-medium"> 67.81% </span>
          </div>

          <div>
            <strong className="block text-sm font-medium text-gray-500">
              {" "}
              Profit{" "}
            </strong>

            <p>
              <span className="text-2xl font-medium text-gray-900"> $404.32 </span>

              <span className="text-xs text-gray-500"> from $240.94 </span>
            </p>
          </div>
        </article>

        <article className="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white p-6 ">
          <div className="inline-flex gap-2 self-end rounded bg-red-100 p-1 text-red-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
            >
            </svg>

            <span className="text-xs font-medium"> 67.81% </span>
          </div>

          <div>
            <strong className="block text-sm font-medium text-gray-500">
              {" "}
              Profit{" "}
            </strong>

            <p>
              <span className="text-2xl font-medium text-gray-900"> $240.94 </span>

              <span className="text-xs text-gray-500"> from $404.32 </span>
            </p>
          </div>
        </article>

        <article className="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white p-6">
          <div className="inline-flex gap-2 self-end rounded bg-red-100 p-1 text-red-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
            >         
            </svg>

            <span className="text-xs font-medium"> 67.81% </span>
          </div>

          <div>
            <strong className="block text-sm font-medium text-gray-500">
              {" "}
              Profit{" "}
            </strong>

            <p>
              <span className="text-2xl font-medium text-gray-900"> $240.94 </span>

              <span className="text-xs text-gray-500"> from $404.32 </span>
            </p>
          </div>
        </article>

        <article className="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white p-6">
          <div className="inline-flex gap-2 self-end rounded bg-red-100 p-1 text-red-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
            >
            </svg>

            <span className="text-xs font-medium"> 67.81% </span>
          </div>

          <div>
            <strong className="block text-sm font-medium text-gray-500">
              {" "}
              Profit{" "}
            </strong>

            <p>
              <span className="text-2xl font-medium text-gray-900"> $240.94 </span>

              <span className="text-xs text-gray-500"> from $404.32 </span>
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Dashboard;
