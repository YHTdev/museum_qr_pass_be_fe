import { useState } from "react";
import slugify from "slugify";

const CreateMuseum = () => {
  const [formData, setFormData] = useState({
    museumName: "",
    museumSlug: "",
    museumLocation: "",
    museumAddress: "",
  });

  const createMuseumHandler = (e) => {
    e.preventDefault();

    console.log("formData submit ==>", formData);
  };
  return (
    <>
      <div className="grid grid-cols-2 gap-6 text-slate-800">
        <h1 className="col-span-2 text-sm font-semibold text-red-500">
          ** Please only fill with English **
        </h1>
        <div className="">
          <label
            className="block mb-2 text-sm font-medium"
            htmlFor="museumName">
            Name
          </label>
          <input
            type="text"
            name="museumName"
            id="museumName"
            className="w-full form-input"
            value={formData.museumName}
            onChange={(e) => {
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
                museumSlug: slugify(e.target.value, { lower: true }),
              });
            }}
          />
        </div>

        <div className="">
          <label
            className="block mb-2 text-sm font-medium"
            htmlFor="museumSlug">
            Slug
          </label>
          <input
            type="text"
            name="museumSlug"
            id="museumSlug"
            className="w-full form-input"
            disabled
            placeholder="Read Only!!"
            value={formData.museumSlug}
          />
        </div>

        <div className="">
          <label
            className="block mb-2 text-sm font-medium"
            htmlFor="museumLocation">
            Location
          </label>
          <select
            name="museumLocation"
            id="museumLocation"
            className="w-full form-select"
            value={formData.museumLocation}
            onChange={(e) => {
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
              });
            }}>
            <option value="" selected>
              --- Select Location ---
            </option>
            <option value="Yangon">Yangon</option>
            <option value="Mandalay">Mandalay</option>
            <option value="NayPyiTaw">Nay Pyi Taw</option>
          </select>
        </div>

        <div className="">
          <label
            className="block mb-2 text-sm font-medium"
            htmlFor="museumAddress">
            Address
          </label>
          <textarea
            name="museumAddress"
            id="museumAddress"
            className="w-full form-textarea"
            value={formData.museumAddress}
            onChange={(e) => {
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
              });
            }}
          />
        </div>
      </div>
      <div className="flex items-center justify-end mt-5 space-x-5">
        <button
          onClick={createMuseumHandler}
          className="py-2 bg-yellow-500 rounded-lg shadow-lg px-7 text-slate-200">
          Add
        </button>
      </div>
    </>
  );
};

export default CreateMuseum;
