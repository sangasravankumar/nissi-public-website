import { useMemo } from 'react'
import { Trash2, ChevronDown } from 'lucide-react'
import { ESTIMATOR_SERVICES, getEstimatorRate } from '../data/estimatorServices.js'
import { calculateSFT } from '../utils/calculator.js'
import { formatINR } from '../utils/currency.js'

function findErrors(item) {
  const errors = []
  const wf = Number(item.widthFeet)
  const hf = Number(item.heightFeet)
  const wi = Number(item.widthInches)
  const hi = Number(item.heightInches)

  if (item.widthFeet === '' || !Number.isFinite(wf) || wf < 0) {
    errors.push({ field: 'width', message: 'Please enter a valid width.' })
  } else if (wf === 0 && wi === 0) {
    errors.push({ field: 'width', message: 'Width must be greater than zero.' })
  }

  if (item.heightFeet === '' || !Number.isFinite(hf) || hf < 0) {
    errors.push({ field: 'height', message: 'Please enter a valid height.' })
  } else if (hf === 0 && hi === 0) {
    errors.push({ field: 'height', message: 'Height must be greater than zero.' })
  }

  if (wi > 11 || hi > 11 || wi < 0 || hi < 0) {
    errors.push({ field: 'inches', message: 'Inches must be between 0 and 11.' })
  }

  if (!Number.isFinite(Number(item.quantity)) || Number(item.quantity) < 1) {
    errors.push({ field: 'quantity', message: 'Quantity must be at least 1.' })
  }

  return errors
}

export default function EstimatorItem({ item, index, canDelete, onUpdate, onDelete }) {
  const rate = getEstimatorRate(item.serviceName)

  const calc = useMemo(
    () =>
      calculateSFT(
        item.widthFeet,
        item.widthInches,
        item.heightFeet,
        item.heightInches,
        item.quantity,
        rate
      ),
    [item, rate]
  )

  const errors = useMemo(() => findErrors(item), [item])
  const widthError = errors.find((e) => e.field === 'width')
  const heightError = errors.find((e) => e.field === 'height')
  const inchesError = errors.find((e) => e.field === 'inches')
  const qtyError = errors.find((e) => e.field === 'quantity')
  const hasError = errors.length > 0

  const setField = (field, value) => onUpdate({ [field]: value })

  return (
    <article className="estimator-item">
      <header className="estimator-item__head">
        <h3 className="estimator-item__title">Item {index + 1}</h3>
        {canDelete && (
          <button
            type="button"
            className="estimator-item__delete"
            aria-label={'Delete item ' + (index + 1)}
            onClick={onDelete}
          >
            <Trash2 size={15} aria-hidden="true" />
            Delete
          </button>
        )}
      </header>

      <div className="estimator-item__grid">
        <div className="estimator-item__field estimator-item__field--full">
          <label htmlFor={'service-' + item.id}>Select Service</label>
          <div className="select-wrap">
            <select
              id={'service-' + item.id}
              value={item.serviceName}
              onChange={(e) => setField('serviceName', e.target.value)}
            >
              {ESTIMATOR_SERVICES.map((s) => (
                <option key={s.name} value={s.name}>
                  {s.name}
                </option>
              ))}
            </select>
            <ChevronDown size={16} aria-hidden="true" className="select-wrap__chevron" />
          </div>
        </div>

        <div className="estimator-item__field">
          <label htmlFor={'w-ft-' + item.id}>Width (feet)</label>
          <input
            id={'w-ft-' + item.id}
            type="number"
            inputMode="decimal"
            min="0"
            max="999"
            step="1"
            placeholder="e.g. 7"
            value={item.widthFeet}
            onChange={(e) => setField('widthFeet', e.target.value)}
            aria-invalid={Boolean(widthError)}
            aria-describedby={widthError ? 'w-err-' + item.id : undefined}
          />
          {widthError && (
            <p className="estimator-item__error" id={'w-err-' + item.id} role="alert">
              {widthError.message}
            </p>
          )}
        </div>

        <div className="estimator-item__field">
          <label htmlFor={'w-in-' + item.id}>Width (inches)</label>
          <input
            id={'w-in-' + item.id}
            type="number"
            inputMode="numeric"
            min="0"
            max="11"
            step="1"
            placeholder="0-11"
            value={item.widthInches}
            onChange={(e) => setField('widthInches', e.target.value)}
            aria-invalid={Boolean(inchesError)}
          />
        </div>

        <div className="estimator-item__field">
          <label htmlFor={'h-ft-' + item.id}>Height (feet)</label>
          <input
            id={'h-ft-' + item.id}
            type="number"
            inputMode="decimal"
            min="0"
            max="999"
            step="1"
            placeholder="e.g. 4"
            value={item.heightFeet}
            onChange={(e) => setField('heightFeet', e.target.value)}
            aria-invalid={Boolean(heightError)}
            aria-describedby={heightError ? 'h-err-' + item.id : undefined}
          />
          {heightError && (
            <p className="estimator-item__error" id={'h-err-' + item.id} role="alert">
              {heightError.message}
            </p>
          )}
        </div>

        <div className="estimator-item__field">
          <label htmlFor={'h-in-' + item.id}>Height (inches)</label>
          <input
            id={'h-in-' + item.id}
            type="number"
            inputMode="numeric"
            min="0"
            max="11"
            step="1"
            placeholder="0-11"
            value={item.heightInches}
            onChange={(e) => setField('heightInches', e.target.value)}
            aria-invalid={Boolean(inchesError)}
          />
        </div>

        <div className="estimator-item__field estimator-item__field--qty">
          <label htmlFor={'qty-' + item.id}>Quantity</label>
          <div className="qty-stepper">
            <button
              type="button"
              className="qty-stepper__btn"
              aria-label="Decrease quantity"
              onClick={() => onUpdate({ quantityDelta: -1 })}
              disabled={Number(item.quantity) <= 1}
            >
              −
            </button>
            <input
              id={'qty-' + item.id}
              className="qty-stepper__input"
              type="number"
              min="1"
              max="999"
              value={item.quantity}
              onChange={(e) => onUpdate({ quantity: e.target.value })}
              aria-invalid={Boolean(qtyError)}
            />
            <button
              type="button"
              className="qty-stepper__btn"
              aria-label="Increase quantity"
              onClick={() => onUpdate({ quantityDelta: 1 })}
            >
              +
            </button>
          </div>
          {qtyError && (
            <p className="estimator-item__error" role="alert">
              {qtyError.message}
            </p>
          )}
        </div>

        <div className="estimator-item__calc">
          <span className="estimator-item__calc-label">Rate / SFT</span>
          <span className="estimator-item__calc-value">₹{rate}</span>
        </div>

        <div className="estimator-item__calc">
          <span className="estimator-item__calc-label">Calculated SFT</span>
          <span className="estimator-item__calc-value">
            {hasError ? '—' : calc.totalSft.toFixed(2) + ' SFT'}
          </span>
        </div>

        <div className="estimator-item__calc estimator-item__calc--amount">
          <span className="estimator-item__calc-label">Estimated Amount</span>
          <span className="estimator-item__calc-value">
            {hasError ? '—' : formatINR(calc.amount)}
          </span>
        </div>
      </div>

      {inchesError && (
        <p className="estimator-item__error" role="alert">
          {inchesError.message}
        </p>
      )}
    </article>
  )
}
