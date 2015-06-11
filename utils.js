(function(global) {
  // Host can be:
  //
  // - https://xxx.com
  // - xxx.com
  var isSite = function(host) {
    var hostPattern = /^(https?\:\/\/)?(.*)\/?/,
      matched = hostPattern.exec(host);

    if (!matched) {
      return false;
    }
    return (matched[2] === global.location.host);
  };

  var isPath = function(path) {
    if (path[0] != '/') {
      path = '/' + path;
    }

    return (path === global.location.pathname);
  };

  // Export utilites.
  global.isSite = isSite;
  global.isPath = isPath;
})(window);
