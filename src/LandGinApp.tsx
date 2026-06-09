import { RouterProvider } from 'react-router'

import { appRouter } from './app.router'

export const LandGinApp = () => {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}
