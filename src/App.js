/**
 * @file App.js
 * @brief Main application component for the Parking App.
 * @details This component serves as the root layout for the application, containing 
 *          the map view and the search panel components.
 * @date Oct 30, 2024
 * @version 0.01 (pre-release)
 * @author Roger Lu
 */

import React from 'react';
import MapView from './components/MapView';
import SearchPanel from './components/SearchPanel';
import './App.css';

/**
 * App component
 * 
 * @component
 * @returns {JSX.Element} The main layout containing the MapView and SearchPanel components.
 * 
 * @example
 * return (
 *   <App />
 * )
 */
function App() {
  return (
    /**
     * @brief Main container for the MapView and SearchPanel components.
     * @class app-container
     */
    <div className="app-container">
      <MapView />
      <SearchPanel />
    </div>
  );
}

export default App;
