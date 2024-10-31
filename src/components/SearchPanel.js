/**
 * @file SearchPanel.js
 * @brief Sidebar component for the Parking App's search and navigation panel.
 * @details This component contains filters, location details, parking spot options, 
 *          route details, and action buttons to help users search for parking spots 
 *          and view related details.
 * @date Oct 30, 2024
 * @version 0.01 (pre-release)
 * @author Roger Lu
 */

import React from 'react';
import FilterBar from './FilterBar';
import LocationDetails from './LocationDetails';
import ParkingSpotOptions from './ParkingSpotOptions';
import RouteDetails from './RouteDetails';
import ActionButtons from './ActionButtons';
import './SearchPanel.css';

/**
 * SearchPanel component
 * 
 * @component
 * @returns {JSX.Element} The sidebar container with various parking search and detail components.
 * 
 * @example
 * return (
 *   <SearchPanel />
 * )
 */
const SearchPanel = () => {
  return (
    /**
     * @brief Main container for the sidebar components including filters, location, and actions.
     * @class search-panel
     */
    <div className="search-panel">
      <FilterBar />
      <LocationDetails />
      <ParkingSpotOptions />
      <RouteDetails />
      <ActionButtons />
    </div>
  );
};

export default SearchPanel;
