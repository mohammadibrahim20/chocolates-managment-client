import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Create = () => {
  const handleAdd = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const country = form.country.value;
    const category = form.category.value;
    const photo = form.photo.value;

    const item = {
      name: name,
      country: country,
      category: category,
      photo: photo,
    };
    console.log(item);
    fetch("http://localhost:5000/chocolates", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Coffee added successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
        form.reset();
      });
  };

  return (
    <div className="max-w-7xl w-full mx-auto">
      <div className="text-center flex justify-center">
        <h2 className="text-center text-3xl font-semibold bg-amber-600 w-1/2 rounded-2xl p-4 ">
          Chocolate Management System
        </h2>
      </div>
      <div className="my-10">
        <Link to="/">
          <button className="btn btn-outline rounded-md gap-2">
            <FaArrowCircleLeft />
            All Categories
          </button>
        </Link>
        <div className="divider"></div>
        <div className="px-32 py-12 bg-gray-100 rounded-md">
          <h3 className="text-2xl font-semibold text-center">New Chocolates</h3>
          <p className="text-center mt-3">New Chocolates</p>
          {/* form */}
          <form onSubmit={handleAdd}>
            {/* row 1 */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold text-lg">Name</span>
              </label>
              <label className="w-full">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            {/* row 2*/}
            <div className="form-control w-full mt-5">
              <label className="label">
                <span className="label-text font-bold text-lg">Country</span>
              </label>
              <label className="w-full">
                <input
                  type="text"
                  placeholder="Country"
                  name="country"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            {/* row 3*/}
            <div className="form-control w-full mt-5">
              <label className="label">
                <span className="label-text font-bold text-lg">Category</span>
              </label>
              <label className="w-full">
                <input
                  type="text"
                  placeholder="Category"
                  name="category"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            {/* row 3*/}
            <div className="form-control w-full mt-5">
              <label className="label">
                <span className="label-text font-bold text-lg">Photo</span>
              </label>
              <label className="w-full">
                <input
                  type="text"
                  placeholder="Photo URL"
                  name="photo"
                  className="input input-bordered w-full"
                />
              </label>
              <input
                className="mt-10 btn btn-block bg-yellow-700"
                type="submit"
                value="Add"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
