import PropTypes from 'prop-types';
import {Table,TransactionHead,TransactionRow,TransactionType} from './TransactionHistory.styled'
export default function TransactionHistory ({items}) {
    return(
<Table>
  <TransactionHead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </TransactionHead>

  <tbody>
      {items.map(({ id, type, amount, currency})=>(
          <TransactionRow key={id}>
          <TransactionType>{type}</TransactionType>
          <td>{amount}</td>
          <td>{currency}</td>
        </TransactionRow>
      ))}
  </tbody>
</Table>
    )
}

TransactionHistory.propTypes={
 items: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      }),
 )
}