import styled from '@emotion/styled'

export const Table = styled.table `
width: 500px;
text-align: center;
border-radius: 5px;
border:  1px solid #ccc; ;
box-shadow:0px 1px 3px rgba(0, 0, 0, 0.12);
margin: 0px auto;
`;

   
export const TransactionHead = styled.thead`
background-color: rgba(155, 220, 250, 1);
color: white;
height: 40px;
text-transform: uppercase;
`;
export const TransactionRow = styled.tr`
  text-align: center;
  background-color: white;
  :nth-child(even) {
    background-color:  rgba(220, 220, 220, 1);
  }
`;
export const TransactionType= styled.td`
  padding: 10px; 
`;