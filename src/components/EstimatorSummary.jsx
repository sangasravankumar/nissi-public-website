import { useMemo } from 'react'
import { MessageCircle, Printer, RotateCcw } from 'lucide-react'
import { calculateSFT } from '../utils/calculator.js'
import { formatINR } from '../utils/currency.js'
import { business } from '../data/business.js'
import { getEstimatorRate } from '../data/estimatorServices.js'
import { buildEstimateMessage, buildSimpleMessage, openWhatsApp } from '../utils/whatsapp.js'
import PrintEstimate from './PrintEstimate.jsx'

/** An item is "valid" when all dimensions and quantity are usable. */
function isValidItem(item) {
  const wf = Number(item.widthFeet)
  const hf = Number(item.heightFeet)
  const wi = Number(item.widthInches)
  const hi = Number(item.heightInches)
  return (
    item.widthFeet !== '' &&
    item.heightFeet !== '' &&
    Number.isFinite(wf) &&
    Number.isFinite(hf) &&
    wf > 0 &&
    hf > 0 &&
    wi >= 0 &&
    wi <= 11 &&
    hi >= 0 &&
    hi <= 11 &&
    Number.isFinite(Number(item.quantity)) &&
    Number(item.quantity) >= 1
  )
}

/** Decorate each valid item with its calculation + rate for reuse. */
function buildCalculatedItems(validItems) {
  return validItems.map((item) => {
    const rate = getEstimatorRate(item.serviceName)
    const calc = calculateSFT(
      item.widthFeet,
      item.widthInches,
      item.heightFeet,
      item.heightInches,
      item.quantity,
      rate
    )
    return { ...item, rate, calc }
  })
}

export default function EstimatorSummary({ items, onClear, canClear }) {
  const calculatedItems = useMemo(
    () => buildCalculatedItems(items.filter(isValidItem)),
    [items]
  )

  const totals = useMemo(
    () => ({
      totalSft: calculatedItems.reduce((sum, item) => sum + item.calc.totalSft, 0),
      totalAmount: calculatedItems.reduce((sum, item) => sum + item.calc.amount, 0),
    }),
    [calculatedItems]
  )

  const handleWhatsApp = () => {
    if (calculatedItems.length === 0) {
      openWhatsApp(business.whatsappNumber, buildSimpleMessage(business.name))
    } else {
      const messageItems = calculatedItems.map((item) => ({
        serviceName: item.serviceName,
        widthFeet: item.calc.widthInFeet,
        heightFeet: item.calc.heightInFeet,
        quantity: item.quantity,
        totalSft: item.calc.totalSft,
        rate: item.rate,
        amount: item.calc.amount,
      }))
      openWhatsApp(business.whatsappNumber, buildEstimateMessage(messageItems, business.name))
    }
  }

  return (
    <>
      <section className="estimator-summary" aria-label="Estimation summary">
        <h3 className="estimator-summary__title">ESTIMATION SUMMARY</h3>

        <div className="estimator-summary__grid">
          <div className="estimator-summary__stat">
            <span className="estimator-summary__label">Total Items</span>
            <span className="estimator-summary__value">{calculatedItems.length}</span>
          </div>
          <div className="estimator-summary__stat">
            <span className="estimator-summary__label">Total SFT</span>
            <span className="estimator-summary__value">{totals.totalSft.toFixed(2)} SFT</span>
          </div>
          <div className="estimator-summary__stat">
            <span className="estimator-summary__label">Estimated Cost</span>
            <span className="estimator-summary__value">{formatINR(totals.totalAmount)}</span>
          </div>
        </div>

        <div className="estimator-summary__actions">
          <button type="button" className="btn btn--whatsapp btn--lg" onClick={handleWhatsApp}>
            <MessageCircle size={18} aria-hidden="true" />
            Get Estimate on WhatsApp
          </button>
          <button type="button" className="btn btn--outline btn--lg" onClick={onClear} disabled={!canClear}>
            <RotateCcw size={16} aria-hidden="true" />
            Clear
          </button>
          <button type="button" className="btn btn--ghost btn--lg" onClick={() => window.print()} aria-label="Print estimate">
            <Printer size={16} aria-hidden="true" />
            Print Estimate
          </button>
        </div>

        <p className="estimator-summary__disclaimer">
          Estimate only. Final price may vary based on profile, glass, hardware, design, material and site requirements.
        </p>
      </section>

      <PrintEstimate items={calculatedItems} totals={totals} />
    </>
  )
}
