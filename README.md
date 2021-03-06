# Midnight.js (*for Meteor*)

This is a fork of the popular Midnight.js JQuery plugin as a Meteor Package. The plugin updates a fixed header as you scroll, so you always have a header that looks great with the content below it.

**[Check out the official demo](http://aerolab.github.io/midnight.js/)**

## Quick start

Create your fixed nav (or header) as you typically would. For an example, something like this (you can use whatever markup suits you)

```html
<nav class="fixed">
  <a class="logo">Logo</a>
</nav>
```

**Make sure the header works well with position:fixed**


After that, take any sections of your page that need a different nav and add **data-midnight="your-class"** to it, where *your-class* is the class you are going to use to style that header. If you don't use the property or just leave it blank, the .default header will be used for that section.

```html
<section data-midnight="white">
  <h1>A section with a dark background, so a white nav would look better here</h1>
</section>

<div data-midnight="blue">
  <h1>A blue nav looks better here</h1>
</div>

<footer>
  <h1>This will just use the default header</h1>
</footer>
```

Multiple headers as necessary will be created based on the classes declared in these sections.

You can style it in your css using the class .midnightHeader.your-class (replace your-class with the correct one). For example:


```css
/* Example markup for header element */
nav.fixed {
  position: fixed;
  height: 20px; /* must have some height */ 
}

.midnightHeader.default {
  background: none;
  color: black;
}
.midnightHeader.white {
  background: white;
  color: black;
}
.midnightHeader.blue {
  background: blue;
  color: white;
}
.midnightHeader.red {
  background: red;
  color: white;
}
```


To initialize, just add the midnight package and initialize it

```sh
meteor add kyleking:midnightjs
```

```js
// Start midnight
Template.YourTemplate.onRendered(function() {
	// Change this to the correct selector.
  return $('nav.fixed').midnight();
});
```


## Using custom markup

Let's say you want to create a special header with a butterfly in it, which needs some extra markup. You need to do two things:

* First, add a div with the class **.midnightHeader.default** . This will be the header that's used for every section (that doesn't have a specific style) and duplicated as necessary, automatically replacing .default with the correct class.

* Then, add a div with the class **.midnightHeader.your-class** (like .butterfly). This will be used in that case instead, so you can use some custom markup in that case. Repeat this step for any other header with custom markup.

* Keep in mind that **all headers need to be the same height**. Take that into account when styling your headers. If you have one that's larger than usual, we recommend you make all the headers the same height and try to handle it with additional markup.


```html
<nav class="fixed">
  <!-- Your standard header -->
  <div class="midnightHeader default">
    <a class="logo">Logo</a>
  </div>

  <!-- A header with a butterfly -->
  <div class="midnightHeader butterfly">
    <a class="logo">Logo</a>
    <span class="a-butterfly"><!-- Everybody loves butterflies! --></span>
    <span class="another-butterfly"><!-- OH GOD THEY ARE IN MY FACE --></span>
    <span class="yet-another-butterfly"><!-- AAAAAHHHHHHHHHHHHHHHHHHHHH --></span>
  </div>
</nav>
```


## Options

You can use a variety of custom options when using midnight:

```js
$('nav').midnight({
  // The class that wraps each header. Used as a clipping mask.
  headerClass: 'midnightHeader',
  // The class that wraps the contents of each header. Also used as a clipping mask.
  innerClass: 'midnightInner',
  // The class used by the default header (useful when adding multiple headers with different markup).
  defaultClass: 'default'
});
```


## Installation

Midnight is available on Bower, NPM, and Meteor as **midnight.js**:

```
bower install midnight.js

npm install midnight.js

meteor add kyleking:midnightjs
```


## CDN Hosting

To lower hosting costs & have users load midnight.js faster, you can use the [jsDelivr CDN](http://www.jsdelivr.com/#!jquery.midnight) like so:
```htm
<script src="//cdn.jsdelivr.net/jquery.midnight/{version}/midnight.jquery.min.js"></script>
```


### Advanced

You can use jsDelivr's [version aliasing & concocting](https://github.com/jsdelivr/jsdelivr#version-aliasing) to serve the latest minor branch version along with dependancies.  For example, to download the latest patch versions of midnight.js v1.0.z together along with jQuery v1.11.z:
```htm
<script src="//cdn.jsdelivr.net/g/jquery@1.11,jquery.midnight@1.0"></script>
```


## Known Issues

On iOS <7 and older Android devices scrollTop isn't updated fluently, which creates a choppy effect. It can be fixed somewhat by wrapping the body in container and detecting touch events, but we're leaving that as an open issue. We'll probably disable the effect on older mobile devices due to bad performance.

You shouldn't add any sort of padding, margin or offset (top/left/right/bottom) to the nav, since it causes issues with rendering.
