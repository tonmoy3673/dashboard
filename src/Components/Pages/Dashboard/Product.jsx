import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';


const Product = ({product, setProducts,products} ) => {
    const {image_url,title,_id}=product;
    
    const handleDelete = async (id) => {
      Swal.fire({
        title: 'Do you want to delete?',
        showCancelButton: true,
        confirmButtonText: 'Delete',
        customClass: {
          actions: 'my-actions',
          cancelButton: 'order-1 right-gap',
          confirmButton: 'order-2',
          denyButton: 'order-3',
        },
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/books/${_id}`, {
            method: "DELETE",
           
          })
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              console.log(data);
              setProducts((prevProducts) => prevProducts.filter((product) => product._id !== id));
              Swal.fire('Book has been Deleted Successfully!', '', 'success');
              toast.success('Book Item removed Successfully!!')
            })
            .catch((error) => {
              console.error('There was a problem with the fetch operation:', error);
              Swal.fire('Failed to delete the book.', '', 'error');
            });
        }
      });
    };
    return (
        <div>
            <div className="h-[220px] lg:h-[350px] w-48 lg:w-72 mt-2 lg:mt-0">
              <div>
              <img
                  src={image_url}
                  alt="food"
                  className="!w-full  !rounded-md !h-[240px] !md:h-[364px] object-contain mx-auto"
                />
              </div>
              <div className="text-center">
                <h2 className="text-base md:text-xl text-[#00897B] font-semibold my-2">{title}</h2>
                
                <div className="flex justify-center gap-2 mt-2">
                  <Link to={`/books/${_id}`}>
                  <button className="btn hover:bg-warning bg-[#00897B] text-white">
                   Details 
                  </button>
                  </Link>
                  <button onClick={()=> handleDelete(_id)} className="btn hover:bg-warning bg-red-600 text-white">
                   Delete 
                  </button>
                  <Link to={`/dashboard/update/${_id}`}>
                  <button className="btn hover:bg-warning bg-green-600 text-white">
                   Update 
                  </button>
                  </Link>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Product;