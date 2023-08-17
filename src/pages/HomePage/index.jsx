import Layout from '@components/Layout';
import Navbar from '@components/Navbar';
import CardLayout from '@components/CardLayout';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <h1>Vite + React</h1>
        <CardLayout />
        <CardLayout />
        <CardLayout />
      </Layout>
    </>
  );
};

export default HomePage;
