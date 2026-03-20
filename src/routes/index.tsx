import { createFileRoute } from '@tanstack/react-router'

// eslint-disable-next-line react-refresh/only-export-components
export const Route = createFileRoute('/')({
  component: LazyIndexComponent,
})

function LazyIndexComponent() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-green-600">Welcome Home! 🏠</h1>
      <p className="mt-4 text-gray-600">
        This is your home page (statically loaded). Navigate to the About page
        and check the Network tab to see route code splitting in action.
      </p>
      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <p className="font-semibold">Performance Tip:</p>
        <p className="text-sm">
          Move your mouse over the "About" link above to trigger prefetch on
          intent (faster navigation feel).
        </p>
      </div>
    </div>
  )
}
