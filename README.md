scrolls.js - smooth scrolling library.
==========
![npm](https://img.shields.io/npm/l/scrolls.js.svg?colorB=a8f)
[![npm](https://img.shields.io/npm/dt/scrolls.js.svg?colorB=a8f)](https://www.npmjs.com/package/scrolls.js)
![npm](https://img.shields.io/npm/v/scrolls.js.svg?colorB=a8f)
![Gzip Size](https://img.shields.io/badge/gzip%20size-524%20B-a8f.svg)

scrolls.js is a tiny library to help provide smooth scrolling functionality for those that do not currently use another solution.

Table of Contents
-----------------

1. [Basic Information](https://github.com/PurplestInc/scrolls.js#basic-information)
2. [Features](https://github.com/PurplestInc/scrolls.js#features)
3. [Getting Started](https://github.com/PurplestInc/scrolls.js#getting-started)
  1. [Installation](https://github.com/PurplestInc/scrolls.js#installation)
  2. [Usage](https://github.com/PurplestInc/scrolls.js#usage)
4. [Documentation](https://github.com/PurplestInc/scrolls.js#documentation)
5. [Changelog](https://github.com/PurplestInc/scrolls.js#changelog)
6. [License](https://github.com/PurplestInc/scrolls.js#license)

Basic Information
-----------------

The smooth scrolling library built to provide convenience.

Features
--------

* Number or selector-based targeting
* Allows a function to be called when scrolling has ended
* Customizeable duration of movement and offest position from the stop position
* Fully open source

Getting Started
---------------

### Installation

You can install the library via npm:

```javascript
npm i scrolls.js
```

or via CDN:


```html
<!-- Source Version -->
<script src="https://cdn.jsdelivr.net/npm/scrolls.js@1.0.2/scrolls.js"></script>
<!-- Minified Version -->
<script src="https://cdn.jsdelivr.net/npm/scrolls.js@1.0.2/scrolls.min.js"></script>
```

### Usage

```javascript
scrolls(0); // Scroll to the top of the page.

scrolls('h1', {
  durationOfMovement: 5000 // Defaults to 1000, or 1 second.
});
```

Documentation
-------------

```javascript
// Default customizeable variables.

let callback; // Function to execute after scrolling has ended
let durationOfMovement = 1000; // Duration of the scrolling
let offsetPosition = 0; // Distance to offset from the stop position

// Pass in an object as the second parameter to get customize the behavior.

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