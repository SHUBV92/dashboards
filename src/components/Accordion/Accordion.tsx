import { useNavigate } from 'react-router-dom';
import './Accordion.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import Avatar, { genConfig } from 'react-nice-avatar';

interface AccordionProps {
  id: number;
  title: string;
  content: string | string[];
  avatar: boolean;
  handleOpen: (id: any) => void;
  isOpen: boolean;
}

const Accordion = ({
  id,
  title,
  content,
  avatar,
  handleOpen,
  isOpen,
}: AccordionProps) => {
  const navigate = useNavigate();
  const handleClick = (path: any) => {
    console.log(`${path} clicked`);
    navigate(`/${path}`);
  };

  return (
    <div className='accordion-container'>
      <div onClick={() => handleOpen(id)} className='accordion-title'>
        {title}
        <span className='accordion-icon'>
          <FontAwesomeIcon icon={isOpen ? faCaretUp : faCaretDown} />
        </span>
      </div>
      {isOpen && (
        <div className='accordion-content'>
          {typeof content === 'object' ? (
            <ul>
              {content.map((item) => (
                <li onClick={() => handleClick(item)}>
                  {avatar && (
                    <Avatar style={{ width: '3rem', height: '3rem' }} />
                  )}
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <h3>{content}</h3>
          )}
        </div>
      )}
    </div>
  );
};
export default Accordion;
