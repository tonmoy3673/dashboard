

import { useState } from "react";
import toast from 'react-hot-toast';
import { FaLocationArrow } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2';

const UpdateProducts = () => {
    const book=useLoaderData();
    const [title,setTitle]=useState(book.title);
    const [language,setLanguage]=useState(book.language);
    const [quantity,setQuantity]=useState(book.quantity);
    const [author,setAuthor]=useState(book.author);
    const [pages,setPages]=useState(book.pages);
    const [price,setPrice]=useState(book.price);
    const [subject,setSubject]=useState(book.subject);
    const [description,setDescription]=useState(book.description);
    const [image_url,setImageUrl]=useState(book.image_url);

    console.log(book);

  const handleSubmit=async(e)=>{
  e.preventDefault();
  const form=e.target;
  const title=form.title.value;
  const price=form.price.value;
  const subject=form.subject.value;
  const pages=form.pages.value;
  const author=form.author.value;
  const language=form.language.value;
  const quantity=form.quantity.value;
  const description=form.description.value;
  const image_url=form.photo.value;
 const data={title,subject,description,image_url,price,pages,language,author,quantity};
 
 Swal.fire({
    title: "Do you want to save the changes?",
    showDenyButton: true,
    confirmButtonText: "Save",
    denyButtonText: `Don't save`
  }).then((result)=>{
    if (result.isConfirmed) {
        fetch(`http://localhost:5000/books/${book._id}`, {
          method: "PATCH",
          headers:{
            "Content-type":"application/json",
            
        },
        body:JSON.stringify(data),
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            
            Swal.fire("Saved!", "", "success");
            toast.success('Info has been Updated!!')
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
            <h2 className="text-center pb-4 md:pb-8 text-xl lg:text-3xl text-[#880769] font-semibold">Edit Book Info</h2>
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
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
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
                        value={price}
                        onChange={(e)=>setPrice(e.target.value)}
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
                        value={author}
                        onChange={(e)=>setAuthor(e.target.value)}
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
                        value={pages}
                        onChange={(e)=>setPages(e.target.value)}
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
                      value={subject}
                        onChange={(e)=>setSubject(e.target.value)}
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
                      value={image_url}
                        onChange={(e)=>setImageUrl(e.target.value)}
                    required/>
                  </div>
                </div>
               <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:mb-8 mb-4">
                
                <div>
                    <h5 className="mb-2 text-[#00897B] text-base">Quantity *</h5>
                    <label className="sr-only" htmlFor="id">
                    quantity
                    </label>
                    <input
                      className="w-full rounded-lg bg-[#C477B126] shadow-sm shadow-black p-3 lg:pr-16 pr-3  text-sm"
                      placeholder="Enter quantity"
                      type="text"
                      id="quantity"
                      value={quantity}
                        onChange={(e)=>setQuantity(e.target.value)}
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
                      value={language}
                        onChange={(e)=>setLanguage(e.target.value)}
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
                    value={description}
                        onChange={(e)=>setDescription(e.target.value)}
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

export default UpdateProducts;