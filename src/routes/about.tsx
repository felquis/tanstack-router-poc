import { createFileRoute } from '@tanstack/react-router'

// eslint-disable-next-line react-refresh/only-export-components
export const Route = createFileRoute('/about')({
  component: LazyAboutComponent,
})

function LazyAboutComponent() {
  return (
    <div className="about-page">
      <h1 className="page-title">About</h1>
      <p className="page-text">
        This space celebrates simple things that make our day lighter, calmer,
        and more joyful.
      </p>
      <div className="about-sections">
        <div className="about-box about-box-tech">
          <p className="about-box-title">Little Joys:</p>
          <ul className="about-list">
            <li>A favorite song on the way to work</li>
            <li>A cup of coffee made just right</li>
            <li>A short walk in fresh air</li>
            <li>A message from someone you care about</li>
            <li>A meal that feels like comfort</li>
          </ul>
        </div>
        <div className="about-box about-box-security">
          <p className="about-box-title">Everyday Habits That Help:</p>
          <ul className="about-list">
            <li>Start the day with one clear priority</li>
            <li>Drink water before your next task</li>
            <li>Take a pause between long work sessions</li>
            <li>Notice one good thing before sleeping</li>
            <li>Keep weekends for rest when possible</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
