import { HiAcademicCap } from "react-icons/hi";
const Header = () => {

  return (
    <header className="header bg-green-900 p-10 container mx-auto rounded-tl-xl rounded-tr-xl border-b-2 border-green-800">
      <h1 className="uppercase font-semibold text-gray-50 tracking-wider flex items-center gap-2">
        <span>
         < HiAcademicCap/>
        </span>
        <span> Todo App</span>
      </h1>
    </header>
  );
};

export default Header;
