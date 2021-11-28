import styled from 'styled-components'


export const Styles = styled.div`
  padding: 1rem;

  .user {
    background-color: blue;
    color: white;
  }

  table {
    overflow:hidden;
     overflow-y:scroll;
    /* display:block; */
    height:1000px;

    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`







// .students {
//   text-align: center;
//   font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif;
//   border-collapse: collapse;
//   border: 3px solid #ddd;
//   width: 100%;
// }

// .students td,
// .students th {
//   border: 1px solid #ddd;
//   padding: 8px;
// }

// .students tr:nth-child(even) {
//   background-color: #f2f2f2;
// }

// .students tr:hover {
//   background-color: #ddd;
// }

// .position-search {
//   width: 100%;
// }
