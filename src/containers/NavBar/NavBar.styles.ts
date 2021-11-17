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

export const NavContainer = styled.div`
    display: flex;
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    background-color: blue;
    padding: 1rem;
    justify-content: space-between;
    color: white;
`

export const NavLinks = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        color: white;
        padding: 1rem;
    }
`

export const CurrentUser = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

`


