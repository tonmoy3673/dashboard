import MenuIcon from "@mui/icons-material/Menu";
import CancelIcon from "@mui/icons-material/Cancel";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NotificationsIcon from '@mui/icons-material/Notifications';

const AdminNavbar = ({ handleMenu, display, handleMinimize, minimize }) => {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center h-16">
      <div
        className={`font-semibold flex ${minimize ? "gap-0" : "gap-4"} items-center transition duration-[400ms] ease-linear`}
      >
        <div
          className={`${
            minimize ? "overflow-hidden opacity-0 w-0" : "opacity-100 w-[10rem]"
          } text-xl font-semibold transition-all duration-[400ms] ease-linear`}
        >
          Dashboard
        </div>

        <span
          className={`cursor-pointer hidden lg:block bg-slate-600 rounded-lg ${minimize ? "px-4 rotate-180":""} p-2 transform transition-transform duration-[400ms] ease-linear`}
          onClick={handleMinimize}
        >
          <img src="https://multivendorbd.vercel.app/images/icons/menu-fold-line.svg" className="w-6 h-6" />
        </span>
      </div>

      <div className="lg:pr-5 flex space-x-2 lg:space-x-4 items-center">
        <div className="cursor-pointer">
          <WbSunnyIcon className="h-6 w-6" />
        </div>
        <div className="cursor-pointer">
          <NotificationsIcon className="h-6 w-6" />
        </div>
        <div className="block lg:hidden">
          <div className="cursor-pointer">
            <AccountCircleIcon className="h-10 w-10" />
          </div>
        </div>
        <div className="block lg:hidden">
          <div className="cursor-pointer" onClick={handleMenu}>
            {display ? (
              <CancelIcon className={`h-10 w-10`} />
            ) : (
              <MenuIcon className={`h-10 w-10`} />
            )}
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="cursor-pointer">
            <AccountCircleIcon className="h-10 w-10" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
