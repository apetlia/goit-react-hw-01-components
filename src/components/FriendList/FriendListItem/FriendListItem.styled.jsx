import styled from '@emotion/styled';

export const Item = styled.li`
  width: 240px;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
`;
export const Status = styled.span`
  width: 16px;
  height: 16px;
  background-color: ${p => (p.isOnline ? '#1B5E20' : '#B71C1C')};
  border-radius: 50%;
`;

export const UserImg = styled.img`
  border-radius: 5px;
  overflow: hidden;
`;

export const UserName = styled.p`
  color: ${p => p.theme.colors.black};
  font-size: 24px;
  font-weight: 700;
`;
