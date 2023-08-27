import { faToolbox } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="font-sans top-0 flex justify-between items-center fixed z-10 w-full py-3 px-5 text-sm font-light bg-gray-600 h-11">
      <ul className="flex flex-row justify-around w-full items-center">
      <NavLink to={'/'}>
          <li className="flex flex-row items-center justify-center">
            <FontAwesomeIcon
              className="text-white text-lg transition hover:text-gray-300 cursor-pointer"
              icon={faHouse}
            />
            <span className="text-lg text-white pl-2 hidden lg:block">
              Inicio
            </span>
          </li>
        </NavLink>
        <li className="flex-row items-center justify-center hidden lg:flex">
          <FontAwesomeIcon
            className="text-white text-lg"
            icon={faToolbox}
          />
          <h2 className="text-lg text-white pl-2">
            Engineering toolbox
          </h2>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
