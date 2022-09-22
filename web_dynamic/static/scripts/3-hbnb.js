$(function () {
  // look for places_search
  let dict = {};
  $.ajax({
    type: 'POST',
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    data: JSON.stringify(dict),
    success: function (result) {
      for (let i in result) {
        let places_content = [
          '<article>',
          '<div class="title">',
          '<h2>' + result[i].name + '</h2>',
          '<div class="price_by_night">' + '$' + result[i].price_by_night + '</div>',
          '</div>',
          '<div class="information">',
          '<div class="max_guest">',
          '<i class="fa fa-users fa-3x" aria-hidden="true"></i>',
          '<br />',
          result[i].max_guest + ' Guests',
          '</div>',
          '<div class="number_rooms">',
          '<i class="fa fa-bed fa-3x" aria-hidden="true"></i>',
          '<br />',
          result[i].number_rooms + ' Bedrooms',
          '</div>',
          '<div class="number_bathrooms">',
          '<i class="fa fa-bath fa-3x" aria-hidden="true"></i>',
          '<br />',
          result[i].number_bathrooms + ' Bathroom',
          '</div>',
          '</div>',
          '<div class="description">',
          result[i].description,
          '</div>',
          '</article>'
        ];
        $(places_content.join('')).appendTo('section.places');
      }
    },
    dataType: 'json',
    contentType: 'application/json'
  });

  // look for api_status
  $.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
    if (data['status'] === 'OK') {
      $('DIV#api_status').addClass('available');
    } else {
      $('DIV#api_status').removeClass('available');
    }
  });

  // display amenities
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
    $('div.amenities h4').text(arr);
  });
});
