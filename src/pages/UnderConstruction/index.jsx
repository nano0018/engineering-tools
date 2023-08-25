import Layout from '@components/Layout';
import Navbar from '@components/Navbar';
import MessageCard from '@components/MessageCard';
import SectionContainer from '@components/SectionContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as Logo404 } from '@assets/construction.svg';

const UnderConstructionPage = () => {
  const icon = (
    <FontAwesomeIcon className="text-lg" icon={faTriangleExclamation} />
  );
  const title = 'Oops!: Sitio en construcción';
  const message = 'La página está en construcción. Pronto estará disponible su consulta.';
  const figure = <Logo404 className="w-32 h-32" />;
  return (
    <>
      <Navbar />
      <Layout>
        <SectionContainer>
          <MessageCard
            icon={icon}
            title={title}
            message={message}
            figure={figure}
          />
        </SectionContainer>
      </Layout>
    </>
  );
};

export default UnderConstructionPage;
