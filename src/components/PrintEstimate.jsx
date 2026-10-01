import { business } from '../data/business.js'
import { formatINR } from '../utils/currency.js'

/**
 * Hidden on screen; revealed only in print via global CSS.
 * Renders ONLY the estimate summary as a clean printable sheet.
 */
export default function PrintEstimate({ items, totals }) {
  const today = new Date().toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <div className="print-sheet" aria-hidden="true">
      <div className="print-sheet__brand">{business.nameUpper}</div>
      <div className="print-sheet__sub">{business.subtitleUpper}</div>
      <div className="print-sheet__doc-title">Customer Estimate</div>
      <div className="print-sheet__date">Date: {today}</div>

      <table className="print-sheet__table">
        <thead>
          <tr>
            <th>#</th>
            <th>Service</th>
            <th>Dimensions</th>
            <th>Qty</th>
            <th>SFT</th>
            <th>Rate</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.serviceName}</td>
              <td>
                {item.calc.widthInFeet} ft × {item.calc.heightInFeet} ft
              </td>
              <td>{item.quantity}</td>
              <td>{item.calc.totalSft.toFixed(2)}</td>
              <td>₹{item.rate}</td>
              <td>{formatINR(item.calc.amount)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>Total</td>
            <td>{items.reduce((sum, item) => sum + item.quantity, 0)}</td>
            <td>{totals.totalSft.toFixed(2)}</td>
            <td></td>
            <td>{formatINR(totals.totalAmount)}</td>
          </tr>
        </tfoot>
      </table>

      <p className="print-sheet__disclaimer">
        This is an approximate estimate. Final quotation is subject to site
        measurement, material selection, hardware, glass, design and installation
        requirements.
      </p>
    </div>
  )
}
