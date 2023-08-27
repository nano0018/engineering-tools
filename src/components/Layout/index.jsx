import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return <main className="flex flex-col justify-between items-center mt-11 mb-16 font-sans">{children}</main>;
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
