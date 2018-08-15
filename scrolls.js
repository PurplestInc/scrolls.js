/**
 * @fileoverview scrolls.js - smooth scrolling library.
 * @author Rob Dukarski <rob@purplest.com> (https://github.com/RobDukarski)
 * @copyright Purplest, Inc. 2018
 * @version 1.0.18
 */

'use strict';

/**
 * Initiates smooth scrolling event.
 *
 * @param {Any} selector - String or number to scroll to
 * @param {Object} options - Extra options
 */

const scrolls = (selector, options) => {
  let callback;                  // Function to execute when scrolling has ended
  let distanceToMove = 0;        // Distance of the scrolling
  let durationOfMovement = 1000; // Duration of the scrolling
  let element;                   // Element to scroll to
  let offsetDistance = 0;        // Distance to offset from the stop position
  let startPosition = 0;         // Where the scrolling begins
  let stopPosition = 0;          // Where the scrolling ends
  let timeStarted = 0;           // Time the scrolling began
  let timeElapsed = 0;           // Time spent scrolling

  /**
   * Gather options and setup variables.
   */

  if (options) {
    durationOfMovement = (options.durationOfMovement !== undefined) ? options.durationOfMovement : 1000;
    offsetDistance = (options.offsetDistance !== undefined) ? options.offsetDistance : 0;
    callback = (options.callback !== undefined && typeof options.callback === 'function') ? options.callback : undefined;
  }

  startPosition = window.scrollY || window.pageYOffset;

  switch (typeof selector) {
    case 'number':
      element = undefined;
      stopPosition = selector;
      break;
    case 'string':
      element = document.querySelector(selector);
      stopPosition = element.getBoundingClientRect().top + startPosition;
      break;
    default:
      element = undefined;
      stopPosition = 0;
      break;
  }

  distanceToMove = stopPosition - startPosition + offsetDistance;

  /**
   * Easing function to ensure the scrolling occurs smoothly.
   *
   * @param {Number} timeElapsed - Time spent scrolling
   * @param {Integer} startPosition - Where the scrolling begins
   * @param {Number} distanceToMove - Distance of the scrolling
   * @param {Number} durationOfMovement - Duration of the scrolling
   * @returns {Number} - Next position
   */

  const ease = (timeElapsed, startPosition, distanceToMove, durationOfMovement) => {
    timeElapsed /= durationOfMovement / 2;

    if (timeElapsed < 1) {
      return distanceToMove / 2 * timeElapsed * timeElapsed + startPosition;
    }

    timeElapsed--;

    return -distanceToMove / 2 * (timeElapsed * (timeElapsed - 2) - 1) + startPosition;
  };

  /**
   * Request Animation Frame Loop
   *
   * @param {Number} timeNow - Current time within scrolling event
   */

  const loop = (timeNow) => {
    if (!timeStarted) {
      timeStarted = timeNow;
    }

    timeElapsed = timeNow - timeStarted;

    window.scrollTo(0, ease(timeElapsed, startPosition, distanceToMove, durationOfMovement));

    if (timeElapsed < durationOfMovement) {
      window.requestAnimationFrame(loop);
    } else {
      window.scrollTo(0, startPosition + distanceToMove);

      if (callback && typeof callback === 'function') {
        callback();
      }

      timeStarted = false;
    }
  };

  /**
   * Start scrolling...
   */

  window.requestAnimationFrame(loop);
};

try {
  module.exports = exports = scrolls;
} catch (e) {}