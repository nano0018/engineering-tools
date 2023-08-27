import Layout from '@components/Layout';
import CardContainer from '@components/CardContainer';
import { areas } from '@/data/areaFieldList';
import MainLayout from '@components/MainLayout';

const AreaCalculation = () => {
  return (
    <MainLayout>
      <Layout>
        <CardContainer calculation={areas} />
      </Layout>
    </MainLayout>
  );
};

export default AreaCalculation;
