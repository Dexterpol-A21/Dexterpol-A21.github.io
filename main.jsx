import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './src/components/App'
import Footer from './src/components/Footer'
import TechStack from './src/components/TechStack'
import ProjectHero from './src/components/ProjectHero'
import ProjectOverview from './src/components/ProjectOverview'
import BentoGrid from './src/components/BentoGrid'

// Find a container to mount React
const rootElement = document.getElementById('react-root')
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

// Find a container to mount Footer
const footerElement = document.getElementById('react-footer')
if (footerElement) {
  ReactDOM.createRoot(footerElement).render(
    <React.StrictMode>
      <Footer />
    </React.StrictMode>
  )
}

// Find a container to mount TechStack
const techStackElement = document.getElementById('react-tech-stack')
if (techStackElement) {
  ReactDOM.createRoot(techStackElement).render(
    <React.StrictMode>
      <TechStack />
    </React.StrictMode>
  )
}

// Find a container to mount ProjectHero
const heroElement = document.getElementById('react-project-hero')
if (heroElement) {
  const props = window.projectHeroProps || {}
  ReactDOM.createRoot(heroElement).render(
    <React.StrictMode>
      <ProjectHero {...props} />
    </React.StrictMode>
  )
}

// Find a container to mount ProjectOverview
const overviewElement = document.getElementById('react-project-overview')
if (overviewElement) {
  const props = window.projectOverviewProps || {}
  ReactDOM.createRoot(overviewElement).render(
    <React.StrictMode>
      <ProjectOverview {...props} />
    </React.StrictMode>
  )
}

// Find a container to mount BentoGrid (Features)
const featuresElement = document.getElementById('react-project-features')
if (featuresElement) {
  const props = window.projectFeaturesProps || {}
  ReactDOM.createRoot(featuresElement).render(
    <React.StrictMode>
      <BentoGrid {...props} />
    </React.StrictMode>
  )
}

console.log('Vite + React initialized')