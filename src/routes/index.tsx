import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

type PreferenceFormData = {
  nickName: string
  favoriteColor: string
  cityName: string
  stateName: string
  favoriteFood: string
}

const STORAGE_KEY = 'simple-things-preferences'

// eslint-disable-next-line react-refresh/only-export-components
export const Route = createFileRoute('/')({
  component: LazyIndexComponent,
})

function LazyIndexComponent() {
  const [preferences] = useState<PreferenceFormData | null>(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (!saved) return null
    try {
      const parsed = JSON.parse(saved) as Partial<PreferenceFormData>
      return {
        nickName: parsed.nickName ?? '',
        favoriteColor: parsed.favoriteColor ?? '',
        cityName: parsed.cityName ?? '',
        stateName: parsed.stateName ?? '',
        favoriteFood: parsed.favoriteFood ?? '',
      }
    } catch {
      localStorage.removeItem(STORAGE_KEY)
      return null
    }
  })

  const preferenceItems = [
    { label: 'Nickname', value: preferences?.nickName ?? '' },
    { label: 'Favorite color', value: preferences?.favoriteColor ?? '' },
    { label: 'City', value: preferences?.cityName ?? '' },
    { label: 'State', value: preferences?.stateName ?? '' },
    { label: 'Favorite food', value: preferences?.favoriteFood ?? '' },
  ]

  const hasAnyValue = preferenceItems.some((item) => item.value.trim().length > 0)

  return (
    <section className="home-page">
      <h1 className="page-title">
        Simple Things That Make Our Day Better
      </h1>
      <p className="page-text">
        Some days are transformed by little moments: a favorite color, a good meal,
        and places that feel like home.
      </p>

      <div className="home-preferences">
        <h2 className="home-preferences-title">Your Saved Preferences</h2>

        {hasAnyValue ? (
          <ul className="home-preferences-list">
            {preferenceItems.map((item) => (
              <li key={item.label} className="home-preferences-item">
                <span className="home-preferences-label">{item.label}:</span>
                <span className="home-preferences-value">{item.value || 'Not set'}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="home-preferences-empty">
            No preferences saved yet. Open the form page and click Save answers.
          </p>
        )}
      </div>
    </section>
  )
}
