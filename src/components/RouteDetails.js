/**
 * @file RouteDetails.js
 * @brief Displays route-related information for the selected parking spot.
 * @details This component provides details about the route to a parking spot, including 
 *          cost, travel time, and GPS coordinates (latitude and longitude).
 * @date Oct 30, 2024
 * @version 0.01 (pre-release)
 * @author Roger Lu
 */

import React from 'react';
import './RouteDetails.css';

/**
 * RouteDetails component
 * 
 * @component
 * @returns {JSX.Element} A container with route information including cost, travel time, and coordinates.
 * 
 * @example
 * return (
 *   <RouteDetails />
 * )
 */
const RouteDetails = () => (
  /**
   * @brief Main container for displaying route details.
   * @class route-details
   */
  <div className="route-details">
    {/* Display cost information */}
    <p>Cost: $10</p>

    {/* Display estimated travel time */}
    <p>Travel Time: 10 mins</p>

    {/* Display longitude for GPS coordinates */}
    <p>Longitude: 114.0719</p>

    {/* Display latitude for GPS coordinates */}
    <p>Latitude: 51.0447</p>
  </div>
);

export default RouteDetails;

