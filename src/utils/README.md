# 🛠️ Utility funkce

Pomocné funkce pro validaci, formátování a API komunikaci.

## helpers.ts

### Validace
```typescript
import { isValidEmail, isValidPhone } from '@/utils/helpers'

isValidEmail('test@email.com')  // true
isValidPhone('+420123456789')   // true
```

### Formátování
```typescript
import { formatPhoneNumber, formatDate } from '@/utils/helpers'

formatPhoneNumber('+420 123 456 789')  // '+420123456789'
formatDate(new Date())  // '7. října 2024'
```

### Ostatní
```typescript
import { scrollToSection, truncateText, debounce } from '@/utils/helpers'

// Smooth scroll
scrollToSection('services')

// Zkrácení textu
truncateText('Velmi dlouhý text...', 50)

// Debounce
const debouncedSearch = debounce(searchFunction, 300)
```

## api.ts

### Kontaktní formulář
```typescript
import { sendContactForm } from '@/utils/api'

const result = await sendContactForm({
  name: 'Jan Novák',
  email: 'jan@email.cz',
  phone: '+420123456789',
  service: 'Elektroinstalace',
  message: 'Zpráva...'
})

if (result.success) {
  console.log(result.message)
}
```

### Newsletter
```typescript
import { subscribeToNewsletter } from '@/utils/api'

const result = await subscribeToNewsletter('email@example.com')
```

## Poznámky

- Všechny funkce jsou plně typované s TypeScript
- API funkce vrací `{ success: boolean, message: string }`
- Implementujte skutečné API volání dle potřeby

