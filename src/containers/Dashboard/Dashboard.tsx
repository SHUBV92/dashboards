import '../../App.css';
import PositionsPanel from '../../components/PositionsPanel/PositionsPanel';
import AccordionContainer from '../AccordionContainer/AccordionContainer';
import { Circle, Pie } from '../../components/ProgressCircle/ProgressCircle';

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
import PlotlyChart from '../../components/PlotlyChart/PlotlyChart';

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
        <Col size={6}>
          <Row>
            <Col size={1}>
              <AllocationInfoPanel>
                Allocation Info sPanel
                <Pie percentage='9' colour='pink' label='Asset Allocation' />
              </AllocationInfoPanel>
            </Col>
            <Col size={1}>
              <PerformancePanel>
                Performance Panel
                <PlotlyChart />
              </PerformancePanel>
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
