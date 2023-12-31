import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  useAddProductMutation,
  useGetBrandsQuery,
} from "../../redux/features/brand/brandApi";
import Swal from "sweetalert2";

const AddProduct = () => {
  const { data } = useGetBrandsQuery();
  const [addProduct, { isSuccess, isLoading }] = useAddProductMutation();
  const navigate = useNavigate();
  useEffect(() => {
    if (isSuccess) {
      Swal.fire({
        title: "Success",
        text: "Product Added Successfully!",
        icon: "success",
        confirmButtonText: "Ok",
      });
      navigate("/");
    }
  }, [isSuccess, navigate]);
  const handelAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const name = form.name.value;
    const description = form.description.value;
    const type = form.type.value;
    const price = form.price.value;
    const brandName = form.brand.value;
    const rating = form.rating.value;
    const productInfo = {
      image,
      name,
      description,
      type,
      price,
      brandName,
      rating,
    };
    addProduct(productInfo);
  };
  document.title = "Add Product";

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <form onSubmit={handelAddProduct}>
          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <h1 className="text-2xl text-color-black text-center py-4">
              Add Product
            </h1>
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-5">
                    <label htmlFor="full_name">Image URL</label>
                    <input
                      type="text"
                      name="image"
                      id="full_name"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      required
                      placeholder="Enter Image Url"
                    />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="email">Name</label>
                    <input
                      type="text"
                      name="name"
                      id="email"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="Name of Your Product"
                      required
                    />
                  </div>

                  <div className="md:col-span-3">
                    <label htmlFor="address">Description</label>
                    <input
                      type="text"
                      name="description"
                      id="address"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="Short Description"
                      required
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="city">Price</label>
                    <input
                      type="number"
                      name="price"
                      id="city"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="Enter Price"
                      required
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="state">Type</label>

                    <select
                      name="type"
                      id=""
                      className="h-10 w-full bg-white flex border border-gray-200 rounded items-center mt-1"
                      required
                    >
                      <option>SmartPhone</option>
                      <option>Headphone</option>
                      <option>Camera</option>
                      <option>Tv</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="state">Brand</label>

                    <select
                      name="brand"
                      id=""
                      className="h-10 w-full bg-white flex border border-gray-200 rounded items-center mt-1"
                    >
                      {data?.length > 0 &&
                        data.map((brand) => (
                          <option key={brand._id}>{brand.brandName}</option>
                        ))}
                    </select>
                  </div>

                  <div className="md:col-span-1">
                    <label htmlFor="zipcode">Rating</label>
                    <input
                      type="number"
                      name="rating"
                      id="zipcode"
                      className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder=""
                      min={1}
                      max={5}
                      required
                    />
                  </div>

                  <div className="md:col-span-5 text-right">
                    <div className="inline-flex items-end">
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
