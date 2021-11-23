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
  open: boolean;
}

const Accordion = ({
  id,
  title,
  content,
  avatar,
  handleOpen,
  open,
}: AccordionProps) => {
  const handleClick = (path: any) => console.log(`${path} clicked`);

  return (
    <div className='accordion-container'>
      <div onClick={() => handleOpen(id)} className='accordion-title'>
        {title}
        <span className='accordion-icon'>
          <FontAwesomeIcon icon={open ? faCaretUp : faCaretDown} />
        </span>
      </div>
      {open && (
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
