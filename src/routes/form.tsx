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

const defaultFormData: PreferenceFormData = {
  nickName: '',
  favoriteColor: '',
  cityName: '',
  stateName: '',
  favoriteFood: '',
}

// eslint-disable-next-line react-refresh/only-export-components
export const Route = createFileRoute('/form')({
  component: FormComponent,
})

function FormComponent() {
  const [formData, setFormData] = useState<PreferenceFormData>(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (!saved) return defaultFormData
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
      return defaultFormData
    }
  })
  const [saved, setSaved] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setSaved(false)
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
    setSaved(true)
  }

  return (
    <div className="form-page">
      <h1 className="page-title">Simple Things</h1>
      <p className="page-text form-intro-text">
        Share small things that make your day better.
      </p>

      {saved && (
        <div className="form-success-alert" role="status" aria-live="polite">
          <p className="form-success-text">Preferences saved successfully.</p>
        </div>
      )}

      <form className="form-card" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="nickName" className="form-label">
            What do your friends call you?
          </label>
          <input
            type="text"
            id="nickName"
            name="nickName"
            value={formData.nickName}
            onChange={handleChange}
            className="form-input"
            placeholder="Your favorite nickname"
          />
        </div>

        <div className="form-field">
          <label htmlFor="favoriteColor" className="form-label">
            Which color lifts your mood?
          </label>
          <input
            type="text"
            id="favoriteColor"
            name="favoriteColor"
            value={formData.favoriteColor}
            onChange={handleChange}
            className="form-input"
            placeholder="For example: sky blue"
          />
        </div>

        <div className="form-field">
          <label htmlFor="cityName" className="form-label">
            Where do you feel most at home?
          </label>
          <input
            type="text"
            id="cityName"
            name="cityName"
            value={formData.cityName}
            onChange={handleChange}
            className="form-input"
            placeholder="City name"
          />
        </div>

        <div className="form-field">
          <label htmlFor="stateName" className="form-label">
            What state is that in?
          </label>
          <input
            type="text"
            id="stateName"
            name="stateName"
            value={formData.stateName}
            onChange={handleChange}
            className="form-input"
            placeholder="State name"
          />
        </div>

        <div className="form-field">
          <label htmlFor="favoriteFood" className="form-label">
            What food always makes your day better?
          </label>
          <input
            type="text"
            id="favoriteFood"
            name="favoriteFood"
            value={formData.favoriteFood}
            onChange={handleChange}
            className="form-input"
            placeholder="Your comfort food"
          />
        </div>

        <button type="submit" className="form-submit-button">
          Save answers
        </button>
      </form>
    </div>
  )
}
