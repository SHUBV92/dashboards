import styled from 'styled-components'


export const DashBoardContainer = styled.div`
  width: 80vw;
  height: 80vh;
  margin-top: 5rem;
`

export const InfoPanel = styled.div`
  border: 1px solid;
  top: 0;
  left: 0;
  height: 50vh;
  width: 70%;

`

export const AllocationInfoPanel = styled.div`
  height: 10rem;
  padding: 1rem;
  border: 1px solid;
  width: 50%;
`
export const PerformancePanel = styled.div`
  height: 10rem;
  padding: 1rem;
  border: 1px solid;
  width: 50%;
`

// export const ToolsContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100vw;

//   @media only screen and (max-width: 600px) {
//     display: flex;
//     flex-direction: column;
// }
// `
// export const ChildContainer = styled.div`
//   display: flex;
//   flex-direction: row;

//   @media only screen and (max-width: 600px) {
//     display: flex;
//     flex-direction: column;
//   }
// `


// export const PositionsPanel = styled.div``


export const Positions = styled.div`
  padding: 1rem;
  border: 1px solid;
`


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