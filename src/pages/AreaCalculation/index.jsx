import Layout from '@components/Layout';
import Navbar from '@components/Navbar';
import CardContainer from '@components/CardContainer';
import { areas } from '@/data/areaFieldList';

const AreaCalculation = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <CardContainer
        calculation={areas}
        />
      </Layout>
    </>
  );
};

export default AreaCalculation;
