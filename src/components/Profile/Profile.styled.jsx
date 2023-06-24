import styled from '@emotion/styled';

export const UserCard = styled.div`
  width: 300px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
`;
export const UserInfo = styled.div`
  padding: 24px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const UserImg = styled.img`
  width: 70%;
  margin-bottom: 24px;
  overflow: hidden;
  border-radius: 50%;
  border: 1px solid ${p => p.theme.colors.silver};
`;
export const UserName = styled.p`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 700;
`;
export const UserTag = styled.p`
  margin-bottom: 8px;
  color: ${p => p.theme.colors.gray};
`;
export const UserLocation = styled.p`
  color: ${p => p.theme.colors.gray};
`;
export const UserStats = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  background-color: ${p => p.theme.colors.whiteSmoke};
  border-top: 1px solid ${p => p.theme.colors.silver};

  & li {
    width: calc(100% / 3);
    padding: 8px;

    &:not(:last-child) {
      border-right: 1px solid ${p => p.theme.colors.silver};
    }
  }
`;
export const UserLabel = styled.span`
  display: block;
  text-align: center;
  color: ${p => p.theme.colors.gray};
  margin-bottom: 8px;
`;
export const UserQuantity = styled.span`
  display: block;
  text-align: center;
  font-weight: 700;
`;
