import Layout from '@components/Layout';
import CardContainer from '@components/CardContainer';
import { perimeters } from '@/data/perimeterFieldList';
import MainLayout from '@components/MainLayout';

const PerimeterCalculation = () => {
  return (
    <MainLayout>
      <Layout>
        <CardContainer calculation={perimeters} />
      </Layout>
    </MainLayout>
  );
};

export default PerimeterCalculation;
