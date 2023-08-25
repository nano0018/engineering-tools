import PropTypes from 'prop-types';

const MessageCard = ({ icon, title, message, figure }) => {
  return (
    <section className="w-80 p-2 border rounded-lg cursor-default">
      <div className="flex flex-row justify-between items-center p-2 border-b-2 border-gray-300 rounded-t-lg text-gray-600 text-sm font-light bg-gray-200 h-11">
        <h2 className="text-lg font-bold text-gray-800 text-justify">
          {title}
        </h2>
        {icon}
      </div>
      <figure className="flex flex-col justify-center items-center text-center my-4">
        {figure}
      </figure>
      <p className="text-sm text-gray-700 text-justify">{message}</p>
    </section>
  );
};

MessageCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.node.isRequired,
  figure: PropTypes.node,
};

export default MessageCard;
