'use strict';
window.Helpers = {};

Helpers.addEvent = function(eventName, elementClass, callback) {
  var elementsArray = document.querySelectorAll('.' + elementClass);

  for (var i = 0; i < elementsArray.length; i++) {
    elementsArray[i].addEventListener(eventName, callback, false);
  }
};

window.App = {};

App.scrollToAnchor = function(params) {
  var targetHref = params.target.href.split('/'),
      anchorId = targetHref[targetHref.length - 1].replace('#', ''),
      anchorPosition = document.getElementById(anchorId).offsetTop;

  event.preventDefault();

  window.scrollTo(0, anchorPosition);
}

App.init = function() {
  Helpers.addEvent('click', 'scrollable-link', this.scrollToAnchor);
};