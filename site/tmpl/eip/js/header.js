$(function () {
  var url = '/ajax',
      $body = $('body'),
      $user = $body.find('#user'),
      $english = $user.find('[data-name="english"]'),
      $chinese = $user.find('[data-name="chinese"]'),
      $badge = $user.find('[data-badge]'),
      $notice_form = $('#notice_form'),
      $data_form = $('[data-form]'),
      localStorage = window.localStorage || {},
      check_userinfo_storage = Object.keys(localStorage).filter(function (val) { return val === 'userinfo' }).length || 0,
      jqxhr, userinfo;

  // block guest users
  if ( $body.find('.guest').length ) { return false; }

  // methods
  function successHandler(info) {
    if (info.error) { return errorMessage(info.error); }
    if (localStorage) { localStorage.setItem('userinfo', JSON.stringify(info)); }
    printUserInfo(info);
  }
  function printUserInfo(info) {
    var userinfo = info.data.userinfo,
        name = userinfo.name,
        photo_txt = name.charAt(0);

    $english.text(name);
    $chinese.text(userinfo.name_cht);
    $badge.attr('data-badge', photo_txt);
    $body.find('.mdl-layout').removeClass('guest');
    return false;
  }
  function failureHandler(err) {
    console.log(err);
  }

  if (!check_userinfo_storage) {
    jqxhr = $.ajax({
      url: url,
      data: {
        action: 'me'
      },
      dataType: 'json',
    }).
    then(successHandler, failureHandler);
  } else {
    userinfo = JSON.parse(localStorage.getItem('userinfo'));
    printUserInfo(userinfo);
  }

  // Bind events
  $(".create_new li").each(function(i){
    var i = i++;
    $(this).attr('id','create_'+i);
    $(this).find('.apply_new').attr('id','new_'+i);

    $('#create_'+i).click(function(){
      var $this = $(this),
          current_tar = $this.data('create-type');

      $body.attr('data-create-type', current_tar);

      $.blockUI({
        message: $('#new_'+i),
        onBlock: function() {
          $(".blockPage").addClass("popup_box");
        },
        onOverlayClick: function () {
          $body.attr('data-create-type', '');
          $.unblockUI();
        }
      });
    });
    $('.apply_new button').click($.unblockUI);
  });

  $('.from_date').datepicker({
    dateFormat: 'yy-mm-dd'
  });

  $('.clockpicker').clockpicker({
    align: 'right',
    donetext: 'OK'
  });

  $data_form.on('click', function () {
    var target_form = $(this).data('form'),
        $form = $('#' + target_form), $expire, $expire_time, $announcer, $status, first_name, date, time, expire_time, status;

    if (target_form === 'notice_form') { 
      $expire      = $form.find('#expire');
      $expire_time = $form.find('#expire_time');
      $announcer   = $form.find('#announcer');
      $status      = $form.find('#status');
      first_name   = $english.text().split(' ')[0];
      date         = $expire.find('[name="date"]').val();
      time         = $expire.find('[name="time"]').val();
      expire_time  = date + ' ' + time + ':00';
      status       = (new Date(expire_time).getTime()) > (new Date().getTime()) ? (1) : (0);

      $expire_time.val(expire_time);
      $announcer.val(first_name);
      $status.val(status);
    }

    $form.submit();
  });
});