// src/components/FilterBar.js
import React, { useState } from 'react';
import './FilterBar.css';

/**
 * @file FilterBar.js
 * @brief A filter component with options for cost, distance, and GPS visibility.
 * @author Roger Lu
 * @date Oct 30, 2024
 * @version 0.01 (pre-release)
 *
 * This component provides a user interface to filter parking options by cost and distance, 
 * and a toggle to show or hide GPS location.
 */

/**
 * A filter component with options for cost, distance, and GPS visibility.
 *
 * @component
 * @example
 * return (
 *   <FilterBar />
 * )
 */
const FilterBar = () => {
  /**
   * State to toggle GPS visibility.
   * @type {boolean}
   */
  const [showGPS, setShowGPS] = useState(false);

  /**
   * Toggles the visibility of the GPS location.
   * @function
   */
  const handleToggleGPS = () => {
    setShowGPS((prev) => !prev);
  };

  return (
    <div className="filter-bar">
      {/* Cost Filter */}
      <label>Cost Filter</label>
      <select>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      {/* Distance Filter */}
      <label>Distance To</label>
      <input type="range" min="1" max="20" />

      {/* Show GPS Location Toggle */}
      <label>Show GPS Location</label>
      <input
        type="checkbox"
        checked={showGPS}
        onChange={handleToggleGPS}
      />
      {showGPS && <span className="gps-coordinates">51.0447° N, 114.0719° W</span>}
    </div>
  );
};

export default FilterBar;
