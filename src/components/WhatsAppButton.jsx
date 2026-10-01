import { MessageCircle } from 'lucide-react'
import { business } from '../data/business.js'
import { openWhatsApp, buildSimpleMessage } from '../utils/whatsapp.js'
import '../styles/global.css'

export default function WhatsAppButton() {
  return (
    <button
      type="button"
      className="whatsapp-fab"
      aria-label="Chat with Nissi Aluminium Works on WhatsApp"
      onClick={() => openWhatsApp(business.whatsappNumber, buildSimpleMessage(business.name))}
    >
      <MessageCircle size={26} aria-hidden="true" />
      <span className="whatsapp-fab__tooltip" role="tooltip">
        Chat with Nissi Aluminium Works
      </span>
    </button>
  )
}
