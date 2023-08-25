import { calculationFields } from '@/data/calculationFieldList';
import Layout from '@components/Layout';
import Navbar from '@components/Navbar';
import SectionCard from '@components/SectionCard';
import SectionContainer from '@components/SectionContainer';

const HomePage = () => {
  const fieldList = Object.keys(calculationFields);
  return (
    <>
      <Navbar />
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
    </>
  );
};

export default HomePage;
