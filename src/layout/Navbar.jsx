import { IoMdNotificationsOutline } from "react-icons/io";
import { BsChatDots } from "react-icons/bs";

const Navbar = () => {
  return (
    <>
      <nav className=" bg-white p-4 ">
        <div className="w-full flex items-center justify-between">
          {/* Logo or Brand Name */}

          <div className="flex items-center justify-between md:w-[50%]">
            <div>
              <h1 className="text-primary font-bold text-xl md:text-3xl ">
                Dern Support. io
              </h1>
            </div>
          </div>

          {/* nofication bar */}
          <div className="flex items-center justify-between gap-4">
            <div>
              <button>
                <BsChatDots className="text-primary  md:text-xl" />
              </button>
            </div>
            <div>
              <button>
                <IoMdNotificationsOutline className="text-primary text-lg md:text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
