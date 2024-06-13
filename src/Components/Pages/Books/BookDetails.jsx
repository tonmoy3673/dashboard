import { useLoaderData } from "react-router-dom";

const BookDetails = () => {
  const book = useLoaderData();

  const { title, subject, author, description, image_url,pages,price,language} = book;


  
  return (
    <div className="md:flex py-4 mt-3 md:mt-10 gap-10 justify-around md:px-[20%]">
      
        
        <img src={image_url} alt="food" className="rounded-lg mx-auto" />
       
      
      <div className="items-center text-center md:text-start">
        <h2 className="text-base md:text-xl lg:text-3xl text-center md:text-start text-[#00897B] font-bold">
          {title}
        </h2>
        <p className="font-semibold text-base lg:text-lg">
          Author : {author}
        </p>
        <p className="font-semibold text-red-600 text-base lg:text-lg">
          Price : {price}$
        </p>
        <p className="font-semibold text-base md:text-lg">Subject : {subject}</p>
        <p className="font-semibold text-base md:text-lg">Pages : {pages}</p>
        <p className="font-semibold text-base md:text-lg">Language : {language}</p>
        <p><span className="text-base md:text-lg font-semibold">Description</span> : {description}</p>
        <div className="rating mt-2">
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-orange-400"
            
          />
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
       
      </div>
    </div>
  );
};

export default BookDetails;
