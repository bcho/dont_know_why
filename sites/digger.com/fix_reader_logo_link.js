(function(global) {
  if (! global.isSite('digg.com') || ! global.isPath('reader')) {
    return;
  }

  var siteHeaderLogo = global.document.querySelector('#site-header-logo');
  siteHeaderLogo.href = global.location.href;
})(window);
