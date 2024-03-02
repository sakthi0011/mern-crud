import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create = () => {
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
      .post("http://localhost:8080/api/create", item)
      .then((response) => {
        console.log(response.data);
        toast.success("list added successfully");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        navigate("/read");
      });
  };

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

export default Create;
