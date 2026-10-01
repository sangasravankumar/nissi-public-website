import { useEffect, useState } from 'react'
import { Plus, Info } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import EstimatorItem from './EstimatorItem.jsx'
import EstimatorSummary from './EstimatorSummary.jsx'
import { consumeSelectedService, subscribeToServiceSelection } from '../data/estimatorBus.js'
import { estimatorNameForCardService } from '../data/estimatorServices.js'
import '../styles/estimator.css'

const DEFAULT_SERVICE = 'Aluminium Window'
const MAX_QUANTITY = 999

let nextItemId = 1

function createItem(serviceName) {
  return {
    id: 'item-' + nextItemId++,
    serviceName,
    widthFeet: '',
    widthInches: '0',
    heightFeet: '',
    heightInches: '0',
    quantity: 1,
  }
}

function clampQuantity(qty) {
  const n = Math.round(Number(qty) || 0)
  return Math.min(MAX_QUANTITY, Math.max(1, n))
}

export default function Estimator() {
  // Consume any card click that happened before this section mounted.
  const [items, setItems] = useState(() => [
    createItem(consumeSelectedService() || DEFAULT_SERVICE),
  ])

  // Live subscription: a service card click preselects that service.
  useEffect(() => {
    const unsubscribe = subscribeToServiceSelection((serviceId) => {
      const name = estimatorNameForCardService(serviceId)
      if (!name) return
      setItems([createItem(name)])
    })
    return unsubscribe
  }, [])

  const addItem = () => {
    setItems((prev) => [...prev, createItem(prev[prev.length - 1]?.serviceName || DEFAULT_SERVICE)])
  }

  const updateItem = (id, updates) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item
        const next = { ...item, ...updates }
        delete next.quantityDelta
        if (updates.quantityDelta !== undefined) {
          next.quantity = clampQuantity(item.quantity + updates.quantityDelta)
        } else if (updates.quantity !== undefined) {
          next.quantity = clampQuantity(updates.quantity)
        }
        return next
      })
    )
  }

  const deleteItem = (id) => {
    setItems((prev) => {
      const remaining = prev.filter((item) => item.id !== id)
      return remaining.length > 0 ? remaining : [createItem(DEFAULT_SERVICE)]
    })
  }

  const clearItems = () => {
    setItems([createItem(DEFAULT_SERVICE)])
  }

  const hasAnyInput = items.some(
    (item) => item.widthFeet !== '' || item.heightFeet !== '' || item.quantity !== 1
  )

  return (
    <section id="estimator" className="estimator section section--alt">
      <div className="container">
        <SectionHeading
          kicker="Instant Estimate"
          title="Live SFT Dimension & Cost Estimator"
          subtitle="Enter your custom dimensions to calculate the approximate area and cost."
        />

        <div className="estimator__note">
          <Info size={18} aria-hidden="true" />
          <p>
            Estimate only. Final price may vary based on profile, glass, hardware,
            design, material and site requirements.
          </p>
        </div>

        <div className="estimator__items">
          {items.map((item, index) => (
            <EstimatorItem
              key={item.id}
              item={item}
              index={index}
              canDelete={items.length > 1}
              onUpdate={(updates) => updateItem(item.id, updates)}
              onDelete={() => deleteItem(item.id)}
            />
          ))}
        </div>

        <div className="estimator__actions-row">
          <button type="button" className="btn btn--outline" onClick={addItem}>
            <Plus size={17} aria-hidden="true" />
            Add Another Dimension
          </button>
          <p className="estimator__rate-note">Rate may change based on material and final requirements.</p>
        </div>

        <EstimatorSummary items={items} onClear={clearItems} canClear={hasAnyInput || items.length > 1} />
      </div>
    </section>
  )
}
