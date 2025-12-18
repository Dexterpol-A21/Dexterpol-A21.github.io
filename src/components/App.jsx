import React from 'react';
import Sidebar from './Sidebar';
import Projects from './Projects';

const App = () => {
  // Check if we are on a project page
  const path = window.location.pathname;
  const isGoodScribe = path.includes('goodscribe.html');
  const isGoodPins = path.includes('goodpins.html');
  const isGoodBoard = path.includes('goodboard.html');

  if (isGoodScribe) {
    const goodScribeItems = [
      { id: 'hero', icon: 'fa-home', label: 'Home' },
      { id: 'features', icon: 'fa-star', label: 'Features' },
      { id: 'architecture', icon: 'fa-sitemap', label: 'Architecture' },
      { id: 'tech-stack', icon: 'fa-layer-group', label: 'Tech Stack' },
      { id: 'engineering', icon: 'fa-cogs', label: 'Engineering' },
      { id: 'roadmap', icon: 'fa-route', label: 'Roadmap' },
      { id: 'installation', icon: 'fa-download', label: 'Installation' }
    ];
    return <Sidebar items={goodScribeItems} logoPath="../logo/portLogoLightNoBck.png" homeLink="../index.html" />;
  }

  if (isGoodBoard) {
    const goodBoardItems = [
      { id: 'hero', icon: 'fa-home', label: 'Home' },
      { id: 'features-overview', icon: 'fa-star', label: 'Features' },
      { id: 'architecture', icon: 'fa-sitemap', label: 'Architecture' },
      { id: 'tech-stack', icon: 'fa-layer-group', label: 'Tech Stack' },
      { id: 'engineering', icon: 'fa-cogs', label: 'Engineering' },
      { id: 'roadmap', icon: 'fa-route', label: 'Roadmap' },
      { id: 'installation', icon: 'fa-download', label: 'Installation' }
    ];
    return <Sidebar items={goodBoardItems} logoPath="../logo/portLogoLightNoBck.png" homeLink="../index.html" />;
  }

  if (isGoodPins) {
    const goodPinsItems = [
      { id: 'hero', icon: 'fa-home', label: 'Home' },
      { id: 'features', icon: 'fa-star', label: 'Features' },
      { id: 'architecture', icon: 'fa-sitemap', label: 'Architecture' },
      { id: 'tech-stack', icon: 'fa-layer-group', label: 'Tech Stack' },
      { id: 'engineering', icon: 'fa-cogs', label: 'Engineering' },
      { id: 'roadmap', icon: 'fa-route', label: 'Roadmap' },
      { id: 'installation', icon: 'fa-download', label: 'Installation' }
    ];
    return <Sidebar items={goodPinsItems} logoPath="../logo/portLogoLightNoBck.png" homeLink="../index.html" />;
  }

  // Default (Home Page)
  return (
    <>
      <Sidebar homeLink="#hero" />
      <Projects />
    </>
  );
};

export default App;
