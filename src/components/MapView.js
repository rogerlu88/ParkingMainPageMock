/**
 * @file MapView.js
 * @brief Displays a map view with parking spot markers using the Leaflet library.
 * @details This component renders an interactive map centered on Calgary, Canada,
 *          with markers to indicate parking spots. The map allows users to view 
 *          locations, zoom in/out, and see popups with parking information.
 * @date Oct 30, 2024
 * @version 0.01 (pre-release)
 * @author Roger Lu
 */

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './MapView.css';

/**
 * MapView component
 * 
 * @component
 * @returns {JSX.Element} A container for the interactive map displaying parking spot markers.
 * 
 * @example
 * return (
 *   <MapView />
 * )
 */
const MapView = () => {
  return (
    /**
     * MapContainer Component
     * 
     * @brief Renders the map and allows users to pan and zoom.
     * @param {Array} center - The initial center of the map, specified by latitude and longitude coordinates.
     * @param {number} zoom - The initial zoom level of the map.
     * @param {string} className - The CSS class for styling the map container.
     */
    <MapContainer center={[51.0447, -114.0719]} zoom={13} className="map-view">
      
      {/* 
        TileLayer Component
        @brief Displays the map tiles using OpenStreetMap.
        @param {string} url - URL template for the map tiles.
      */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {/* 
        Marker Component
        @brief Places a marker at the specified location on the map.
        @param {Array} position - The latitude and longitude coordinates for the marker location.
      */}
      <Marker position={[51.0447, -114.0719]}>
        
        {/* 
          Popup Component
          @brief Displays information about the parking spot when the marker is clicked.
        */}
        <Popup>Parking Spot 1</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapView;

