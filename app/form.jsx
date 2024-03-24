"use client";
import { useState } from "react";

const MyForm = () => {
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    mob_num: "",
    fname: "",
    mname: "",
    lname: "",
    dob: "",
    gender: "",
    home_address1: "",
    home_address2: "",
    home_district: "",
    home_state: "",
    home_pin_code: "",
    office_address1: "",
    office_address2: "",
    office_district: "",
    office_state: "",
    office_pin_code: "",
    company_id: "",
    company_name: "",
    email: "",
    onboarding_date: "", // This sets the default value to today's date
    pan: "",
    ifsc: "",
    acc_num: "",
    beneficiary_name: "",
    fos_or_dsa: "",
    contract_or_commission: "",
    branch_id: "999",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Destructure the form state
    const {
      mob_num,
      fname,
      mname,
      lname,
      dob,
      gender,
      home_address1,
      home_address2,
      home_district,
      home_state,
      home_pin_code,
      office_address1,
      office_address2,
      office_district,
      office_state,
      office_pin_code,
      email,
      onboarding_date,
      pan,
      ifsc,
      acc_num,
      beneficiary_name,
      fos_or_dsa,
      contract_or_commission,
    } = form;

    // Construct the SQL insert query
    const sqlQuery = `INSERT INTO agents_prod (
      agent_id,
      mob_num,
      fname,
      mname,
      lname,
      dob,
      gender,
      home_address1,
      home_address2,
      home_district,
      home_state,
      home_pin_code,
      office_address1,
      office_address2,
      office_district,
      office_state,
      office_pin_code,
      email,
      onboarding_date,
      pan,
      ifsc,
      acc_num,
      beneficiary_name,
      fos_or_dsa,
      contract_or_commission
    ) values(
      gen_random_uuid(),
      '${mob_num}',
      '${fname.replace("'", "''")}',
      '${mname.replace("'", "''")}',
      '${lname.replace("'", "''")}',
      '${dob}',
      '${gender}',
      '${home_address1.replace("'", "''")}',
      '${home_address2.replace("'", "''")}',
      '${home_district.replace("'", "''")}',
      '${home_state.replace("'", "''")}',
      ${home_pin_code},
      '${office_address1.replace("'", "''")}',
      '${office_address2.replace("'", "''")}',
      '${office_district.replace("'", "''")}',
      '${office_state.replace("'", "''")}',
      ${office_pin_code},
      '${email.replace("'", "''")}',
      '${onboarding_date}',
      '${pan}',
      '${ifsc}',
      '${acc_num}',
      '${beneficiary_name.replace("'", "''")}',
      '${fos_or_dsa}',
      '${contract_or_commission}'
    );`;

    // Copy the SQL query to the clipboard
    navigator.clipboard
      .writeText(sqlQuery)
      .then(() => {
        setMessage("Query Copied Successfully");
        console.log("SQL query copied to clipboard.");
      })
      .catch((err) => {
        setMessage("Error occured");
        console.error("Failed to copy SQL query to clipboard: ", err);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="m-auto max-w-xl space-y-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-indigo-500">
          {" "}
          Personal Details{" "}
        </h3>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label
            htmlFor="mob_num"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Mobile Number
          </label>
          <input
            type="text"
            name="mob_num"
            id="mob_num"
            required
            className="mt-1 block h-8 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:text-gray-900"
            value={form.mob_num}
            onChange={handleChange}
            pattern="\d{10}"
            title="Mobile number must be 10 digits"
          />
        </div>
        <div>
          <label
            htmlFor="fname"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            First Name
          </label>
          <input
            type="text"
            name="fname"
            id="fname"
            required
            className="mt-1 block h-8 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:text-gray-900"
            value={form.fname}
            onChange={handleChange}
          />
        </div>

        <div>
          <label
            htmlFor="mname"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Middle Name
          </label>
          <input
            type="text"
            name="mname"
            id="mname"
            className="mt-1 block h-8 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:text-gray-900"
            value={form.mname}
            onChange={handleChange}
          />
        </div>

        <div>
          <label
            htmlFor="lname"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Last Name
          </label>
          <input
            type="text"
            name="lname"
            id="lname"
            required
            className="mt-1 block h-8 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:text-gray-900"
            value={form.lname}
            onChange={handleChange}
          />
        </div>

        <div>
          <label
            htmlFor="dob"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Date of Birth
          </label>
          <input
            type="date"
            name="dob"
            id="dob"
            required
            className="mt-1 block h-8 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:text-gray-900"
            value={form.dob}
            onChange={handleChange}
          />
        </div>

        <div>
          <label
            htmlFor="gender"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Gender
          </label>
          <select
            name="gender"
            id="gender"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:text-gray-900"
            value={form.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="mt-1 block h-8 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:text-gray-900"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label
            htmlFor="pan"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            PAN
          </label>
          <input
            type="text"
            name="pan"
            id="pan"
            required
            maxLength="10"
            minLength="10"
            className="mt-1 block h-8 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:text-gray-900"
            value={form.pan}
            onChange={handleChange}
            pattern="[A-Za-z]{5}\d{4}[A-Za-z]{1}"
            title="PAN must be 10 characters long, starting with 5 letters, followed by 4 digits, and ending with a letter"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-indigo-500">
          {" "}
          House Address{" "}
        </h3>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Home Address Line 1 */}
        <div>
          <label
            htmlFor="home_address1"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Home Address 1
          </label>
          <input
            type="text"
            name="home_address1"
            id="home_address1"
            required
            className="mt-1 block h-8 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:text-gray-900"
            value={form.home_address1}
            onChange={handleChange}
          />
        </div>

        {/* Home Address Line 2 */}
        <div>
          <label
            htmlFor="home_address2"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Home Address 2
          </label>
          <input
            type="text"
            name="home_address2"
            id="home_address2"
            className="mt-1 block h-8 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:text-gray-900"
            value={form.home_address2}
            onChange={handleChange}
          />
        </div>

        {/* Home District */}
        <div>
          <label
            htmlFor="home_district"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Home District
          </label>
          <input
            type="text"
            name="home_district"
            id="home_district"
            required
            className="mt-1 block h-8 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:text-gray-900"
            value={form.home_district}
            onChange={handleChange}
          />
        </div>

        {/* Home State */}
        <div>
          <label
            htmlFor="home_state"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Home State
          </label>
          <input
            type="text"
            name="home_state"
            id="home_state"
            required
            className="mt-1 block h-8 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:text-gray-900"
            value={form.home_state}
            onChange={handleChange}
          />
        </div>

        {/* Home Pin Code */}
        <div>
          <label
            htmlFor="home_pin_code"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Home Pin Code
          </label>
          <input
            type="text"
            name="home_pin_code"
            id="home_pin_code"
            required
            pattern="\d{6}"
            title="Pin code must be 6 digits"
            className="mt-1 block h-8 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:text-gray-900"
            value={form.home_pin_code}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-indigo-500">
          {" "}
          Office Address{" "}
        </h3>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Office Address Line 1 */}
        <div>
          <label
            htmlFor="office_address1"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Office Address 1
          </label>
          <input
            type="text"
            name="office_address1"
            id="office_address1"
            required
            className="mt-1 block h-8 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:text-gray-900"
            value={form.office_address1}
            onChange={handleChange}
          />
        </div>

        {/* Office Address Line 2 */}
        <div>
          <label
            htmlFor="office_address2"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Office Address 2
          </label>
          <input
            type="text"
            name="office_address2"
            id="office_address2"
            className="mt-1 block h-8 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:text-gray-900"
            value={form.office_address2}
            onChange={handleChange}
          />
        </div>

        {/* Office District */}
        <div>
          <label
            htmlFor="office_district"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Office District
          </label>
          <input
            type="text"
            name="office_district"
            id="office_district"
            required
            className="mt-1 block h-8 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:text-gray-900"
            value={form.office_district}
            onChange={handleChange}
          />
        </div>
        {/* Office State */}
        <div>
          <label
            htmlFor="office_state"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Office State
          </label>
          <input
            type="text"
            name="office_state"
            id="office_state"
            required
            className="mt-1 block h-8 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:text-gray-900"
            value={form.office_state}
            onChange={handleChange}
          />
        </div>

        <div>
          <label
            htmlFor="office_pin_code"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Office Pin Code
          </label>
          <input
            type="text"
            name="office_pin_code"
            id="office_pin_code"
            required
            pattern="\d{6}"
            title="Pin code must be 6 digits"
            className="mt-1 block h-8 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:text-gray-900"
            value={form.office_pin_code}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-indigo-500">
          Bank Details
        </h3>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label
            htmlFor="ifsc"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            IFSC
          </label>
          <input
            type="text"
            name="ifsc"
            id="ifsc"
            required
            className="mt-1 block h-8 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:text-gray-900"
            value={form.ifsc}
            onChange={handleChange}
          />
        </div>

        <div>
          <label
            htmlFor="acc_num"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Account Number
          </label>
          <input
            type="text"
            name="acc_num"
            id="acc_num"
            required
            className="mt-1 block h-8 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:text-gray-900"
            value={form.acc_num}
            onChange={handleChange}
          />
        </div>

        <div>
          <label
            htmlFor="beneficiary_name"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Beneficiary Name
          </label>
          <input
            type="text"
            name="beneficiary_name"
            id="beneficiary_name"
            required
            className="mt-1 block h-8 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:text-gray-900"
            value={form.beneficiary_name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label
            htmlFor="branch_id"
            className="block text-sm font-medium text-gray-700 dark:text-white dark:text-white"
          >
            Branch ID
          </label>
          <input
            type="text"
            name="branch_id"
            id="branch_id"
            className="mt-1 block h-8 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:text-gray-900"
            value={form.branch_id}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-indigo-500">
          {" "}
          Misc{" "}
        </h3>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label
            htmlFor="contract_or_commission"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Contract or Commission
          </label>
          <select
            name="contract_or_commission"
            id="contract_or_commission"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:text-gray-900"
            value={form.contract_or_commission}
            onChange={handleChange}
          >
            <option value="">Select one</option>
            <option value="Contract">Contract</option>
            <option value="Commission">Commission</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="fos_or_dsa"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            FOS or DSA
          </label>
          <select
            name="fos_or_dsa"
            id="fos_or_dsa"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:text-gray-900"
            value={form.fos_or_dsa}
            onChange={handleChange}
          >
            <option value="">Select one</option>
            <option value="FOS">FOS</option>
            <option value="DSA">DSA</option>
          </select>
        </div>

        {/* Onboarding Date */}
        <div>
          <label
            htmlFor="dob"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Onboarding Date
          </label>
          <input
            type="date"
            name="onboarding_date"
            id="onboarding_date"
            required
            className="mt-1 block h-8 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:text-gray-900"
            value={form.onboarding_date}
            onChange={handleChange}
          />
        </div>
      </div>

      <button
        type="submit"
        className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Submit
      </button>
      <h3>{message}</h3>
    </form>
  );
};

export default MyForm;
