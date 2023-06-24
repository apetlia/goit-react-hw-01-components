import styled from '@emotion/styled';

export const Table = styled.table`
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  text-align: center;
  border-collapse: collapse;
  overflow: hidden;

  th,
  td {
    width: 160px;
    padding: 16px;
  }

  th {
    background-color: ${p => p.theme.colors.gray};
    color: ${p => p.theme.colors.white};
    :not(:last-child) {
      border-right: 1px solid ${p => p.theme.colors.white};
    }
  }

  td {
    color: ${p => p.theme.colors.gray};

    :not(:last-child) {
      border-right: 1px solid ${p => p.theme.colors.silver};
    }
  }

  tbody tr {
    :nth-child(2n) {
      background-color: ${p => p.theme.colors.whiteSmoke};
    }
  }
`;
