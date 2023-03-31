import React from "react";
import AddPurchase from "./AddPurchase";
import { useState, useEffect } from "react";
import axios from "axios";

function Purchase() {
  const [showAddPurchase, setShowAddPurchase] = useState(false); //purchase modal
  const [purchase, setPurchase] = useState([]);
  // console.log("Purchase", purchase)

  const showPurchase = () => {
    setShowAddPurchase(!showAddPurchase);
  };


  useEffect(() => {
    fetchPurchase();
  }, []);

  const fetchPurchase = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/Purchase/get");
      setPurchase(res.data);
    } catch (error) {
      console.log("Purchase: ERROR", error);
    }
  };





  return (
    <div>
      <div className="flex justify-center bg-slate-20 flex-col gap-6 h-fit">
        <div className="">
          <div class="overflow-x-auto">
            <table class="min-w-full text-sm mt-10">
              <thead>
                <tr>
                  <th class="whitespace-nowrap px-4 py-6 text-left mt-7 text-lg font-bold leading-6 text-gray-900 ml-2 ">
                    Overall Inventory
                  </th>
                </tr>
              </thead>

              <tbody class="">
                <tr>
                  <td class="whitespace-nowrap px-4 py-2 font-medium text-blue-900">
                    Total Order{" "}
                  </td>
                  <td class="whitespace-nowrap px-4 py-2 font-medium text-yellow-700">
                    Total Products
                  </td>
                  <td class="whitespace-nowrap px-4 py-2 font-medium text-purple-700">
                    Total Return
                  </td>
                  <td class="whitespace-nowrap px-4 py-2 font-medium text-red-700">
                    On the way
                  </td>
                </tr>

                <tr>
                  <td class="whitespace-nowrap px-4 py-2 text-gray-900">
                    {" "}
                    14{" "}
                  </td>
                  <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                    868 25000
                  </td>
                  <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                    5 2500
                  </td>
                  <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                    12 2
                  </td>
                </tr>

                <tr>
                  <td class="whitespace-nowrap px-4 py-2 text-gray-400">
                    last 7 days
                  </td>
                  <td class="whitespace-nowrap px-4 py-2 text-gray-400">
                    last 7 days Revenue
                  </td>
                  <td class="whitespace-nowrap px-4 py-2 text-gray-400">
                    last 7 days cost
                  </td>
                  <td class="whitespace-nowrap px-4 py-2 text-gray-400">
                    ordered cost
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <div class="py-20">
            <div className="flex justify-between ">
              <div class="mt-7 text-lg font-bold leading-6 text-gray-900 ml-2 ">
                Purchase Details
              </div>

              <div class="flex justify-end gap-4  whitespace-nowrap px-4 py-2 text-end font-large text-gray-900">
                <button
                  class="inline-block rounded border border-blue-600 bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring "
                  href="/download"
                  onClick={showPurchase}
                >
                  Add Details
                </button>
                {showAddPurchase && <AddPurchase />}
              </div>
            </div>

            <table class="min-w-full divide-y-2 divide-gray-200 text-md bg-white">
              <thead>
                <tr>
                  <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                    Product Name
                  </th>
                  <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                    Quantity
                  </th>
                  <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                   Purchase Date
                  </th>
                  <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                    Total Amount
                  </th>
                </tr>
              </thead>

              <tbody class="divide-y divide-gray-200">
              {purchase.map((element, index) => {
                return (
                  <tr >
                  <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {element.productId}
                  </td>
                  <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                    {element.quantity}
                    </td>
                  <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  {element.date.slice(0,10)}
                  </td>
                  <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                    {element.amount}
                  </td>
                </tr>
                )})}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Purchase;
