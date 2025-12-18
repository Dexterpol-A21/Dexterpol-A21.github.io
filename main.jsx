import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './src/components/App'
import Footer from './src/components/Footer'
import TechStack from './src/components/TechStack'
import ProjectHero from './src/components/ProjectHero'
import ProjectOverview from './src/components/ProjectOverview'
import BentoGrid from './src/components/BentoGrid'
import FeaturesOverview from './src/components/FeaturesOverview'
import Architecture from './src/components/Architecture'
import Engineering from './src/components/Engineering'
import Roadmap from './src/components/Roadmap'
import Installation from './src/components/Installation'
import { 
  goodBoardFeatures, 
  goodBoardOverview, 
  goodBoardArchitecture, 
  goodBoardEngineering, 
  goodBoardRoadmap, 
  goodBoardInstallation 
} from './src/projects/goodBoard/data'
import {
  goodScribeFeatures,
  goodScribeOverview,
  goodScribeArchitecture,
  goodScribeEngineering,
  goodScribeRoadmap,
  goodScribeInstallation
} from './src/projects/goodScribe/data'
import {
  goodPinsFeatures,
  goodPinsOverview,
  goodPinsArchitecture,
  goodPinsEngineering,
  goodPinsRoadmap,
  goodPinsInstallation
} from './src/projects/goodPins/data'

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
  const isGoodScribe = window.location.pathname.includes('goodscribe.html');
  const isGoodPins = window.location.pathname.includes('goodpins.html');
  
  let props = window.projectFeaturesProps || {};
  if (isGoodScribe) props = goodScribeFeatures;
  if (isGoodPins) props = goodPinsFeatures;
  
  ReactDOM.createRoot(featuresElement).render(
    <React.StrictMode>
      <BentoGrid {...props} />
    </React.StrictMode>
  )
}

// Find a container to mount FeaturesOverview
const featuresOverviewElement = document.getElementById('react-features-overview')
if (featuresOverviewElement) {
  // Check if we are on GoodBoard page to use its data, otherwise fallback to window props (for other pages)
  const isGoodBoard = window.location.pathname.includes('goodboard.html');
  const isGoodScribe = window.location.pathname.includes('goodscribe.html');
  const isGoodPins = window.location.pathname.includes('goodpins.html');
  
  let props = window.featuresOverviewProps || {};
  if (isGoodBoard) props = goodBoardOverview;
  if (isGoodScribe) props = goodScribeOverview;
  if (isGoodPins) props = goodPinsOverview;
  
  ReactDOM.createRoot(featuresOverviewElement).render(
    <React.StrictMode>
      <FeaturesOverview {...props} />
    </React.StrictMode>
  )
}

// Find a container to mount GoodBoardFeatures (using generic BentoGrid with data)
const goodBoardFeaturesElement = document.getElementById('react-goodboard-features')
if (goodBoardFeaturesElement) {
  ReactDOM.createRoot(goodBoardFeaturesElement).render(
    <React.StrictMode>
      <BentoGrid {...goodBoardFeatures} />
    </React.StrictMode>
  )
}

// Find a container to mount Architecture
const architectureElement = document.getElementById('react-architecture')
if (architectureElement) {
  // Logic to select data based on page could be added here if needed for other projects
  const isGoodBoard = window.location.pathname.includes('goodboard.html');
  const isGoodScribe = window.location.pathname.includes('goodscribe.html');
  const isGoodPins = window.location.pathname.includes('goodpins.html');
  
  let props = null;
  if (isGoodBoard) props = goodBoardArchitecture;
  if (isGoodScribe) props = goodScribeArchitecture;
  if (isGoodPins) props = goodPinsArchitecture;

  if (props) {
    ReactDOM.createRoot(architectureElement).render(
      <React.StrictMode>
        <Architecture {...props} />
      </React.StrictMode>
    )
  }
}

// Find a container to mount Engineering
const engineeringElement = document.getElementById('react-engineering')
if (engineeringElement) {
  const isGoodBoard = window.location.pathname.includes('goodboard.html');
  const isGoodScribe = window.location.pathname.includes('goodscribe.html');
  const isGoodPins = window.location.pathname.includes('goodpins.html');
  
  let props = null;
  if (isGoodBoard) props = goodBoardEngineering;
  if (isGoodScribe) props = goodScribeEngineering;
  if (isGoodPins) props = goodPinsEngineering;

  if (props) {
    ReactDOM.createRoot(engineeringElement).render(
      <React.StrictMode>
        <Engineering {...props} />
      </React.StrictMode>
    )
  }
}

// Find a container to mount Roadmap
const roadmapElement = document.getElementById('react-roadmap')
if (roadmapElement) {
  const isGoodBoard = window.location.pathname.includes('goodboard.html');
  const isGoodScribe = window.location.pathname.includes('goodscribe.html');
  const isGoodPins = window.location.pathname.includes('goodpins.html');
  
  let props = null;
  if (isGoodBoard) props = goodBoardRoadmap;
  if (isGoodScribe) props = goodScribeRoadmap;
  if (isGoodPins) props = goodPinsRoadmap;

  if (props) {
    ReactDOM.createRoot(roadmapElement).render(
      <React.StrictMode>
        <Roadmap {...props} />
      </React.StrictMode>
    )
  }
}

// Find a container to mount Installation
const installationElement = document.getElementById('react-installation')
if (installationElement) {
  const isGoodBoard = window.location.pathname.includes('goodboard.html');
  const isGoodScribe = window.location.pathname.includes('goodscribe.html');
  const isGoodPins = window.location.pathname.includes('goodpins.html');
  
  let props = null;
  if (isGoodBoard) props = goodBoardInstallation;
  if (isGoodScribe) props = goodScribeInstallation;
  if (isGoodPins) props = goodPinsInstallation;

  if (props) {
    ReactDOM.createRoot(installationElement).render(
      <React.StrictMode>
        <Installation {...props} />
      </React.StrictMode>
    )
  }
}

console.log('Vite + React initialized')