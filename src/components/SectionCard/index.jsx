import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenRuler } from '@fortawesome/free-solid-svg-icons';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';
const SectionCard = ({ title, description, linkTo }) => {
  const renderIcon = () => {
    return linkTo !== 'units' ? (
      <FontAwesomeIcon icon={faPenRuler} />
    ) : (
      <FontAwesomeIcon icon={faCalculator} />
    );
  };
  return (
    <NavLink to={linkTo}>
      <section className="w-80 p-2 border rounded-lg transition ease-in hover:translate-x-4">
        <div className="flex flex-row justify-between items-center p-2 border-b-2 border-gray-300 rounded-t-lg text-gray-600 text-sm font-light bg-gray-200 h-11">
          <h2 className="text-lg font-bold text-gray-800 text-justify">
            {title}
          </h2>
          {renderIcon()}
        </div>
        <p className="text-sm text-gray-700 text-justify">{description}</p>
      </section>
    </NavLink>
  );
};

SectionCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
};

export default SectionCard;
