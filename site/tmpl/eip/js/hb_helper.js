var hb_config = {
  transDate: function (date) {
    var date_format_idx = date.indexOf(' '),
        date_format = date.slice(0, date_format_idx);
    return date_format;
  },
  ifstatus: function(options) {
    return {
      0: 'was denied',
      1: 'was approved',
      2: 'is waiting for approval'
    }[this.app_status] || 'unknow'
  },
  checkvalue: function(items, options) {
    if(items <= 1) {
      return items +' hour';
    } else {
      return items + ' hours';
    }
  }
};

// init handlebar helpers config
Handlebars.registerHelper(hb_config);