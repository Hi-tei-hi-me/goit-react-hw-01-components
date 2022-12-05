import PropTypes from 'prop-types';
import { getRandomColor } from '../../utils/getRandomColor';
import {
  TransactionTable,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TypeData,
  AmountData,
  CurrencyData,
} from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <TransactionTable>
      <TableHead
        style={{
          backgroundColor: getRandomColor(),
        }}>
        <TableRow>
          <TableHeader>Type</TableHeader>
          <TableHeader>Amount</TableHeader>
          <TableHeader>Currency</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {items.map(({ id, type, amount, currency }) => {
          amount = Number(amount).toLocaleString(undefined, { minimumFractionDigits: 2 });
          console.log(amount);
          return (
            <TableRow key={id}>
              <TypeData>{type}</TypeData>
              <AmountData>{amount}</AmountData>
              <CurrencyData>{currency}</CurrencyData>
            </TableRow>
          );
        })}
      </TableBody>
    </TransactionTable>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string,
    }).isRequired
  ).isRequired,
};
