import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const initialValue = {
    name: "",
    email: "",
    city: "",
    course: "",
  };
  const [item, setItem] = useState(initialValue);

  //handlechange
  const handleChange = (event) => {
    const { name, value } = event.target;
    setItem({ ...item, [name]: value });
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:8080/api/update/${id}`, item)
      .then(() => {
        toast.success("list updated successfully");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setItem(initialValue);
        navigate("/read");
      });
  };

  //get id
  const { id } = useParams();

  

  const getusersbyId = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/api/update/${id}`);
      console.log("data", res.data);
      setItem(res.data.user);
    } catch (error) {
      console.error(error);
     
    }
  };

  useEffect(() => {
    getusersbyId();
  }, []);

  return (
    <>
      <form
        class="space-y-5 ml-[550px] mt-28"
        method="POST"
        onSubmit={handleSubmit}
      >
        <h1 className="font-semibold text-xl text-white">Add Student</h1>
        <div>
          <input
            id="name"
            type="text"
            class="block w-96 py-3 px-3 mt-2
          text-gray-800 appearance-none
          border-2 border-gray-100
          focus:text-gray-500 focus:outline-none focus:border-gray-200 rounded-md"
            placeholder="Name"
            name="name"
            onChange={handleChange}
            value={item.name}
          />
        </div>

        <div class="relative w-full">
          <input
            type="email"
            id="email"
            class="block w-96 py-3 px-3 mt-2 mb-4
          text-gray-800 appearance-none
          border-2 border-gray-100
          focus:text-gray-500 focus:outline-none focus:border-gray-200 rounded-md"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={item.email}
          />
        </div>

        {/* city */}
        <div class="relative w-full">
          <input
            type="text"
            id="city"
            class="block w-96 py-3 px-3 mt-2 mb-4
          text-gray-800 appearance-none
          border-2 border-gray-100
          focus:text-gray-500 focus:outline-none focus:border-gray-200 rounded-md"
            placeholder="City"
            name="city"
            onChange={handleChange}
            value={item.city}
          />
        </div>

        {/* Course */}
        <div class="relative w-full">
          <input
            type="text"
            id="course"
            class="block w-96 py-3 px-3 mt-2 mb-4
          text-gray-800 appearance-none
          border-2 border-gray-100
          focus:text-gray-500 focus:outline-none focus:border-gray-200 rounded-md"
            placeholder="Course"
            name="course"
            onChange={handleChange}
            value={item.course}
          />
        </div>
        <button
          type="submit"
          class="w-96 py-3 mt-10 bg-[#063970] rounded-md
      font-medium text-white uppercase
      focus:outline-none hover:shadow-none"
        >
          save it
        </button>
      </form>
    </>
  );
};

export default Update;
