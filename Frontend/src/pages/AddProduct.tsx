import { useState } from "react";
import InputControl from "../components/inputControl/InputControl";
import Select from 'react-select';
import textareaaddproduct from "../assets/textareaaddproduct.png";
import AddProductionVariation from "./AddProductionVariation";
import axios from "axios";
import { toast } from "react-toastify";

const roleOptions1 = [
  { value: "1", label: "Category 1" },
  { value: "2", label: "Category 2" },
];

function AddProduct() {
  const [isVariationActive, setVariationActive] = useState(false);
  const [productValues, setProductValues] = useState({
    name: "",
    country: "",
    price: "",
    description: "",
    additionalInformation: ""
  });

  

 

  const handleSubmission = async () => {
  
  
    try {
      // Simulate the backend URL
      const response = await axios.post('http://localhost:3000/seller/addproducts', {
        name: productValues.name,
        country:productValues.country,
        price: productValues.price,
        description: productValues.description,
        additionalInformation: productValues.additionalInformation
    });
    toast.info('Product Addition   successful!');
      console.log(response.data);
  
      // Clear form fields after successful submission
      setProductValues({
        name: "",
        country: "",
        price: "",
        description: "",
        additionalInformation: ""
      });
  
    } catch (error) {
      console.error('Error uploading data:', error);
    }
  };
  

  return (
    <>
      {isVariationActive ? (
        <>
          <AddProductionVariation />
        </>
      ) : (
        <>
          <div className="w-full h-500 bg-gray-200">
            <div className="font-bold text-4xl p-5">
              Add Products
            </div>
            <div className="h-full w-full flex items-center justify-center">
              <div className="bg-white h-5/6 w-5/6 shadow-lg shadow-gray-400 flex justify-center items-center rounded-lg">
                <div className="w-5/6 h-5/6">
                  <div className="font-bold text-2xl pt-5">
                    General
                  </div>
                  <div className="flex justify-between w-3/4">
                    <div className="text-lg ">
                      <InputControl
                        placeholder="Name"
                        className="w-full p-2 border border-x-0 border-t-0 border-b-gray-300"
                        value={productValues.name}
                        onChange={(event) => {
                          setProductValues((prev) => ({
                            ...prev,
                            name: event.target.value,
                          }));
                        }}
                      />
                    </div>
                    <div className="text-md">
                      <Select
                        className="rounded-xl w-64 text-gray-500 focus:outline-none mt-5"
                        isSearchable={true}
                        options={roleOptions1}
                        placeholder="Prod Country Origin"
                        value={roleOptions1.find(option => option.value === productValues.country)}
                        onChange={(selectedOption) => {
                          setProductValues((prev) => ({
                            ...prev,
                            country: selectedOption ? selectedOption.value : "",
                          }));
                        }}
                      />
                    </div>
                  </div>
                  <div className="text-lg w-1/4">
                    <InputControl
                      placeholder="Price"
                      className="w-full p-2 border border-x-0 border-t-0 border-b-gray-300"
                      value={productValues.price}
                      onChange={(event) => {
                        setProductValues((prev) => ({
                          ...prev,
                          price: event.target.value,
                        }));
                      }}
                    />
                  
                  </div>
                  <div className="flex justify-start items-center mt-7 mb-7 w-2/3 text-gray-500">
                    <div className="flex justify-between w-1/2">
                      Refundable
                      <img src={textareaaddproduct} className="w-6" alt="" />
                    </div>
                    <div className="flex justify-between w-1/2 ml-5">
                      Locally Made Products
                      <img src={textareaaddproduct} className="w-6" alt="" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-gray-500 text-sm mb-2">Description</label>
                    <textarea
                      name="description"
                      className="w-full h-32 px-3 py-2 border border-gray-500 rounded-md text-gray-700"
                      value={productValues.description}
                      onChange={(event) => {
                        setProductValues((prev) => ({
                          ...prev,
                          description: event.target.value,
                        }));
                      }}
                    ></textarea>
                  </div>
                  <div className="mt-4">
                    <label className="block text-gray-500 text-sm mb-2">Additional Information</label>
                    <textarea
                      name="additionalInformation"
                      className="w-full h-32 px-3 py-2 border border-gray-500 rounded-md text-gray-700"
                      value={productValues.additionalInformation}
                      onChange={(event) => {
                        setProductValues((prev) => ({
                          ...prev,
                          additionalInformation: event.target.value,
                        }));
                      }}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 flex items-center justify-end w-full">
              <button
                className="shadow-gray-500 shadow-sm border p-3 w-1/5 rounded-xl font-semibold text-white bg-black"
                onClick={() => {
                  setVariationActive(true);
                }}
              >
                Add Variation
              </button>
              <button
                className="shadow-gray-500 shadow-sm border p-3 w-1/5 rounded-xl font-semibold text-white bg-black ml-7"
                onClick={handleSubmission}
              >
                Submit
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default AddProduct;
