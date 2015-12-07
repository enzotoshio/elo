'use strict';
window.Helpers = {};

Helpers.addEvent = function(eventName, elementClass, callback) {
  var elementsArray = document.querySelectorAll('.' + elementClass);

  for (var i = 0; i < elementsArray.length; i++) {
    elementsArray[i].addEventListener(eventName, callback, false);
  }
};

window.App = {};

App.scrollToAnchor = function(event) {
  var targetHref = event.target.href.split('/'),
      anchorId = targetHref[targetHref.length - 1].replace('#', ''),
      anchorPosition = document.getElementById(anchorId).offsetTop,
      bodyEl = document.body,
      transitionDuration = 500,
      visibleScreen = window.innerHeight,
      positionToGo = anchorPosition - window.pageYOffset,
      screenEnding = document.documentElement.scrollHeight - visibleScreen,
      hasTransformAndTransition = Modernizr.testAllProps('transform') &&
        Modernizr.testAllProps('transition');

  if (!hasTransformAndTransition) {
    return;
  }

  event.preventDefault();

  if(anchorPosition >= screenEnding) {
    positionToGo = screenEnding - window.pageYOffset;
  }

  bodyEl.style.transition = 'transform '+ transitionDuration + 'ms ease';
  bodyEl.style.WebkitTransform = 'translate(0, -' + positionToGo + 'px)';
  bodyEl.style.MozTransform = 'translate(0, -' + positionToGo + 'px)';
  bodyEl.style.transform = 'translate(0, -' + positionToGo + 'px)';

  setTimeout(function() {
    bodyEl.removeAttribute('style');
    window.scrollTo(0, anchorPosition);
  }, transitionDuration);
};

App.init = function() {
  Helpers.addEvent('click', 'scrollable-link', this.scrollToAnchor);
};