import styled from 'styled-components'

interface ColProps {
  size?: number;
  collapse?: string;
}

export const Grid = styled.div``;

export const Row = styled.div`
  display: flex;
`;

const media:any = {
  xs: (styles:string) => `
    @media only screen and (max-width: 480px){
        ${styles}
    }
    `,
};

export const Col = styled.div<ColProps>`
  flex: ${(props:any) => props.size};
  ${(props:any) =>
    props.collapse &&
    media[props.collapse](`
    display: none;
  `)}
`;


export const DashBoardContainer = styled.div`
  width: 95vw;
  height: 85vh;
  margin-top: 5rem;
  padding-left: 5rem;
  padding-right: 7rem;
  @media only screen and (max-width: 768px) {
    width: 90vw;
    padding-left: 2rem;
    padding-right: 2rem;
  }

`

export const InfoPanel = styled.div`
  top: 0;
  left: 0;
  height: 100%;
  width: 95%;
  border: 1px solid #F0F0F0;
`

export const AllocationInfoPanel = styled.div`
  height: 20rem;
  width: 100%;
  border: 1px solid #f0f0f0;
  padding-top:0.8rem;

  .color-wheel {
    background: conic-gradient(red, orange, yellow, green, blue);
    border-radius: 100%;
    height: 50%;
    width: 50%;
  }
`
export const PerformancePanel = styled.div`
  height: 20rem;
  width: 100%;
  border: 1px solid #f0f0f0;
  padding-top:0.8rem;
`

export const Positions = styled.div`
  padding-top: 2rem;
  display: flex;
  justify-content:center;
  align-items: center;
  border: 1px solid #f0f0f0;
  width: 100%;
  white-space: nowrap;
`




