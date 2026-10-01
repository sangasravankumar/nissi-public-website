// Pure calculation helpers for the SFT estimator.
// Every function defensively converts inputs to numbers and never
// returns NaN or Infinity — invalid input safely becomes 0.

export function toNumber(value) {
  const n = Number(value)
  return Number.isFinite(n) ? n : 0
}

/** Round to a fixed number of decimals, guarding against NaN/Infinity. */
export function roundTo(value, decimals = 2) {
  const n = toNumber(value)
  const factor = 10 ** decimals
  return Math.round(n * factor) / factor
}

/**
 * Convert feet + inches to decimal feet. Inches are clamped to 0-11,
 * feet clamped to >= 0.
 */
export function feetInchesToFeet(feet, inches) {
  const ft = Math.max(0, toNumber(feet))
  const inPart = Math.min(11, Math.max(0, toNumber(inches)))
  return roundTo(ft + inPart / 12, 4)
}

/**
 * Core estimator calculation.
 * @returns {{widthInFeet:number, heightInFeet:number, areaPerUnit:number,
 *            totalSft:number, amount:number}}
 */
export function calculateSFT(widthFeet, widthInches, heightFeet, heightInches, quantity, rate) {
  const widthInFeet = feetInchesToFeet(widthFeet, widthInches)
  const heightInFeet = feetInchesToFeet(heightFeet, heightInches)
  const qty = Math.max(1, Math.round(toNumber(quantity) || 1))
  const safeRate = Math.max(0, toNumber(rate))

  const areaPerUnit = roundTo(widthInFeet * heightInFeet, 4)
  const totalSft = roundTo(areaPerUnit * qty, 2)
  const amount = Math.round(totalSft * safeRate)

  return { widthInFeet, heightInFeet, areaPerUnit, totalSft, amount }
}

/** Sum up calculated items for the summary card. */
export function calculateTotals(items) {
  return items.reduce(
    (acc, item) => {
      const r = calculateSFT(
        item.widthFeet,
        item.widthInches,
        item.heightFeet,
        item.heightInches,
        item.quantity,
        item.rate
      )
      acc.totalSft = roundTo(acc.totalSft + r.totalSft, 2)
      acc.totalAmount += r.amount
      return acc
    },
    { totalSft: 0, totalAmount: 0 }
  )
}
