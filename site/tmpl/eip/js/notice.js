!function ($) {
  var $body = $('#notice_page'),
      template = $body.find('#notice_lists').html(),
      lb_template = $body.find('#list_lightbox').html(),
      source = Handlebars.compile(template),
      lb_source = Handlebars.compile(lb_template),
      url = '/ajax',
      global_sort_num = 0,
      global_data,
      global_lb_index,
      // DOM element
      $obj = {
        content: $body.find('#notice_inner_content')
      };

  function printLBDetails (source) {
    var check_blockUI = $body.find('.blockUI'), lb_html, cur_h;
    if (source.error) { return errorMessage(source.error); }
    if (!check_blockUI.length) {  // when the first time open detail lightbox
      lb_html = lb_source(source.data[0]);
      $body.append(lb_html);
      cur_h = - parseInt($('.pop-list').height()/2, 10);
      // use the blockUI plugin
      $.blockUI({
        message: $('.pop-list'),
        onOverlayClick: closeBlockUI,
        css: {
          top:    '50%',
          left:   '50%',
          textAlign:  'left',
          marginLeft:     '-165px',
          marginTop:      cur_h + 'px',
          width: '330px',
          border: 'none',
          background:'none'
        }
      });
    } else {  // use left or right arrow to change different lightbox
      removePopList();
      lb_html = lb_source(source);
      $('.blockPage').html(lb_html);
      cur_h = - parseInt($('.pop-list').height()/2, 10);
      $('.blockUI.blockMsg.blockPage').css({
        'marginTop': cur_h + 'px'
      });
      $('.pop-list').show();
    }
    global_lb_index = $('.pop-list').data('nid');

    // close the blockUI plugin
    $('.pop-list .al_pop_close').click(closeBlockUI);
  }

  function listDetail (e) {
    var $this = $(this);

    $.ajax({
      url: url,
      method: 'POST',
      data: {
        action: 'notices_info',
        nid: $this.data('nid')
      },
      dataType: 'json',
      success: printLBDetails,
      error: function (err) {
        console.log(err);
      }
    });
  }
  function sortData (e) {
    global_sort_num++;
    if (global_sort_num%2) {
      $body.addClass('down');
      global_data.sort(sortOld('updated_time'));
    } else {
      $body.removeClass('down');
      global_data.sort(sortNew('updated_time'));
    }
    var sort_data = { data: global_data }
    $obj.content.html(source(sort_data));
  }

  function nextDetailList (key_code, callback) {
    var i, len, target_idx, fix_len, next_data_idx, next_data;
    i = 0;
    len = global_data.length;
    for (;i < len; i++) {
      if (+global_data[i].id === global_lb_index) {
        target_idx = i;
        break;
      }
    }
    fix_len = len - 1;
    next_data_idx = (key_code === 39) ?
                    ((target_idx + 1 > fix_len ) ? (0) : (target_idx + 1)) :
                    ((target_idx - 1 < 0) ? ( fix_len ) : (target_idx - 1));
    next_data = global_data[next_data_idx];
    callback(next_data);
  }

  // get notice data
  $.ajax({
    method: 'POST',
    url: url,
    data: {
      action: 'notices_list',
      status: '1'
    },
    dataType: 'json',
    success: function (data) {
      if (data.length === 0) {
        // off events
        $body.off('click');
        return false;
      }
      // replace date formate '-' to '/'
      data.data.forEach(replaceDateFormate(data.data, 'updated_time'));

      global_data = data.data.sort(sortNew('updated_time'));
      $obj.content.html(source(data));
    }
  });

  // bind events
  $body.on('click', '.notice-lists', listDetail);
  $body.on('click', '[data-action="sort"]', sortData);
  $body.on('keyup', keyboardEvents);

}(jQuery);