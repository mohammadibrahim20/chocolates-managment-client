import React from "react";
import { FaArchive, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Tbody = ({ choclate, chocolates, setChocolates }) => {
  const { name, country, category, photo, _id } = choclate;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/chocolates/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            const filter = chocolates.filter((items) => items._id !== id);
            setChocolates(filter);
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          });
      }
    });
  };
  return (
    <tbody>
      {/* row 1 */}
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={photo} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="font-bold">{name}</div>
        </td>
        <td>{country}</td>
        <td>{category.slice(0, 20)}</td>
        <th className="flex gap-3">
          <Link to={`/update/${_id}`}>
            <FaEdit></FaEdit>
          </Link>
          <button onClick={() => handleDelete(_id)}>
            <FaArchive></FaArchive>{" "}
          </button>
        </th>
      </tr>
    </tbody>
  );
};

export default Tbody;
