import '../../App.css';
import PositionsPanel from '../../components/PositionsPanel/PositionsPanel';
import AccordionContainer from '../AccordionContainer/AccordionContainer';

import {
  DashBoardContainer,
  InfoPanel,
  AllocationInfoPanel,
  PerformancePanel,
  Positions,
  //   Gird,
  Col,
  Row,
} from './Dashboard.styles';

const Dashboard = () => {
  return (
    <DashBoardContainer>
      <Row>
        <Col size={3}>
          <div>
            <InfoPanel>
              <AccordionContainer />
            </InfoPanel>
          </div>
        </Col>
        <Col size={4}>
          <Row>
            <Col size={1}>
              <AllocationInfoPanel>Allocation Info Panel</AllocationInfoPanel>
            </Col>
            <Col size={1}>
              <PerformancePanel>Performance Panel</PerformancePanel>
            </Col>
          </Row>
          <Positions>
            <PositionsPanel />
          </Positions>
        </Col>
      </Row>
    </DashBoardContainer>
  );
};

export default Dashboard;
