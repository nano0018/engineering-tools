import Layout from '@components/Layout';
import Navbar from '@components/Navbar';
import CardContainer from '@components/CardContainer';
import { perimeters } from '@/data/perimeterFieldList';

const PerimeterCalculation = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <CardContainer
        calculation={perimeters}
        />
      </Layout>
    </>
  );
};

export default PerimeterCalculation;
