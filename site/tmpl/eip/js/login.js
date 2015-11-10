!function () {
  var checkStorage = Object.keys(localStorage).length || 0, i;

  // reset localStorage
  if (checkStorage) {
    for ( i in localStorage ) {
      localStorage.removeItem(i);
    }
  };
}();