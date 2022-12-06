import styled from '@emotion/styled';
import { getRandomColor } from '../../utils/getRandomColor';

export const TransactionTable = styled.table`
  margin: 20px auto;
  border: 1px solid lightgrey;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3);
`;

export const TableHead = styled.thead`
  font-size: 20px;
  background-color: ${getRandomColor()};
`;

export const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: lightgrey;
  }
  &:hover,
  &:focus {
    font-weight: bold;
  }
`;

export const TableHeader = styled.th`
  text-transform: uppercase;
  padding: 10px;
`;

export const TableBody = styled.tbody``;

export const TypeData = styled.td`
  padding: 10px;
  text-transform: uppercase;
  width: 130px;
`;

export const AmountData = styled.td`
  text-align: right;
  padding: 10px;
  min-width: 120px;
`;

export const CurrencyData = styled.td`
  text-align: center;
  padding: 10px;
  width: 110px;
`;
