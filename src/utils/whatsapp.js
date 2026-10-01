// WhatsApp enquiry message builder.
// The phone number is public business contact info — no secrets here.

export function buildWhatsAppUrl(number, message) {
  return 'https://wa.me/' + number + '?text=' + encodeURIComponent(message)
}

export function openWhatsApp(number, message) {
  window.open(buildWhatsAppUrl(number, message), '_blank', 'noopener')
}

/**
 * Build the multi-item enquiry message from estimator items.
 * @param {Array} items calculated estimator items
 * @param {string} businessName
 */
export function buildEstimateMessage(items, businessName) {
  const lines = []
  lines.push('Hello ' + businessName + ',')
  lines.push('')
  lines.push('I would like to get a quotation.')

  const hasService = items.length > 0 && items[0].serviceName
  if (hasService) {
    lines.push('')
    lines.push('Service: ' + items[0].serviceName)
  }

  if (items.length > 0) {
    lines.push('')
    lines.push('Items:')
    items.forEach((item, index) => {
      const w = item.widthFeet + ' ft × ' + item.heightFeet + ' ft'
      lines.push('')
      lines.push(index + 1 + '. ' + w)
      lines.push('Quantity: ' + item.quantity)
      lines.push('Area: ' + item.totalSft + ' SFT')
      lines.push('Rate: ₹' + item.rate + '/SFT')
      lines.push('Estimated Amount: ₹' + item.amount.toLocaleString('en-IN'))
    })

    const totalSft = items.reduce((sum, item) => sum + item.totalSft, 0)
    const totalAmount = items.reduce((sum, item) => sum + item.amount, 0)
    lines.push('')
    lines.push('Total SFT: ' + Math.round(totalSft * 100) / 100 + ' SFT')
    lines.push('Estimated Cost: ₹' + totalAmount.toLocaleString('en-IN'))
  }

  lines.push('')
  lines.push('Please contact me for the final quotation.')
  lines.push('')
  lines.push('Thank you.')

  return lines.join('\n')
}

/** Short message for generic WhatsApp buttons (no estimate attached). */
export function buildSimpleMessage(businessName) {
  return 'Hello ' + businessName + ', I would like to enquire about your aluminium works services.'
}
