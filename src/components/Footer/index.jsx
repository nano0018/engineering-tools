import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faGitlabSquare } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center bottom-0 fixed bg-gray-600 w-full h-auto text-white text-sm font-light py-1">
      <p>Desarrollador por: @nano0018</p>
      <div className="flex flex-row justify-center items-center w-full h-full px-5 bg-gray-600 gap-2">
        <FontAwesomeIcon className='h-8' icon={faSquareGithub} />
        <FontAwesomeIcon className='h-8' icon={faGitlabSquare} />
      </div>
    </footer>
  );
};

export default Footer;
