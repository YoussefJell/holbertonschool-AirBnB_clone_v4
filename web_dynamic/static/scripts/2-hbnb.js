// display amenities
$(function () {
  $.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
    if (data['status'] === 'OK') {
      $('DIV#api_status').addClass('available');
    } else {
      $('DIV#api_status').removeClass('available');
    }
  });

  let d = {};
  $('input').change(function () {
    if (this.checked) {
      d[($(this).attr('data-id'))] = $(this).attr('data-name');
    } else {
      delete d[$(this).attr('data-id')];
    }
    let output = '';
    let comma = '';
    for (let i in d) {
      output += comma;
      output += d[i];
      comma = ', ';
    }
    $('div.amenities h4').text(output);
  });
});
