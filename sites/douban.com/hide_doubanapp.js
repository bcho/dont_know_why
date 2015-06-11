(function(global) {
  if (! global.isSiteLikes('douban.com')) {
    return;
  }

  var appDropdown = global.document.querySelector('.top-nav-doubanapp');
  appDropdown.classList.add('hide');
})(window);
