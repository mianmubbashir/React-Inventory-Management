import React from "react";
import { useState } from "react";
import AddSale from "./AddSale";
import { useEffect } from "react";
import axios from "axios";

function Sales() {
  const [sale, setSale] = useState([]);
  // console.log('sale ////',sale)
  const [showAddSale, setShowAddSale] = useState(false);
//page update
  const [pageUpdate, setPageUpdate] = useState()

  const showSale = () => {
    setShowAddSale(!showAddSale);
  };

const handlePageUpdate = () =>{
  setPageUpdate(!pageUpdate)
}


  useEffect(() => {
    fetchSales();
  }, [pageUpdate]);


  const fetchSales = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/Sale/get");
      setSale(res.data);
    } catch (error) {
      console.log("SALES: ERROR", error);
    }
  };

  return (
    <div>
       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-x-auto ">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mt-5 text-lg font-bold leading-6 text-gray-900 ml-2">
              Sales detail
            </div>

            <div className="flex justify-end gap-4  whitespace-nowrap px-4 py-2 text-end font-large text-gray-900">
              <button
                className="inline-block rounded border border-blue-600 bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring "
                href="/download"
                onClick={showSale}
              >
                Add Sales Details
              </button>
              {showAddSale && <AddSale  handlePageUpdate={handlePageUpdate}/>}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y-2 divide-gray-200 text-md bg-white">
              <thead>
                <tr>
                  <th className="w-1/6  px-4 py-2 text-left font-medium text-gray-900">
                    Product Name
                  </th>
                  <th className="w-1/6  px-4 py-2 text-left font-medium text-gray-900">
                    store Name
                  </th>
                  <th className="w-1/6  px-4 py-2 text-left font-medium text-gray-900">
                    Quantity
                  </th>
                  <th className="w-1/6  px-4 py-2 text-left font-medium text-gray-900">
                    Sale Date
                  </th>
                  <th className="w-1/6  px-4 py-2 text-left font-medium text-gray-900">
                    Total Sale Amount
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {sale.map((element, index) => {
                  return (
                    <tr key={index}>
                      <td className="ww-1/6  px-4 py-2  text-gray-900">
                        {element.productId}
                      </td>
                      <td className="w-1/6 px-4 py-2 text-gray-700">
                        {element.storeId}
                      </td>
                      <td className="w-1/6  px-4 py-2 text-gray-700">
                        {element.quantity}
                      </td>
                      <td className="w-1/6  px-4 py-2 text-gray-700">
                        {element.date.slice(0, 10)}
                      </td>
                      <td className="w-1/6  px-4 py-2 text-gray-700">
                        {element.amount}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sales;
