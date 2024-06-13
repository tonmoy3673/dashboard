import { useLoaderData } from "react-router-dom";

const Books = () => {
    const allBooks=useLoaderData();
    console.log(allBooks);
    return (
        <div>
            <h2>All Books</h2>
        </div>
    );
};

export default Books;