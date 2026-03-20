import { createRootRoute, Outlet, Link } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

// eslint-disable-next-line react-refresh/only-export-components
export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-4 flex gap-4 bg-blue-50 border-b">
        <Link
          to="/"
          activeProps={{
            className: 'font-bold text-blue-600',
          }}
          className="text-blue-500 hover:text-blue-700"
        >
          🏠 Home
        </Link>
        <Link
          to="/form"
          activeProps={{
            className: 'font-bold text-blue-600',
          }}
          className="text-blue-500 hover:text-blue-700"
        >
          📋 Formulário
        </Link>
        <Link
          to="/about"
          activeProps={{
            className: 'font-bold text-blue-600',
          }}
          className="text-blue-500 hover:text-blue-700"
        >
          📖 About
        </Link>
      </div>
      <main className="p-4">
        <Outlet />
      </main>
      <TanStackRouterDevtools />
    </>
  ),
})
