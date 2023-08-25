import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return <main className="flex flex-col lg:flex-row justify-between items-center mt-11 font-sans">{children}</main>;
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
