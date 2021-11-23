import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Accordion from '../../components/Accordion/Accordion';
import { RootState } from '../../store/rootReducer';
import Avatar, { genConfig } from 'react-nice-avatar';

// const config = genConfig(AvatarConfig?)

const AccordionContainer = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState(0);
  const data = useSelector((state: RootState) => state.data.data);

  const handleOpen = (id: any) => {
    setOpen(!open);
    setSelectedItem(id);
  };

  const [accords, setAccords] = useState([
    {
      id: 1,
      title: 'FIAT CURRENCY',
      content: ['£ GBP', '$ DOLLAR'],
      avatar: false,
      handleOpen: { handleOpen },
      open: open,
    },
    {
      id: 2,
      title: 'CRYPTO CURRENCY',
      content: ['Crypto', 'Ethereum', 'Dodge Coin'],
      avatar: false,
      handleOpen: handleOpen,
      open: open,
    },
    {
      id: 3,
      title: 'PEOPLE',
      content: ['Bob', 'Josh', 'Kyle'],
      avatar: true,
      handleOpen: handleOpen,
      open: open,
    },
  ]);

  return (
    <div>
      {accords.map(({ id, title, content, avatar }) => (
        <Accordion
          id={id}
          title={title}
          content={content}
          avatar={avatar}
          handleOpen={handleOpen}
          open={id === selectedItem}
        />
      ))}
    </div>
  );
};

export default AccordionContainer;
