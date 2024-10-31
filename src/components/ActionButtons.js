/**
 * @file ActionButtons.js
 * @brief Renders action buttons for selecting and saving a parking spot.
 * @details This component provides two main action buttons: "Select" for choosing a 
 *          parking spot and "Save to Favorites" for saving the selected spot.
 * @date Oct 30, 2024
 * @version 0.01 (pre-release)
 * @author Roger Lu
 */

import React from 'react';
import './ActionButtons.css';

/**
 * ActionButtons component.
 * 
 * @component
 * @returns {JSX.Element} A div container with "Select" and "Save to Favorites" buttons.
 * 
 * @example
 * return (
 *   <ActionButtons />
 * )
 */
const ActionButtons = () => (
  <div className="action-buttons">
    {/* 
      @brief Select button for choosing a parking spot.
      @class select-btn
    */}
    <button className="select-btn">Select</button>
    
    {/* 
      @brief Save button for saving the parking spot to favorites.
      @class save-btn
    */}
    <button className="save-btn">Save to Favorites</button>
  </div>
);

export default ActionButtons;
