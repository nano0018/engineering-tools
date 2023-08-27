import PropTypes from 'prop-types';

const FieldContainer = ({label, event, name}) => {
  return (
    <div className="my-1 flex flex-row w-full">
      <label className="pr-2 text-gray-800 font-bold">{label}</label>
      <input className="form-control" type="text" name={name}onChange={event} defaultValue={0}/>
      <p className='ml-2 font-bold text-gray-500'>m</p>
    </div>
  );
};

FieldContainer.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  event: PropTypes.func.isRequired,
};

export default FieldContainer;
