import PropTypes from 'prop-types';

const SectionContainer = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-2 my-2 cursor-pointer ">
      {children}
    </div>
  );
};

SectionContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionContainer;
