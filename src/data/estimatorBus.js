// Tiny pub/sub channel so a Services photo card can preselect its service
// in the Estimator.
// Keeps estimator state isolated in Estimator.jsx (no global store needed).

let selectedServiceId = null
const listeners = new Set()

export function selectEstimatorService(serviceId) {
  selectedServiceId = serviceId
  listeners.forEach((fn) => fn(serviceId))
}

export function subscribeToServiceSelection(fn) {
  listeners.add(fn)
  return () => listeners.delete(fn)
}

export function consumeSelectedService() {
  const id = selectedServiceId
  selectedServiceId = null
  return id
}
