import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get("http://localhost:8080/api/read")
      .then((response) => {
        return (
          setData(response.data.users), console.log("response", response.data)
        );
      })
      .catch((error) => {
        return console.log(error);
      });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/delete/${id}`);
      toast.warn("Data deleted");
      fetchData();
    } catch (error) {
      console.error("Error deleting data: ", error);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                City
              </th>
              <th scope="col" className="px-6 py-3">
                Course
              </th>
              <th scope="col" className="px-6 py-3">
                Action &nbsp;&nbsp;
                <Link to="/create">
                  {" "}
                  <button className="px-6 py-3 bg-gradient-to-r from-purple-400 to-pink-500 text-white font-semibold rounded-md shadow-md hover:from-purple-500 hover:to-pink-600 hover:shadow-lg transition duration-300">
                    Add New
                  </button>
                </Link>
                <Link to="/">
                  {" "}
                  <button className="px-6 py-3 bg-gradient-to-r from-purple-400 to-pink-500 text-white font-semibold rounded-md shadow-md hover:from-purple-500 hover:to-pink-600 hover:shadow-lg transition duration-300">
                    Home
                  </button>
                </Link>
              </th>
            </tr>
          </thead>

          {data.length > 0 ? (
            <tbody>
              {data.map((item) => (
                <tr
                  key={item._id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item._id}
                  </th>

                  <td className="px-6 py-4">{item.name}</td>
                  <td className="px-6 py-4">{item.email}</td>
                  <td className="px-6 py-4">{item.city}</td>
                  <td className="px-6 py-4">{item.course}</td>
                  <td className="px-6 py-4 ">
                    <Link to={`/update/${item._id}`}>
                      <button className="font-medium px-3 py-2 bg-green-400 text-black">
                        Update
                      </button>
                    </Link>{" "}
                    &nbsp;
                    <button
                      className="font-medium px-3 py-2 bg-red-500 text-black"
                      onClick={() => handleDelete(item._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody>
              <tr>
                <td colSpan="6">No data available</td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </>
  );
};

export default Read;
