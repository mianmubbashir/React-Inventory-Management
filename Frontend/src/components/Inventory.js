import React from "react";
import { useState } from "react";
import AddProduct from "./AddProduct";

function Inventory() {
 const [showAddProduct, setShowAddProduct] = useState(false)

 const showProduct = () => {
    setShowAddProduct(!showAddProduct)
 }

  return (
    <div className="flex justify-center bg-slate-20 flex-col gap-6 h-fit">


<div className="">
  <div class="overflow-x-auto">
    <table class="min-w-full text-sm">
    <thead>
      <tr>
        <th
          class="whitespace-nowrap px-4 py-6 text-left font-large text-gray-900"
        >
          Overall Inventory
        </th>
      </tr>
    </thead>

    <tbody class="">
      <tr>
        <td class="whitespace-nowrap px-4 py-2 font-medium text-blue-900">Categories </td>
        <td class="whitespace-nowrap px-4 py-2 font-medium text-yellow-700">Total Products</td>
        <td class="whitespace-nowrap px-4 py-2 font-medium text-purple-700">Top Selling</td>
        <td class="whitespace-nowrap px-4 py-2 font-medium text-red-700">Low Stock</td>
      </tr>

      <tr>
        <td class="whitespace-nowrap px-4 py-2 text-gray-900">  14 </td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">868 25000</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">5 2500</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">12 2</td>
      </tr>

      <tr>
        <td class="whitespace-nowrap px-4 py-2 text-gray-400">last 7 days</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-400">last 7 days   Revenue</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-400">last 7 days   cost</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-400">ordered   not in stock</td>
      </tr>
     </tbody>
   </table>
 </div>
</div>






<div>
  <div class="py-20">
     <div className="flex justify-between ">
             <div class="mt-6 text-lg font-bold leading-6 text-gray-900 ml-3 ">
                  Orders
             </div>

                <div class="flex justify-end gap-4  whitespace-nowrap px-4 py-2 text-end font-large text-gray-900">
                <button
                  class="inline-block rounded border border-blue-600 bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring "
                  href="/download"
                  onClick={showProduct}
                >
                  Add Product
                </button>
                {showAddProduct && <AddProduct />}
               
                </div>
      </div>



          <table class="min-w-full divide-y-2 divide-gray-200 text-md bg-white">
            <thead>
              <tr>
                <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Product Name
                </th>
                <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Price
                </th>
                <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Quantity
                </th>
                <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Manufacturer
                </th>
                <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  description
                </th>
                <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Availability
                </th>
              </tr>
            </thead>

            <tbody class="divide-y divide-gray-200">
              <tr>
                <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Maggi
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">440</td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  43 Packets
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  23 Packets
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  11/12/22
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700 gap-6">
                <button
                  class="inline-block rounded border border-blue-600 bg-green-600 px-2 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring mr-2"
                  href="/download"
                >
                  update
                </button>
                <button
                  class="inline-block rounded border border-blue-600 bg-red-600 px-2 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring"
                  href="/download"
                >
                  delete
                </button>
                </td>
              </tr>

              <tr>
                <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Bru
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">430</td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  53 Packets
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  23 Packets
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  11/12/22
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  {" "}
                  in stock
                </td>
              </tr>

              <tr>
                <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Red Bull
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">240</td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  67 Packetsr
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  23 Packets
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  11/12/22
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  {" "}
                  in stock
                </td>
              </tr>

              <tr>
                <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Bourn Vita
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">244</td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  23 Packets
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  23 Packets
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  11/12/22
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  {" "}
                  in stock
                </td>
              </tr>

              <tr>
                <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Red Bull
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">559</td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  90 Packets
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  23 Packets
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  11/12/22
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  {" "}
                  in stock
                </td>
              </tr>

              <tr>
                <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Red Bull
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">700</td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  46 Packets
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  23 Packets
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  11/12/22
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  {" "}
                  in stock
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Inventory;
