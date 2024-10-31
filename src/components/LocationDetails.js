/**
 * @file LocationDetails.js
 * @brief Displays location-related information for a selected parking spot.
 * @details This component provides details about a specific parking spot, including the 
 *          address, estimated travel time to Stampede Grounds, and available time.
 * @date Oct 30, 2024
 * @version 0.01 (pre-release)
 * @author Roger Lu
 */

import React from 'react';
import './LocationDetails.css';

/**
 * LocationDetails component
 * 
 * @component
 * @returns {JSX.Element} A container displaying location information such as address, travel time,
 *                        and availability.
 * 
 * @example
 * return (
 *   <LocationDetails />
 * )
 */
const LocationDetails = () => (
  /**
   * @brief Main container for displaying location details.
   * @class location-details
   */
  <div className="location-details">
    {/* Display the address of the parking spot */}
    <p>Address: 123 Main St.</p>

    {/* Display estimated time to Stampede Grounds */}
    <p>Time to Stampede: 15 mins</p>

    {/* Display available time for the parking spot */}
    <p>Available Time: 2 hrs</p>
  </div>
);

export default LocationDetails;
