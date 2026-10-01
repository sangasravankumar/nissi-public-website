// Indian Rupee formatting — always via Intl.NumberFormat, never manual commas.

const inrFormatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
})

/** Format a number as ₹12,345. Returns ₹0 for invalid input. */
export function formatINR(value) {
  const n = Number(value)
  return inrFormatter.format(Number.isFinite(n) ? n : 0)
}
