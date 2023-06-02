import React from "react";
import { Link } from "react-router-dom";
import {useState} from "react";

const Sectorreport = () => {
  const [date,setDate]=useState();
  return (
    <>



<select id="countries" class="ml-16  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Choose Sector</option>
  <option value="Muhazi">Muhazi</option>
  <option value="Kabare">Kabare</option>
  <option value="Remera">Remera</option>
  <option value="Kanombe">Kanombe</option>

</select>

      {/* <div className="grid justify-items-end px-8 ">
        <button
          type="button"
          class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          <svg
            aria-hidden="true"
            class="w-4 h-4 mr-2 fill-current"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z"
              clip-rule="evenodd"
            ></path>
          </svg>
          Export
        </button>
      </div> */}


      <div>

        
<div class="relative px-16 py-4 overflow-x-auto shadow-md sm:rounded-lg bg-gray-300 mt-8 ml-16">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-blue-900 font-bold uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Sector name
                </th>
                <th scope="col" class="px-6 py-3">
                    Present
                </th>
                <th scope="col" class="px-6 py-3">
                    Absent
                </th>
                <th scope="col" class="px-6 py-3">
                    Late
                </th>
                <th scope="col" class="px-6 py-3">
                    Leave
                </th>
                <th scope="col" class="px-6 py-3">
                    Permision
                </th>

            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Muhazi
                </td>
                <td class="px-6 py-4">
                    350
                </td>
                <td class="px-6 py-4">
                    70
                </td>
                <td class="px-6 py-4">
                    53
                </td>
                <td class="px-6 py-4">
                    65
                </td>
                <td class="px-6 py-4">
                    47
                </td>


            </tr>

            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Remera
                </th>
                <td class="px-6 py-4">
                    550
                </td>
                <td class="px-6 py-4">
                    87
                </td>
                <td class="px-6 py-4">
                    57
                </td>
                <td class="px-6 py-4">
                    79
                </td>
                <td class="px-6 py-4">
                    107
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Kabare
                </th>
                <td class="px-6 py-4">
                    800
                </td>
                <td class="px-6 py-4">
                    117
                </td>
                <td class="px-6 py-4">
                    97
                </td>
                <td class="px-6 py-4">
                    27
                </td>
                <td class="px-6 py-4">
                    15
                </td>

            </tr>
            
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Kanombe
                </th>
                <td class="px-6 py-4">
                    800
                </td>
                <td class="px-6 py-4">
                    117
                </td>
                <td class="px-6 py-4">
                    97
                </td>
                <td class="px-6 py-4">
                    27
                </td>
                <td class="px-6 py-4">
                    15
                </td>

            </tr>
            

        </tbody>
    </table>
</div>


      </div>
    </>
  );
};

export default Sectorreport;
