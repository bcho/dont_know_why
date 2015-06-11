(function(global) {
  if (!global.isSite('twitter.com')) {
    return;
  }

  var prTweets = global.document.querySelectorAll('.promoted-tweet');
  for (var i = 0; i < prTweets.length; i++) {
    prTweets[i].parentNode.classList.add('hidden');
  }
})(window);
