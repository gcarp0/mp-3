import { createRoot } from 'react-dom/client'

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(<App />)
// strict mode is only for testing, no need
// done