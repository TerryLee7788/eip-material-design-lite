!function ($) {
  var $body = $('body'),
      $leave_section = $body.find('.leave_section'),
      $demo_content = $body.find('.demo-content'),
      userinfo = JSON.parse(localStorage.getItem('userinfo')).data.userinfo,
      url = '/ajax';

  function activeLightBox (i) {
    var $this = $(this),
        message_id = $this.attr('id').match(/\d+/)[0];

    $.blockUI({
      message: $('#pop_' + message_id),
      onBlock: function() {
        $(".blockPage").addClass("popup_box");
      },
      onOverlayClick: closeBlockUI
    });

    $('.pop-list .al_pop_close').click($.unblockUI);
  }

  $.ajax({
    url : url,
    dataType : 'json',
    method: 'post',
    data: {
      action: 'leave_list',
      user_id: userinfo.id
    },
    success: function (data){
      var leave_source   = $("#leave-list").html(),
          leave_template = Handlebars.compile(leave_source),
          leave_data = data.data.list,
          leave_data_obj = { data: leave_data },
          sort_num = 0;

      // off events, end this function
      if (leave_data.length === 0) {
        $body.off('click');
        return false;
      }

      // Adjustment time formate
      leave_data_obj.data.forEach(replaceDateFormate(leave_data, ['start_datetime', 'stop_datetime']));
      // Sort the data, let's start from the latest date
      leave_data_obj.data.sort(sortNew('start_datetime'));
      // Out put the data at screen
      $leave_section.html( leave_template(leave_data_obj));

      $body.on('click', '[data-action="sort"]', function(e){
        sort_num++;

        if (sort_num%2) {
          $demo_content.addClass('down');
          leave_data_obj.data.sort(sortOld('start_datetime'));
        } else {
          $demo_content.removeClass('down');
          leave_data_obj.data.sort(sortNew('start_datetime'));
        }

        $leave_section.html( leave_template(leave_data_obj) );

      });
    }
  });

  $body.on('click', '[id^="app"]', activeLightBox);
  $body.on('keyup', keyboardEvents);

}(jQuery);