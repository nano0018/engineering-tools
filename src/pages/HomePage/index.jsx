import { calculationFields } from '@/data/calculationFieldList';
import Layout from '@components/Layout';
import MainLayout from '@components/MainLayout';
import SectionCard from '@components/SectionCard';
import SectionContainer from '@components/SectionContainer';

const HomePage = () => {
  const fieldList = Object.keys(calculationFields);
  return (
    <MainLayout>
      <Layout>
        <SectionContainer>
          {fieldList.map((field) => (
            <SectionCard
              key={field}
              linkTo={field}
              title={calculationFields[field].title}
              description={calculationFields[field].description}
            />
          ))}
        </SectionContainer>
      </Layout>
    </MainLayout>
  );
};

export default HomePage;
