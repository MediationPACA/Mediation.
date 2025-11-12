(function(){
  var _0x3b2a = [
    'getElementById','value','btoa','setItem','auth',
    'location','href','Gest.html','alert','Mot\x20de\x20passe\x20incorrect\x20!',
    'getItem','login.html','removeItem'
  ];
  function _0x1f7b(_0x2a4d,_0x4f69){
    return _0x3b2a[_0x2a4d];
  }

  var _0x5e6c = 'TWV0b3RjZW50cmVzODM=';

  function _0x4c9a(){
    try {
      var _0x7a = document[_0x1f7b(0)]('password')[_0x1f7b(1)];
      if (window[_0x1f7b(2)](_0x7a) === _0x5e6c) {
        localStorage[_0x1f7b(3)](_0x1f7b(4), _0x5e6c);
        window[_0x1f7b(5)][_0x1f7b(6)] = _0x1f7b(7);
      } else {
        window[_0x1f7b(8)](_0x1f7b(9));
      }
    } catch (e) {
      // fail silently
    }
  }

  function _0x2d8f(){
    try {
      if (localStorage[_0x1f7b(10)](_0x1f7b(4)) !== _0x5e6c) {
        window[_0x1f7b(5)][_0x1f7b(6)] = _0x1f7b(11);
      }
    } catch (e) {
      window[_0x1f7b(5)][_0x1f7b(6)] = _0x1f7b(11);
    }
  }

  function _0x6b2e(){
    try {
      localStorage[_0x1f7b(12)](_0x1f7b(4));
      window[_0x1f7b(5)][_0x1f7b(6)] = _0x1f7b(11);
    } catch (e) {
      window[_0x1f7b(5)][_0x1f7b(6)] = _0x1f7b(11);
    }
  }

  // Exporter sous les noms d'origine pour compatibilité HTML
  window.verifier = _0x4c9a;
  window.checkAccess = _0x2d8f;
  window.deconnexion = _0x6b2e;
})();
