(function(global) {
  // Host can be:
  //
  // - https://xxx.com
  // - xxx.com
  global.isSite = function(host) {
    var hostPattern = /^(https?\:\/\/)?(.*)\/?/,
      matched = hostPattern.exec(host);

    if (!matched) {
      return false;
    }
    return (matched[2] === global.location.host);
  };

  global.isSiteLikes = function(host) {
    return (global.location.href.indexOf(host) !== -1);
  };

  global.isPath = function(path) {
    if (path[0] != '/') {
      path = '/' + path;
    }

    return (path === global.location.pathname);
  };
})(window);
