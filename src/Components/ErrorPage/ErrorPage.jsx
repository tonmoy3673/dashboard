import { Link, useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="py-4 text-center t-6 md:mt-12">
      <h2 className="text-xl md:text-3xl font-bold py-8">Oops! An Error Occurred 😢</h2>
      {error && (
        <div>
          <h5 className="text-xl md:text-2xl text-red-600 font-semibold">
            {error.statusText || error.message}
          </h5>
          <h5 className="text-xl text-red-600 font-bold">{error.status}</h5>
          <button className="btn bg-[#880769] hover:bg-warning text-white mt-8">
            <Link to="/">HomePage</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default ErrorPage;
