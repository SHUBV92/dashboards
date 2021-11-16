import { useState } from 'react';
import './Accordion.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

interface AccordionProps {
  title: string;
  content: string;
}

const Accordion = ({ title, content }: AccordionProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className='accordion-container'>
      <div onClick={handleOpen} className='accordion-title'>
        {title}
        <span className='accordion-icon'>
          <FontAwesomeIcon icon={open ? faCaretUp : faCaretDown} />
        </span>
      </div>
      {open && <div className='accordion-content'>{content}</div>}
    </div>
  );
};
export default Accordion;
