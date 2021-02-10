import React, { lazy, Suspense } from 'react'

const ButtonReact = lazy(() => import('../core/ButtonReact.jsx'))

function AppReact({ counter, onChange }) {
  return (
    <Suspense fallback={null}>
      <ButtonReact counter={counter} onClick={onChange} />
    </Suspense>
  )
}

export default AppReact
