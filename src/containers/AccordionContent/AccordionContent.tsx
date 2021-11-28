import { getUrlPathSlug } from '../../utils/getUrlPathSlug';

const AccordionContent = () => {
  const pathSlug = getUrlPathSlug();
  return <div>You have clicked: {pathSlug}</div>;
};

export default AccordionContent;
