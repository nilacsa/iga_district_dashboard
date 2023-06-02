import React from 'react'
const Classreport = () => {
  return (
    <>
        <div className='grid grid-cols-2 gap-32 px-8 rounded-lg'> 
    <div className='border rounded-lg h-72 bg-gray-300'>
      <div className='border bg-gray-300 text-black rounded-lg text-center text-lg  h-28 py-10'>Parent/Guardian Contacts</div>
       <div className=' font-medium text-sm px-10 py-4'>
       <div className='text-black'>Student names: Keza Bela</div>
       <div className='text-black'>Relationship to student: Guardian</div>
       <div className='text-black'>Phone number: 0788979411</div>
       <div className='text-black'>Parent/Guardian Email address: kalisaemmanuel1@gmail.com</div>
       <div className='text-black'>Home address: Gasabo, Kigali, Rwanda</div>
       </div>
    </div>


    
    </div>   
    <div>
              <table class="table-fixed my-28 mx-52">
  <thead>
    <tr className='text-black'>
      <th className='px-4'>Student Names</th>
      <th className='px-4'>Date</th>
      <th className='px-4'>Presence status</th>
      
    </tr>
  </thead>
  <tbody>



    <tr>
      <td className='px-2'>Kamaliza Aisha</td>
      <td className='text-center'>25/04/2023</td>
      <td className='text-center'>Permision</td>

    </tr>
    
  </tbody>
</table>
    </div>
    
    </>
  )
}

export default Classreport