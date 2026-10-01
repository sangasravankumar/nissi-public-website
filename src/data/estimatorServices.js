// The estimator dropdown options (exact list) mapped to rate keys in
// src/data/rates.js. Keeping this separate from the services grid lets
// each card pick the closest estimator option while rates stay in one file.

import { serviceRates } from './rates.js'
import { services } from './services.js'

export const ESTIMATOR_SERVICES = [
  { name: 'Aluminium Window', rateKey: 'aluminiumWindow' },
  { name: 'Aluminium Door', rateKey: 'aluminiumDoor' },
  { name: '2 Track Window', rateKey: 'twoTrackWindow' },
  { name: '3 Track Window', rateKey: 'threeTrackWindow' },
  { name: 'Sliding Window', rateKey: 'slidingWindow' },
  { name: 'Sliding Door', rateKey: 'slidingDoor' },
  { name: 'Aluminium Partition', rateKey: 'partition' },
  { name: 'Office Partition', rateKey: 'officePartition' },
  { name: 'Mosquito Mesh', rateKey: 'mesh' },
  { name: 'Custom Aluminium Work', rateKey: 'custom' },
]

export function getEstimatorRate(serviceName) {
  const option = ESTIMATOR_SERVICES.find((s) => s.name === serviceName)
  if (!option) return 0
  return serviceRates[option.rateKey] ?? 0
}

/** Map a service-card id to the estimator option it should preselect. */
export function estimatorNameForCardService(cardServiceId) {
  const service = services.find((s) => s.id === cardServiceId)
  if (!service) return null
  const option = ESTIMATOR_SERVICES.find((s) => s.name === service.estimatorName)
  return option ? option.name : null
}
