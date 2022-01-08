import styled from '@emotion/styled'
export const Profiled  = styled.div`
  width: 500px;
  margin: 15px auto;
  margin-bottom: 30px;
  border: 1px solid #ccc;
  box-shadow:  0px 1px 3px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
`;

export const Description = styled.div`
  padding: 30px 0px;
  text-align: center;
  background: white;
`;
export const Avatar = styled.img`
  border-radius: 50%;
  width: 200px;
  overflow: hidden;
  margin: 0px auto;
  background: gray;
`;
export const Name = styled.p`
  padding-top: 30px;
  font-size: 22px;
  font-weight: 600;  
  color: black;
`;

export const TagLocation = styled.p`
  padding-top: 20px;
  font-size: 16px;
  font-weight: 1000; 
  color: #c9d1d9;
`;
export const Stats = styled.ul`
  display: flex;
  align-items: center;  
  justify-content: space-around;
  background: rgb(240, 240, 240);
`;
export const Items = styled.li`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 20%;
padding: 4px;
border: 1px solid rgb(180, 180, 180);
`