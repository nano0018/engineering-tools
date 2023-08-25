import PropTypes from 'prop-types';
import CardLayout from '@components/CardLayout';

const CardContainer = ({calculation}) => {
  const functionList = Object.keys(calculation);
  return (
    <div className="flex flex-col items-center justify-center w-full gap-2 my-2">
      {functionList.map((functionKey) => (
        <CardLayout key={functionKey} calc={calculation[functionKey]} />
      ))}
    </div>
  );
};

CardContainer.propTypes = {
  calculation: PropTypes.object.isRequired,
};

export default CardContainer;
