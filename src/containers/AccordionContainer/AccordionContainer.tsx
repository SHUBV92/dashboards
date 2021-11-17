import Accordion from '../../components/Accordion/Accordion';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/rootReducer';

const AccordionContainer = () => {
  const data = useSelector((state: RootState) => state.data.data);

  return (
    <div>
      <Accordion title={'Movie'} content={'It is a bigsss deal'} />
      <Accordion title={'Prem'} content={'It is a bigsss deal'} />
      <Accordion
        title={'Lagan'}
        content={['It is a bigsss deal', 'Hello', 'Hi']}
      />
    </div>
  );
};

export default AccordionContainer;
