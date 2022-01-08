import styled from '@emotion/styled'

export const Friendlisted = styled.ul`
  margin: 30px auto;
  width: 500px;
`;
export const StatusOn = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: green;
  margin-right: 20px;
`;

export const StatusOff = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: red;
  margin-right: 20px;
`;
export const Item = styled.li`
display: flex;
flex-direction: row;
align-items: center;
padding: 10px;
border-radius: 5px;
border:  1px solid #ccc; ;
box-shadow:0px 1px 3px rgba(0, 0, 0, 0.12);
:not(:last-child) {
  margin-bottom: 15px;
}
`;
export const Name = styled.p`
  padding-left: 20px;
`;
export const Avatar = styled.img`

`;
