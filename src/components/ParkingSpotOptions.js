/**
 * @file ParkingSpotOptions.js
 * @brief Displays a list of available parking spot options.
 * @details This component renders multiple parking spot options, each with its own 
 *          address and availability information.
 * @date Oct 30, 2024
 * @version 0.01 (pre-release)
 * @autor Roger Lu
 */

import React from 'react';
import './ParkingSpotOptions.css';

/**
 * ParkingSpotOptions component
 * 
 * @component
 * @returns {JSX.Element} A container with a list of parking spot options, each displaying 
 *                        a name, address, and availability.
 * 
 * @example
 * return (
 *   <ParkingSpotOptions />
 * )
 */
const ParkingSpotOptions = () => {
  return (
    /**
     * @brief Main container for displaying multiple parking spot options.
     * @class parking-options
     */
    <div className="parking-options">
      {/* Generate multiple parking spot options */}
      {[1, 2, 3, 4].map((spot) => (
        /**
         * @brief Individual parking spot container.
         * @class parking-spot
         * @key {number} spot - Unique identifier for each parking spot.
         */
        <div key={spot} className="parking-spot">
          <h3>Parking Spot {spot}</h3>
          <p>Address: 123 Main St.</p>
          <p>Availability: 2 hrs</p>
        </div>
      ))}
    </div>
  );
};

export default ParkingSpotOptions;

