import React from "react";
import { useState, useEffect } from "react";
import AddProduct from "./AddProduct";
import UpdateProduct from "./updateProduct";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Inventory() {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showUpdateProduct, setShowUpdateProduct] = useState(false);
  const [product, setProduct] = useState([]);
  // console.log("GET PRODUCT////////", product)

  const showProduct = () => {
    setShowAddProduct(!showAddProduct);
  };

  const updateProductModal = () => {
    setShowUpdateProduct(!showUpdateProduct);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // const notifyWarn = () => toast.warning("Are You Sure", { position: toast.POSITION.TOP_CENTER });

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/Product/get");
      setProduct(res.data);
    } catch (error) {
      console.log("PRODUCTS: ERROR", error);
      // setErrors(error.response.data);
    }
  };

  //Delete Product
  const deleteProduct = async (id) => {
    const x = window.confirm("Are you sure?");
    console.log(x);
    // notifyWarn()
    if (!x) return null;
    try {
      const res = await axios.delete(
        `http://localhost:4000/api/Product/delete/${id}`
      );

      fetchProducts();
      console.log("Products****:", res);
    } catch (error) {
      console.log("Products****: ERROR", error);
      alert(error.response.data);
    }
  };

  return (
    <div className="flex justify-center bg-slate-20 flex-col gap-6 h-fit">
      <div className="">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr>
                <th className="whitespace-nowrap px-4 py-6 text-left font-large text-gray-900">
                  Overall Inventory
                </th>
              </tr>
            </thead>

            <tbody className="">
              <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-blue-900">
                  Categories{" "}
                </td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-yellow-700">
                  Total Products
                </td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-purple-700">
                  Top Selling
                </td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-red-700">
                  Low Stock
                </td>
              </tr>

              <tr>
                <td className="whitespace-nowrap px-4 py-2 text-gray-900"> 14 </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
               25000
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                 35000
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                120</td>
              </tr>

              <tr>
                <td className="whitespace-nowrap px-4 py-2 text-gray-400">
                  last 7 days
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-400">
                  Revenue
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-400">
                 cost
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-400">
                  ordered not
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <div className="py-20">
          <div className="flex justify-between ">
            <div className="mt-6 text-lg font-bold leading-6 text-gray-900 ml-3 ">
              Orders
            </div>

            <div className="flex justify-end gap-4  whitespace-nowrap px-4 py-2 text-end font-large text-gray-900">
              <button
                className="inline-block rounded border border-blue-600 bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring "
                href="/download"
                onClick={showProduct}
              >
                Add Product
              </button>
              {showAddProduct && <AddProduct />}
            </div>
          </div>

          <table className="min-w-full divide-y-2 divide-gray-200 text-md bg-white">
            <thead>
              <tr>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Product Name
                </th>
                {/* <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Price
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Quantity
                </th> */}
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Manufacturer
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  description
                </th>
                {/* <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Availability
                </th> */}
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {product.map((element, index) => {
                return (
                  <tr key={index}>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-700">
                      {element.name}
                    </td>
                    {/* <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {element.price}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {element.quantity}
                    </td> */}
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {element.manufacturer}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {element.description}
                    </td>
                    {/* <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                 {element.createdAt}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                 {element.updatedAt}
                </td>  */}

                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      <button
                        className="inline-block rounded border border-blue-600 bg-green-600 px-2 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring mr-2"
                        href="/download"
                        onClick={updateProductModal}
                      >
                        update
                      </button>
                      {showUpdateProduct && <UpdateProduct element={element} />}
                      <button
                        className="inline-block rounded border border-blue-600 bg-red-600 px-2 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring"
                        href="/download"
                        onClick={() => deleteProduct(element._id)}
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Inventory;
