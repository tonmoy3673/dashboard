
import toast from "react-hot-toast";
import { FaLocationArrow } from "react-icons/fa6";
import Swal from 'sweetalert2';

const AddProducts = () => {
  const handleSubmit=async(e)=>{
  e.preventDefault();
  const form=e.target;
  const title=form.title.value;
  const price=form.price.value;
  const author=form.author.value;
  const pages=form.pages.value;
  const subject=form.subject.value;
  const description=form.description.value;
  const language=form.language.value;
  const quantity=form.quantity.value;
  const image_url=form.photo.value;
 const data={title,subject,description,image_url,price,author,pages,language,quantity};
 console.log(data);
 Swal.fire({
  title: "Are you sure to add this item?",
  showDenyButton: true,
  confirmButtonText: "Save",
  denyButtonText: `Don't save`
}).then((result)=>{
  if (result.isConfirmed) {
      fetch("https://dashboard-server-ten.vercel.app/books", {
        method:"POST",
        headers:{
          "Content-type":"application/json",
          

        },
        body:JSON.stringify(data)
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          
          Swal.fire("Saved!", "", "success");
          form.reset();
          toast.success('New Book Added Successfully!!')
        })
        .catch((error) => {
          console.error('There was a problem with the fetch operation:', error);
          Swal.fire("Changes are not saved", "", "info");
        });
    }
})
  

  };
    return (
        <div>
            <h2 className="text-center pb-4 md:pb-8 text-xl lg:text-3xl text-[#f2f2f2] font-semibold">Add New Book</h2>
            <div className=" lg:col-span-6 md:col-span-4 md:order-1  lg:py-30 md:flex items-center 5xl:ml-[285px] 4xl:ml-[200px] 3xl:ml-[150px] 2xl:ml-[100px] xl:ml-[80px] lg:ml-[40px] md:ml-[20px]">

                {/* =========== Form Part ======= */}
            <div className="rounded-lg items-center py-7 mx-auto">
              
              <form onSubmit={handleSubmit} className=" ">
                <div className="text-base">
                  <div className="grid grid-cols-1 gap-6 md:gap-12 md:grid-cols-2 lg:mb-8 mb-4">
                    <div>
                      {" "}
                      <h5 className="mb-2 text-[#00897B] text-base">Book name *</h5>
                      <label className="sr-only" htmlFor="title">
                        title
                      </label>
                      <input
                        className="w-full rounded-lg bg-[#C477B126] shadow-sm shadow-black p-3 lg:pr-16 pr-3 text-sm" // Added pr-12 class for padding-right
                        placeholder="Type Food Name"
                        type="text"
                        id="title"
                      required/>
                    </div>

                    <div>
                      <h5 className="mb-2 text-[#00897B] text-base">Price *</h5>
                      <label className="sr-only" htmlFor="price">
                        Price
                      </label>
                      <input
                        className="w-full rounded-lg bg-[#C477B126]  shadow-sm shadow-black p-3 lg:pr-16 pr-3  text-sm"
                        placeholder="Type Price $"
                        type="number"
                        id="price"
                        required/>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-6 md:gap-12 md:grid-cols-2 lg:mb-8 mb-4">
                    <div>
                      {" "}
                      <h5 className="mb-2 text-[#00897B] text-base">Author *</h5>
                      <label className="sr-only" htmlFor="author">
                      author
                      </label>
                      <input
                        className="w-full rounded-lg bg-[#C477B126] shadow-sm shadow-black p-3 lg:pr-16 pr-3 text-sm" // Added pr-12 class for padding-right
                        placeholder="Author Name"
                        type="text"
                        id="author"
                      required/>
                    </div>

                    <div>
                      <h5 className="mb-2 text-[#00897B] text-base">Total pages *</h5>
                      <label className="sr-only" htmlFor="pages">
                      pages
                      </label>
                      <input
                        className="w-full rounded-lg bg-[#C477B126]  shadow-sm shadow-black p-3 lg:pr-16 pr-3  text-sm"
                        placeholder="Input Page Count"
                        type="number"
                        id="pages"
                        required/>
                    </div>
                  </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:mb-8 mb-4  ">
                  <div>
                    <h5 className="mb-2 text-[#00897B] text-base">Subjects *</h5>
                    <label className="sr-only" htmlFor="subject">
                      Subjects
                    </label>
                    <input
                      className="w-full rounded-lg bg-[#C477B126] shadow-sm shadow-black p-3 lg:pr-16 pr-3  text-sm"
                      placeholder="Type Subjects Name "
                      type="text"
                      id="subject"
                      required/>
                  </div>

                  <div>
                    <h5 className="mb-2 text-[#00897B] text-base">Photo URL *</h5>
                    <label className="sr-only" htmlFor="phone">
                      Photo
                    </label>
                    <input
                      className="w-full rounded-lg bg-[#C477B126] shadow-sm shadow-black p-3 lg:pr-16 pr-3  text-sm"
                      placeholder="Input Photo URL"
                      type="text"
                      id="photo"
                    required/>
                  </div>
                </div>
               <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:mb-8 mb-4">
                
                <div>
                    <h5 className="mb-2 text-[#00897B] text-base">Quantity *</h5>
                    <label className="sr-only" htmlFor="quantity">
                    Quantity
                    </label>
                    <input
                      className="w-full rounded-lg bg-[#C477B126] shadow-sm shadow-black p-3 lg:pr-16 pr-3  text-sm"
                      placeholder="Enter quantity"
                      type="text"
                      id="quantity"
                    required/>
                  </div>
               
                <div>
                    <h5 className="mb-2 text-[#00897B] text-base">Language *</h5>
                    <label className="sr-only" htmlFor="id">
                    language
                    </label>
                    <input
                      className="w-full rounded-lg bg-[#C477B126] shadow-sm shadow-black p-3 lg:pr-16 pr-3  text-sm"
                      placeholder="Type Language"
                      type="text"
                      id="language"
                    required/>
                  </div>
               </div>

               <div>
                <label className="sr-only" htmlFor="Description">
                  Description
                  </label>
                  <h5 className="mb-2 text-[#00897B] text-base">Description *</h5>
                  <textarea
                    className="w-full rounded-lg bg-[#C477B126] shadow-sm shadow-black p-4 lg:pr-16 pr-3  text-sm"
                    placeholder="Write Description..."
                    rows="6"
                    type="text"
                    id="description"
                  required></textarea>
                </div>
                <div className=" flex md:block xs:justify-center xs:items-center xs:mx-auto">
                  <button
                  value='submit'
                    type="submit"
                    className="rounded-md bg-[#00897B] hover:bg-[#FBCC21E4] px-10 py-4 md:px-20  font-semibold text-base  text-white items-center flex lg:mt-13 mt-8 "
                  >
                    Submit <FaLocationArrow className=" ml-2  " />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
    );
};

export default AddProducts;