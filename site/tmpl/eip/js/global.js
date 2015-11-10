function closeBlockUI () {
  $.unblockUI({
    fadeOut: 200,
    onUnblock: removePopList
  });
}

function removePopList () {
  var check_length = $('body').find('.pop-list').length;
  if (check_length === 1) {
    $('body').find('.pop-list').remove();
  }
}

function keyboardEvents (e) {
  var check_lb_open = $('body').find('.pop-list').is(':visible');
  if (check_lb_open) {
    if (e.keyCode === 27) {         // esc
      closeBlockUI();
    } else if (e.keyCode === 39) {  // right arrow
      // nextDetailList(39, printLBDetails)
    } else if (e.keyCode === 37) {  // left arrow
      // nextDetailList(37, printLBDetails)
    }
  }
  return false;
}

function sortOld (time_keyword) {
  var local_key = time_keyword;
  return function (a, b) {
    return new Date(a[local_key]).getTime() - new Date(b[local_key]).getTime();
  }
}

function sortNew (time_keyword) {
  var local_key = time_keyword;
  return function (a, b) {
    return new Date(b[local_key]).getTime() - new Date(a[local_key]).getTime();
  }
}

function errorMessage (msg) {
  $.blockUI({
      message: '<h2>' + msg + '</h2>',
      timeout: 2000
  });
  return false;
}

function replaceDateFormate (data, type) {
  var data = data,
      check_type = typeof type,
      sort_type = type,
      sortFn;

  // Check the broswers "isArray()" if it's not natively available
  if (!Array.isArray) {
    Array.isArray = function (arg) {
      return Object.prototype.toString.call(arg) === '[object Array]';
    };
  }

  switch (check_type) {
    case 'string':
      sortFn = function (obj, idx) {
        data[idx][sort_type] = obj[sort_type].replace(/-/g, '/');
      };
      break;
    case 'object':
      if (!Array.isArray(type) || !Array.isArray(data) ) { var err_obj = JSON.stringify(type); throw new Error( err_obj + ' is not an "array", please check ' + err_obj + ' must be an "Array".'); }
      sortFn = function (obj, idx) {
        var i, sort_name;
        for (i = 0; i < sort_type.length; i++) {
          sort_name = sort_type[i];
          data[idx][sort_name] = obj[sort_name].replace(/-/g, '/');
        }
      };
      break;
    default:
      throw new Error('Please check you pass function arguments, is not what I want.');
  }

  return sortFn;
}