(function(global) {
  if (!global.isSite('twitter.com')) {
    return;
  }

  // TODO wait for async load.
  global.document.querySelector('.wtf-module').classList.add('hidden');
})(window);
