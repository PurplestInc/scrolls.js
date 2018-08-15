scrolls.js - smooth scrolling library.
==========
[![license](https://img.shields.io/badge/license-MIT-a8f.svg)](https://github.com/PurplestInc/scrolls.js/blob/master/LICENSE)
[![npm downloads](https://img.shields.io/npm/dt/scrolls.js.svg?colorB=a8f)](https://www.npmjs.com/package/scrolls.js)
[![npm version](https://img.shields.io/npm/v/scrolls.js.svg?colorB=a8f)](https://www.npmjs.com/package/scrolls.js#installation)
[![gzip size](https://img.shields.io/badge/gzip%20size-453%20B-a8f.svg)](https://cdn.jsdelivr.net/npm/scrolls.js@1.0.18/scrolls.min.js?compression=gzip)

[scrolls.js](https://scrollsjs.com) is a tiny [library](https://cdn.jsdelivr.net/npm/scrolls.js@1.0.18/scrolls.min.js?compression=gzip) to help provide smooth scrolling functionality for those that do not currently use another solution.

Table of Contents
-----------------

1. [Basic Info](https://github.com/PurplestInc/scrolls.js#basic-info)
2. [Features](https://github.com/PurplestInc/scrolls.js#features)
3. [Getting Started](https://github.com/PurplestInc/scrolls.js#getting-started)
  1. [Installation](https://github.com/PurplestInc/scrolls.js#installation)
  2. [Usage](https://github.com/PurplestInc/scrolls.js#usage)
4. [Examples](https://github.com/PurplestInc/scrolls.js#examples)
5. [Documentation](https://github.com/PurplestInc/scrolls.js#documentation)
6. [Changelog](https://github.com/PurplestInc/scrolls.js#changelog)
7. [License](https://github.com/PurplestInc/scrolls.js#license)

Basic Info
-----------------

A smooth scrolling [library](https://cdn.jsdelivr.net/npm/scrolls.js@1.0.18/scrolls.min.js?compression=gzip) built to provide convenience for developers.

Visit the landing page at [scrollsjs.com](https://scrollsjs.com) to see a [demo](https://scrollsjs.com) of the [library](https://cdn.jsdelivr.net/npm/scrolls.js@1.0.18/scrolls.min.js?compression=gzip) in action!

If you like this project you may like our [durations.js](https://durationsjs.com) animated durations [library](https://github.com/PurplestInc/durations.js)!

Features
--------

* Plug-and-play (unless you have other JavaScript that uses `scrolls()` already...)
* Number or selector-based targeting
* Allows a function to be called when scrolling has ended
* Customizeable duration of movement and offset position from the stop position
* Fully open source

Getting Started
---------------

### Installation

You can install the [library](https://cdn.jsdelivr.net/npm/scrolls.js@1.0.18/scrolls.min.js?compression=gzip) via npm:

```javascript
npm i scrolls.js
```

or via CDN:


```html
<!-- Source Version -->
<script src="https://cdn.jsdelivr.net/npm/scrolls.js@1.0.18/scrolls.js"></script>
<!-- Minified Version -->
<script src="https://cdn.jsdelivr.net/npm/scrolls.js@1.0.18/scrolls.min.js"></script>
```

### Usage

```javascript
scrolls(0); // Scroll to the top of the page.

scrolls('h1', {
  durationOfMovement: 5000 // Defaults to 1000, or 1 second.
});
```

Examples
--------

Please see [scrollsjs.com](https://scrollsjs.com) for the examples and a [demo](https://scrollsjs.com) of them working on the website.

Documentation
-------------

```javascript
// Default customizeable variables via an object within the second parameter
// of the function.

let callback; // Function to execute after scrolling has ended
let durationOfMovement = 1000; // Duration of the scrolling
let offsetPosition = 0; // Distance to offset from the stop position

// Pass in an object as the second parameter to customize the behavior.

scrolls('h1', {
  callback: () => {
    console.log('Scrolling has finished.');
  }
});

// The first parameter could be a number or string and is used as the target of
// the scrolling event, for example 0 would be the top of the page, or h1 to
// scroll to the first h1 element.
```

Changelog
---------

Please see [CHANGELOG.md](https://github.com/PurplestInc/scrolls.js/blob/master/CHANGELOG.md) for details.

License
-------

MIT

Copyright (c) 2018 Purplest, Inc.