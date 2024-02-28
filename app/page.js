"use client";
import { useState } from "react";
import { GoCheckCircleFill } from "react-icons/go";
import { HiOutlineCheck } from "react-icons/hi2";

export default function Home() {
  const [data, setdata] = useState({
    name: "",
    website: "",
    address: "",
    vatNumber: "",
    creditLimit: "",
    creditDate: "",
    currency: "",
    service: "",
    vatRate: "",
  });

  // for Handling State  data
  const handleInput = (event) => {
    setdata({ ...data, [event.target.name]: event.target.value });
  };

  const save =
    Boolean(data.name) &&
    Boolean(data.website) &&
    Boolean(data.address) &&
    Boolean(data.vatNumber) &&
    Boolean(data.creditDate) &&
    Boolean(data.creditLimit) &&
    Boolean(data.currency === "USD") &&
    Boolean(data.vatRate === "15%") &&
    Boolean(data.service === "ab");

  return (
    <div className="flex bg-s ">
      <div className=" text-white font-[500]  w-[20%]">
        <div className="h-[150px] flex justify-center bg-p/60 gap-4  items-center border-b-green-600 border-b w-full mr-10">
          <h4 className=" ">1.Basic Information</h4>
          {save ? (
            <div className="bg-green-600 rounded-full">
              <GoCheckCircleFill className="text-[20px]" />
            </div>
          ) : (
            ""
          )}
        </div>

        {/* 2 */}
        <div className="h-[150px]  flex justify-center bg-gray-600 opacity-40 items-center text-gray-100 border-b w-full mr-10">
          <h4 className=" ">2.Contact Infromation</h4>
        </div>
        {/* 3  */}
        <div className="h-[150px]  flex justify-center bg-gray-600 opacity-40 items-center text-gray-100 border-b w-full mr-10">
          <h4 className=" ">3. Customer Bank Details</h4>
        </div>
        {/* 4 */}
        <div className="h-[150px]  flex justify-center bg-gray-600 opacity-40 items-center text-gray-100 border-b w-full mr-10">
          <h4 className=" ">4. Invoice Address </h4>
        </div>
        {/* 5 */}
        <div className="h-[150px]  flex justify-center bg-gray-600 opacity-40 items-center text-gray-100 border-b w-full mr-10">
          <h4 className=" ">5. Delivery Address </h4>
        </div>
      </div>
      {/* 2 main */}
      <div className=" bg-gray-300 w-[80%]">
        <form className=" w-[92%] mx-auto mt-4 space-y-2">
          {/* next Button  */}
          <div className="flex justify-end text-[15px] font-[500] text-blue-900/70">
            <button>Next</button>
          </div>
          {/* Company Div */}
          <div>
            {/* heading  */}
            <div className="w-full border-b-blue-950 border-b-[2px]">
              <h3 className="text-gray-900 font-[700] text-[18px] mb-1 w-full">
                Company
              </h3>
            </div>

            <div className="mt-4 space-y-2">
              {/* name */}
              <div>
                <label
                  htmlFor="Company Name"
                  className="block text-[14px] font-medium text-blue-950"
                >
                  Company Name
                </label>

                <input
                  type="text"
                  className="mt-1 w-full pl-4 rounded-md focus:outline-green-600 focus:outline border-gray-200 shadow-sm py-2 "
                  name="name"
                  onChange={handleInput}
                  value={data.name}
                />
              </div>

              {/* website */}
              <div>
                <label
                  htmlFor="website"
                  className="block text-[14px] font-medium text-blue-950"
                >
                  Website
                </label>

                <input
                  type="text"
                  className="mt-1 w-full rounded-md  pl-4 focus:outline-green-600 focus:outline border-gray-200 shadow-sm py-2 "
                  name="website"
                  value={data.website}
                  onChange={handleInput}
                />
              </div>

              {/* address */}
              <div>
                <label
                  htmlFor="website"
                  className="block text-[14px] font-medium text-blue-950"
                >
                  Address
                </label>

                <input
                  type="text"
                  id="UserEmail"
                  className="mt-1 w-full rounded-md  pl-4 focus:outline-green-600 focus:outline border-gray-200 shadow-sm py-2 "
                  name="address"
                  value={data.address}
                  onChange={handleInput}
                />
              </div>
            </div>
          </div>

          {/* Vat  */}
          <div className="mt-4">
            {/* heading  */}
            <div className="w-full border-b-blue-950 border-b-[2px]">
              <h3 className="text-gray-900 font-[700] text-[18px] mb-1 w-full">
                VAT
              </h3>
            </div>
            {/* vat contant */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              {/* vat number  */}
              <div>
                <label
                  htmlFor="vat number "
                  className="block text-[14px] font-medium text-blue-950"
                >
                  VAT Number
                </label>

                <input
                  type="text"
                  className="mt-1 w-full pl-4 rounded-md focus:outline-green-600 focus:outline border-gray-200 shadow-sm py-2 "
                  name="vatNumber"
                  onChange={handleInput}
                  value={data.vatNumber}
                />
              </div>

              {/* Vat Rate  */}
              <div>
                <label
                  htmlFor="VatrRate"
                  className="block text-[14px] font-medium text-blue-950"
                >
                  VAT Rate
                </label>

                <select
                  type="text"
                  className="mt-1 w-full pl-4 rounded-md focus:outline-green-600 focus:outline border-gray-200 shadow-sm py-2 "
                  name="vatRate"
                  onChange={handleInput}
                >
                  <option value="1">Select Applicable VateRate</option>
                  <option value="15%">15%</option>
                </select>
              </div>
            </div>
            <div></div>
          </div>

          {/* Credit  */}
          <div className="mt-4">
            {/* heading  */}
            <div className="w-full border-b-blue-950 border-b-[2px]">
              <h3 className="text-gray-900 font-[700] text-[18px] mb-1 w-full">
                Credit
              </h3>
            </div>
            {/* credit contant */}
            <div className="grid grid-cols-3 gap-4 mt-4">
              {/* credit limit  */}
              <div>
                <label
                  htmlFor=" creditLimit  "
                  className="block text-[14px] font-medium text-blue-950"
                >
                  Credit Limit
                </label>

                <input
                  type="text"
                  className="mt-1 w-full pl-4 rounded-md focus:outline-green-600 focus:outline border-gray-200 shadow-sm py-2 "
                  name="creditLimit"
                  onChange={handleInput}
                  value={data.creditLimit}
                />
              </div>

              {/* credit days  */}
              <div>
                <label
                  htmlFor="creditDays"
                  className="block text-[14px] font-medium text-blue-950"
                >
                  Number Of Credit Dates
                </label>

                <input
                  type="text"
                  className="mt-1 w-full pl-4 rounded-md focus:outline-green-600 focus:outline border-gray-200 shadow-sm py-2 "
                  name="creditDate"
                  onChange={handleInput}
                  value={data.creditDate}
                />
              </div>
              {/* Currency  */}
              <div>
                <label
                  htmlFor="Currency"
                  className="block text-[14px] font-medium text-blue-950"
                >
                  Currency
                </label>

                <select
                  type="text"
                  className="mt-1 w-full pl-4 rounded-md focus:outline-green-600 focus:outline border-gray-200 shadow-sm py-2 "
                  name="currency"
                  onChange={handleInput}
                >
                  <option value="none">SelectCurrency</option>
                  <option value="USD">USD</option>
                </select>
              </div>
            </div>
            <div></div>
          </div>

          {/* Services  */}

          <div>
            {/* heading  */}
            <div className="w-full border-b-blue-950 border-b-[2px]">
              <h3 className="text-gray-900 font-[700] text-[18px] mb-1 w-full">
                Service
              </h3>
            </div>

            <div className="mt-4 space-y-2">
              {/* Main Service*/}
              <div>
                <label
                  htmlFor="service"
                  className="block text-[14px] font-medium text-blue-950"
                >
                  Main Service
                </label>

                <select
                  type="text"
                  className="mt-1 w-full pl-4 rounded-md focus:outline-green-600 focus:outline border-gray-200 shadow-sm py-2 "
                  name="service"
                  onChange={handleInput}
                >
                  <option value="">Select a Service</option>
                  <option value="ab">Accounting and Bookkeeping </option>
                </select>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

//name
//website
//address
//vatNumber
//vatRate
//creditDays
// creditLimit
// service
// currency

// export default function Home() {
//   const [data, setdata] = useState({
//     name: "",
//     website: "",
//     address: "",
//     vatNumber: "",
//     creditLimit: "",
//     creditDate: "",
//   });

//   // for Handling State  data
//   const handleInput = (event) => {
//     setdata({ ...data, [event.target.name]: event.target.value });
//   };

//   const save =
//     Boolean(data.name) &&
//     Boolean(data.website) &&
//     Boolean(data.address) &&
//     Boolean(data.vatNumber) &&
//     Boolean(data.creditDate) &&
//     Boolean(data.creditLimit);

//   // for submiting data to state
//   const submite_data = (event) => {
//     event.preventDefault();
//   };

//   return (
//     <div className="flex bg-s">
//       <div className=" text-white font-[500] w-[20%]">
//         <div className="h-[150px] flex justify-center bg-p/60 gap-4  items-center border-b-green-600 border-b w-full mr-10">
//           <h4 className=" ">1.Basic Information</h4>
//           {save ? (
//             <div className="bg-green-600 rounded-full">
//               <GoCheckCircleFill className="text-[20px]" />
//             </div>
//           ) : (
//             ""
//           )}
//         </div>

//         {/* 2 */}
//         <div className="h-[150px]  flex justify-center bg-gray-600 opacity-40 items-center text-gray-100 border-b w-full mr-10">
//           <h4 className=" ">2.Contact Infromation</h4>
//         </div>
//         {/* 3  */}
//         <div className="h-[150px]  flex justify-center bg-gray-600 opacity-40 items-center text-gray-100 border-b w-full mr-10">
//           <h4 className=" ">3. Customer Bank Details</h4>
//         </div>
//         {/* 4 */}
//         <div className="h-[150px]  flex justify-center bg-gray-600 opacity-40 items-center text-gray-100 border-b w-full mr-10">
//           <h4 className=" ">4. Invoice Address </h4>
//         </div>
//         {/* 5 */}
//         <div className="h-[150px]  flex justify-center bg-gray-600 opacity-40 items-center text-gray-100 border-b w-full mr-10">
//           <h4 className=" ">5. Delivery Address </h4>
//         </div>
//       </div>
//       {/* 2 main */}
//       <div className=" bg-gray-300 w-[80%]">
//         <form className=" w-[92%] mx-auto mt-4 space-y-2">
//           {/* next Button  */}
//           <div className="flex justify-end text-[15px] font-[500] text-blue-900/70">
//             <button>Next</button>
//           </div>
//           {/* Company Div */}
//           <div>
//             {/* heading  */}
//             <div className="w-full border-b-blue-950 border-b-[2px]">
//               <h3 className="text-gray-900 font-[700] text-[18px] mb-1 w-full">
//                 Company
//               </h3>
//             </div>

//             <div className="mt-4 space-y-2">
//               {/* name */}
//               <div>
//                 <label
//                   htmlFor="Company Name"
//                   className="block text-[14px] font-medium text-blue-950"
//                 >
//                   Company Name
//                 </label>

//                 <input
//                   type="text"
//                   className="mt-1 w-full pl-4 rounded-md focus:outline-green-600 focus:outline border-gray-200 shadow-sm py-2 "
//                   name="name"
//                   onChange={handleInput}
//                   value={data.name}
//                 />
//               </div>

//               {/* website */}
//               <div>
//                 <label
//                   htmlFor="website"
//                   className="block text-[14px] font-medium text-blue-950"
//                 >
//                   Website
//                 </label>

//                 <input
//                   type="text"
//                   className="mt-1 w-full rounded-md  pl-4 focus:outline-green-600 focus:outline border-gray-200 shadow-sm py-2 "
//                   name="website"
//                   value={data.website}
//                   onChange={handleInput}
//                 />
//               </div>

//               {/* address */}
//               <div>
//                 <label
//                   htmlFor="website"
//                   className="block text-[14px] font-medium text-blue-950"
//                 >
//                   Address
//                 </label>

//                 <input
//                   type="text"
//                   id="UserEmail"
//                   className="mt-1 w-full rounded-md  pl-4 focus:outline-green-600 focus:outline border-gray-200 shadow-sm py-2 "
//                   name="address"
//                   value={data.address}
//                   onChange={handleInput}
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Vat  */}
//           <div className="mt-4">
//             {/* heading  */}
//             <div className="w-full border-b-blue-950 border-b-[2px]">
//               <h3 className="text-gray-900 font-[700] text-[18px] mb-1 w-full">
//                 VAT
//               </h3>
//             </div>
//             {/* vat contant */}
//             <div className="grid grid-cols-2 gap-4 mt-4">
//               {/* vat number  */}
//               <div>
//                 <label
//                   htmlFor="vat number "
//                   className="block text-[14px] font-medium text-blue-950"
//                 >
//                   VAT Number
//                 </label>

//                 <input
//                   type="text"
//                   className="mt-1 w-full pl-4 rounded-md focus:outline-green-600 focus:outline border-gray-200 shadow-sm py-2 "
//                   name="vatNumber"
//                   onChange={handleInput}
//                   value={data.vatNumber}
//                 />
//               </div>

//               {/* Vat Rate  */}
//               <div>
//                 <label
//                   htmlFor="VatrRate"
//                   className="block text-[14px] font-medium text-blue-950"
//                 >
//                   VAT Rate
//                 </label>

//                 <input
//                   type="text"
//                   className="mt-1 w-full pl-4 rounded-md focus:outline-green-600 focus:outline border-gray-200 shadow-sm py-2 "
//                   name="name"
//                 />
//               </div>
//             </div>
//             <div></div>
//           </div>

//           {/* Credit  */}
//           <div className="mt-4">
//             {/* heading  */}
//             <div className="w-full border-b-blue-950 border-b-[2px]">
//               <h3 className="text-gray-900 font-[700] text-[18px] mb-1 w-full">
//                 Credit
//               </h3>
//             </div>
//             {/* credit contant */}
//             <div className="grid grid-cols-3 gap-4 mt-4">
//               {/* credit limit  */}
//               <div>
//                 <label
//                   htmlFor=" creditLimit  "
//                   className="block text-[14px] font-medium text-blue-950"
//                 >
//                   Credit Limit
//                 </label>

//                 <input
//                   type="text"
//                   className="mt-1 w-full pl-4 rounded-md focus:outline-green-600 focus:outline border-gray-200 shadow-sm py-2 "
//                   name="creditLimit"
//                   onChange={handleInput}
//                   value={data.creditLimit}
//                 />
//               </div>

//               {/* credit days  */}
//               <div>
//                 <label
//                   htmlFor="creditDays"
//                   className="block text-[14px] font-medium text-blue-950"
//                 >
//                   Number Of Credit Dates
//                 </label>

//                 <input
//                   type="text"
//                   className="mt-1 w-full pl-4 rounded-md focus:outline-green-600 focus:outline border-gray-200 shadow-sm py-2 "
//                   name="creditDate"
//                   onChange={handleInput}
//                   value={data.creditDate}
//                 />
//               </div>
//               {/* Currency  */}
//               <div>
//                 <label
//                   htmlFor="Currency"
//                   className="block text-[14px] font-medium text-blue-950"
//                 >
//                   Currency
//                 </label>

//                 <input
//                   type="text"
//                   className="mt-1 w-full pl-4 rounded-md focus:outline-green-600 focus:outline border-gray-200 shadow-sm py-2 "
//                   name="name"
//                 />
//               </div>
//             </div>
//             <div></div>
//           </div>

//           {/* Services  */}

//           <div>
//             {/* heading  */}
//             <div className="w-full border-b-blue-950 border-b-[2px]">
//               <h3 className="text-gray-900 font-[700] text-[18px] mb-1 w-full">
//                 Service
//               </h3>
//             </div>

//             <div className="mt-4 space-y-2">
//               {/* Main Service*/}
//               <div>
//                 <label
//                   htmlFor="service"
//                   className="block text-[14px] font-medium text-blue-950"
//                 >
//                   Main Service
//                 </label>

//                 <input
//                   type="text"
//                   className="mt-1 w-full pl-4 rounded-md focus:outline-green-600 focus:outline border-gray-200 shadow-sm py-2 "
//                   name="service"
//                 />
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
