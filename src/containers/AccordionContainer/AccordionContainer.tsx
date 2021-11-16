import Accordion from '../../components/Accordion/Accordion';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/rootReducer';

const AccordionContainer = () => {
  const data = useSelector((state: RootState) => state.data.data);

  return (
    <div>
      <Accordion title={data} content={'It is a bigsss deal'} />
    </div>
  );
};

export default AccordionContainer;
