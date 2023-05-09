import React, { useState } from "react";
import { FaRegPlusSquare } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Tbody from "./Tbody";

const Home = () => {
  const loadedData = useLoaderData();

  const [chocolates, setChocolates] = useState(loadedData);
  return (
    <div className="max-w-7xl w-full mx-auto">
      <div className="text-center flex justify-center">
        <h2 className="text-center text-3xl font-semibold bg-amber-600 w-1/2 rounded-2xl p-4 ">
          Chocolate Management System
        </h2>
      </div>
      <div className="my-10">
        <Link to="/addProduct">
          <button className="btn btn-outline rounded-md gap-2">
            Button
            <FaRegPlusSquare />
          </button>
        </Link>
        <div className="mt-10">
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Country/Factory</th>
                  <th>Categotry</th>
                  <th>Action</th>
                </tr>
              </thead>
              {chocolates.map((choclate) => (
                <Tbody 
                key={choclate._id}
                chocolates={chocolates}
                setChocolates={setChocolates}
                choclate={choclate}
                ></Tbody>
              ))}
              {/* foot */}
              <tfoot>
                <tr>
                  
                  <th colSpan="5" className="text-center" >Favorite Chocklate</th>
                  
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
