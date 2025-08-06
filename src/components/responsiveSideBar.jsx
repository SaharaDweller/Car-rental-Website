import { FaUserCircle } from "react-icons/fa";

export default function ResponsiveSideBar(props) {
  const menuItems = ["home", "cars", "about", "booking"];

  return (
    <>
      <div
        className={`fixed side md:hidden flex flex-col ${
          props.show ? 'left-0' : 'left-[-100%]'
        } top-0 h-full w-[65%] transition-all duration-300 px-8 pt-16 z-50 space-y-8 shadow-lg`}
      >
        <div className="flex gap-4 items-center">
          <FaUserCircle className="text-5xl" />
          <div className="flex flex-col">
            <h1 className="text-xl font-semibold">Hello User</h1>
            <p className="text-sm text-slate-500">Premium User</p>
          </div>
        </div>

        <div>
          <ul className="space-y-4">
            {menuItems.map((ele, ind) => (
              <li key={ind} className="capitalize font-semibold">
                {ele}
              </li>
            ))}
          </ul>
        </div>

        <div className="absolute bottom-[10%]">
          <h1>
            Made By <a href="">@raheem-brk</a>
          </h1>
        </div>
      </div>
    </>
  );
}
