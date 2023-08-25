import PropTypes from 'prop-types';

const FieldContainer = ({label, event, name}) => {
  return (
    <div className="my-1">
      <label className="pr-2 text-gray-800 font-bold">{label}</label>
      <input className="form-control" type="text" name={name}onChange={event} defaultValue={0}/>
    </div>
  );
};

FieldContainer.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  event: PropTypes.func.isRequired,
};

export default FieldContainer;
