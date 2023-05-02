import React from "react";
import AddPurchase from "./AddPurchase";
import { useState, useEffect} from "react";
import axios from "axios";

function Purchase() {
  const [purchase, setPurchase] = useState([]);
  // console.log("Purchase", purchase)
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);

  //update page
  const [pageUpdate, setPageUpdate] = useState()

  const showPurchase = () => {
    setShowPurchaseModal(!showPurchaseModal);
  };

  const handleUpdatePage = () =>{
    setPageUpdate(!pageUpdate)
  }

  useEffect(() => {
    fetchPurchase();
  }, [pageUpdate]);

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
        
        <div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex justify-between ">
              <div className="mt-7 text-lg font-bold leading-6 text-gray-900 ml-2 ">
                Purchase Details
              </div>

              <div className="flex justify-end gap-4  whitespace-nowrap px-4 py-2 text-end font-large text-gray-900">
                <button
                  className="inline-block rounded border border-blue-600 bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring "
                  href="/download"
                  onClick={showPurchase}
                >
                  Add Details
                </button>
                {showPurchaseModal && <AddPurchase  handleUpdatePage={handleUpdatePage}/>}
              </div>
            </div>

            <table className="min-w-full divide-y-2 divide-gray-200 text-md bg-white">
              <thead>
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                    Product Name
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                    Quantity
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                   Purchase Date
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                    Total Amount
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
              {purchase.map((element, index) => {
                return (
                  <tr key={index}>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {element.productId}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {element.quantity}
                    </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {element.date.slice(0,10)}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
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
