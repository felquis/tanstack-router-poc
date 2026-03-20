import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import './App.css'

// Create the router instance
const router = createRouter({
  routeTree,
  defaultPreload: 'intent', // Prefetch links on intent for faster navigation
})

// Register the router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

function App() {
  return <RouterProvider router={router} />
}

export default App
