import styled from '@emotion/styled';

export const List = styled.ul`
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid lightgrey;
  border-radius: 10px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3);
  padding: 10px;
`;

export const Status = styled.span`
  width: 15px;
`;

export const Avatar = styled.img`
  width: 50px;
`;

export const Name = styled.p`
  width: 100px;
  font-size: 18px;
`;
