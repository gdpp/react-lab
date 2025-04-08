import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BaseLayout } from './layout/BaseLayout.tsx'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BaseLayout>
      <App />
    </BaseLayout>
  </StrictMode>,
)
