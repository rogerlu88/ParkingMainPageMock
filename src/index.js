/**
 * @file index.js
 * @brief Entry point for the Parking App React application.
 * @details This file initializes the root React component, rendering the App component
 *          within the DOM element with the ID "root". It also includes optional performance
 *          measurement functionality.
 * @date Oct 30, 2024
 * @version 0.01 (pre-release)
 * @autor Roger Lu
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/**
 * @constant root
 * @type {ReactDOM.Root}
 * @brief Root element for rendering the React application.
 * @details Initializes the root element using `ReactDOM.createRoot` and attaches it
 *          to the HTML element with the ID "root".
 */
const root = ReactDOM.createRoot(document.getElementById('root'));

/**
 * Renders the App component within a StrictMode wrapper for enhanced checks and warnings.
 *
 * @function render
 * @memberof root
 * @returns {void}
 */
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/**
 * Optional performance measurement
 * @function reportWebVitals
 * @param {function} [console.log] - Function to log performance metrics to the console.
 * @details Enables performance monitoring in the app. Can pass a custom function to
 *          log or send metrics to an analytics endpoint.
 */
reportWebVitals();
