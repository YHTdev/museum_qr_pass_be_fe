import { useState } from "react";
import slugify from "slugify";

const CreateVisitor = () => {
  const [formData, setFormData] = useState({
    galleryName: "",
    gallerySlug: "",
    museumLocation: "",
  });

  const createVisitorHandler = (e) => {
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
            htmlFor="galleryName">
            Name
          </label>
          <input
            type="text"
            name="galleryName"
            id="galleryName"
            className="w-full form-input"
            value={formData.galleryName}
            onChange={(e) => {
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
                gallerySlug: slugify(e.target.value, {
                  lower: true,
                }),
              });
            }}
          />
        </div>

        <div className="">
          <label
            className="block mb-2 text-sm font-medium"
            htmlFor="gallerySlug">
            Slug
          </label>
          <input
            type="text"
            name="gallerySlug"
            id="gallerySlug"
            className="w-full form-input"
            disabled
            placeholder="Read Only!!"
            value={formData.gallerySlug}
          />
        </div>

        <div className="">
          <label
            className="block mb-2 text-sm font-medium"
            htmlFor="museumLocation">
            Museum
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
            <option>--- Select Museum ---</option>
            <option value="YangonMuseum">Yangon Museum</option>
            <option value="MandalayMuseum">Mandalay Museum</option>
            <option value="NayPyiTawMuseum">Nay Pyi Taw Museum</option>
          </select>
        </div>
      </div>
      <div className="flex items-center justify-end mt-5 space-x-5">
        <button
          onClick={createVisitorHandler}
          className="py-2 bg-yellow-500 rounded-lg shadow-lg px-7 text-slate-200">
          Add
        </button>
      </div>
    </>
  );
};

export default CreateVisitor;
