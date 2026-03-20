import { createRootRoute, Outlet, Link } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

// eslint-disable-next-line react-refresh/only-export-components
export const Route = createRootRoute({
  component: () => (
    <div className="app-shell">
      <header className="app-header">
        <div className="app-header-inner">
          <Link to="/" className="app-brand">
            Daylift
          </Link>

          <details className="app-mobile-menu">
            <summary className="app-mobile-menu-trigger">
              Menu
            </summary>
            <nav className="app-mobile-nav">
              <Link
                to="/"
                className="app-mobile-nav-link"
                activeProps={{ className: 'app-mobile-nav-link app-mobile-nav-link-active' }}
              >
                Home
              </Link>
              <Link
                to="/form"
                className="app-mobile-nav-link"
                activeProps={{ className: 'app-mobile-nav-link app-mobile-nav-link-active' }}
              >
                My Preferences
              </Link>
              <Link
                to="/about"
                className="app-mobile-nav-link"
                activeProps={{ className: 'app-mobile-nav-link app-mobile-nav-link-active' }}
              >
                About
              </Link>
            </nav>
          </details>

          <nav className="app-nav">
            <Link
              to="/"
              className="app-nav-link"
              activeProps={{ className: 'app-nav-link app-nav-link-active' }}
            >
              Home
            </Link>
            <Link
              to="/form"
              className="app-nav-link"
              activeProps={{ className: 'app-nav-link app-nav-link-active' }}
            >
              My Preferenreces
            </Link>
            <Link
              to="/about"
              className="app-nav-link"
              activeProps={{ className: 'app-nav-link app-nav-link-active' }}
            >
              About
            </Link>
          </nav>
        </div>
      </header>

      <main className="app-main">
        <Outlet />
      </main>

      <footer className="app-footer">
        <div className="app-footer-inner">
          <a
            href="https://x.com/imfelquis"
            target="_blank"
            rel="noreferrer"
            className="app-footer-link"
          >
            @imfelquis
          </a>
        </div>
      </footer>

      <TanStackRouterDevtools />
    </div>
  ),
})
