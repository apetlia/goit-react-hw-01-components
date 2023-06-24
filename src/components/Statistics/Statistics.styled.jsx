import styled from '@emotion/styled';

export const Section = styled.section`
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  overflow: hidden;
`;

export const Header = styled.h2`
  text-align: center;
  padding: 24px;
  color: ${p => p.theme.colors.black};
  border-bottom: 1px solid ${p => p.theme.colors.silver};
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
`;

export const Item = styled.li`
  width: 64px;
  height: 64px;
  display: flex;
  gap: 8px;
  padding: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${p => p.theme.colors.whiteSmoke};
  &:not(:last-child) {
    border-right: 1px solid ${p => p.theme.colors.silver};
  }
`;

export const Label = styled.span`
  color: ${p => p.theme.colors.gray};
`;
export const Percentage = styled.span`
  font-weight: 700;
`;
