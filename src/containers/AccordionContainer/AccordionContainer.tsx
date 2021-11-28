import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Accordion from '../../components/Accordion/Accordion';
import { RootState } from '../../store/rootReducer';
import Avatar, { genConfig } from 'react-nice-avatar';
import './AccordionContainer.css';
import { accordionItems } from '../../data/accordionItem';

// const config = genConfig(AvatarConfig?)

const AccordionContainer = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState(0);
  const [accordionItem, setAccordionItem] = useState(accordionItems);
  const data = useSelector((state: RootState) => state.data.data);

  const handleOpen = (id: any) => {
    setOpen(!open);
    setSelectedItem(id);
  };

  return (
    <div className='AccordionContainer'>
      {accordionItem.map(({ id, title, content, avatar }) => (
        <Accordion
          id={id}
          title={title}
          content={content}
          avatar={avatar}
          handleOpen={handleOpen}
          isOpen={id === selectedItem}
        />
      ))}
    </div>
  );
};

export default AccordionContainer;
