import React from "react";
import Reports from "../components/Reports";
import { Link } from "react-router-dom";

// import Piechart from "./Piechart";


function Dashbord() {
  return (
    <div>
      <div className="px-16 py-2">select District</div>
      <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-72 ml-16 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Choose District</option>
  <option value="US">Kicukiro</option>
  <option value="CA">Gasabo</option>
  <option value="FR">Nyarugenge</option>
  <option value="DE">Bugesera</option>
</select>
<div className="px-16 py-2"> select sector</div>
<select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-72 ml-16 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Choose sector</option>
  <option value="US">Remera</option>
  <option value="CA">Kanombe</option>
  <option value="FR">Niboye</option>
  <option value="DE">Muhazi</option>
</select>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 px-8 mt-6 gap-10">
        



        <div className="border  rounded-lg">
          <div class="p-4 space-y-4 md:space-y-6 sm:px-16">
            <h1
              class="text-lg text-center font-bold leading-tight tracking-tight text-black md:text-lg dark:text-blue-500
            "
            >
              Student Presence
            </h1>
            <form class="space-y-2 md:space-y-4" action="#">
              <div>
                <input
                  type="text"
                  id="small-input"
                  placeholder="student Name"
                  class="placeholder:text-black block w-72  p-2 text-black border border-gray-300  sm:text-xs focus:ring-blue-500 focus:border-blue-500  outline-none  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              <div>
                <input
                  type="text"
                  id="small-input"
                  placeholder="school Name"
                  class="placeholder:text-black block w-72 p-2 text-black border border-gray-300   sm:text-xs focus:ring-blue-500 focus:border-blue-500 outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-black dark:text-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              <select
                id="countries"
                class="border  border-gray-300  text-sm  focus:ring-blue-500 focus:border-blue-500 block w-72  p-1 d dark:border-gray-600 dark:placeholder-gray-400 dark:text-blue-500 outline-none"
              >
                <option>Select Level of education</option>
                <option>Nursary</option>
                <option>Primary</option>
                <option>Seconndary</option>
              </select>

              <button
                type="submit"
                class=" transition ease-out md:ease-in delay-150 bg-white w-72 text-gray-400 font-medium  text-sm px-5 p-1 text-center  duration-300 "
              >
                <Link to="/classreport">View Attendance</Link>
              </button>
            </form>
          </div>
        </div>
        <div className="border  rounded-lg h-68">
          <Reports />
        </div>

      </div>
      

      {/* <div className="">
        <div className="w-12/12" >
        <table class="table-fixed my-12  mx-8">
        <thead>
          <tr>
            <th className="px-2">School Name</th>
            <th className="px-2">Present</th>
            <th className="px-2">Absent</th>
            <th className="px-2">Late</th>
            <th className="px-2">Drop</th>
            <th className="px-2">Excused</th>
            <th className="px-2 text center " colSpan={4}>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center ">kabare</td>
            <td className="text-center">60</td>
            <td className="text-center">70</td>
            <td className="text-center">40</td>
            <td className=" text-center">200</td>
            <td className=" text-center">400</td>
            <td className="">
              <button className="bg-white rounded-lg px-2 py-1 text-blue-500 ">
                Delete
              </button>
            </td>
            <td>
              <button className="py-1 bg-white rounded-lg px-4  text-blue-500 ">
                Edit
              </button>
            </td>
            <td>
              <button className="py-1 bg-white rounded-lg px-2 text-blue-500 ">
                Details
              </button>
            </td>
            <td className="">
              <button className="bg-white rounded-lg px-2 py-1 text-blue-500 ">
                Export
              </button>
            </td>
          </tr>
          <tr>
            <td className="text-center">Remera</td>
            <td className="text-center">60</td>
            <td className="text-center">70</td>
            <td className="text-center">40</td>
            <td className=" text-center">200</td>
            <td className=" text-center">400</td>
            <td className="">
              <button className="bg-white rounded-lg px-2 py-1 text-blue-500 ">
                Delete
              </button>
            </td>
            <td>
              <button className="py-1 bg-white rounded-lg px-4  text-blue-500 ">
                Edit
              </button>
            </td>
            <td>
              <button className="py-1 bg-white rounded-lg px-2 text-blue-500 ">
                Details
              </button>
            </td>
            <td className="">
              <button className="bg-white rounded-lg px-2 py-1 text-blue-500 ">
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td className="text-center">Kagugu</td>
            <td className="text-center">60</td>
            <td className="text-center">70</td>
            <td className="text-center">40</td>
            <td className=" text-center">200</td>
            <td className=" text-center">400</td>
            <td className="">
              <button className="bg-white rounded-lg px-2 py-1 text-blue-500 ">
                Delete
              </button>
            </td>
            <td>
              <button className="py-1 bg-white rounded-lg px-4  text-blue-500 ">
                Edit
              </button>
            </td>
            <td>
              <button className="py-1 bg-white rounded-lg px-2 text-blue-500 ">
                Details
              </button>
            </td>
            <td className="">
              <button className="bg-white rounded-lg px-2 py-1 text-blue-500 ">
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td className="text-center">Muhazi</td>
            <td className="text-center">60</td>
            <td className="text-center">70</td>
            <td className="text-center">40</td>
            <td className=" text-center">200</td>
            <td className=" text-center">400</td>
            <td className="">
              <button className="bg-white rounded-lg px-2 py-1 text-blue-500 ">
                Delete
              </button>
            </td>
            <td>
              <button className="py-1 bg-white rounded-lg px-4  text-blue-500 ">
                Edit
              </button>
            </td>
            <td>
              <button className="py-1 bg-white rounded-lg px-2 text-blue-500 ">
                Details
              </button>
            </td>
            <td className="">
              <button className="bg-white rounded-lg px-2 py-1 text-blue-500 ">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
        </div>
      
      </div> */}
    </div>
  );
}

export default Dashbord;
