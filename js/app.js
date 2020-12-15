'use strict';

$.ajax('./data/page-1.json')
  .then(data => {
    data.forEach(value => {
      let newPic = new Picture(value);

      newPic.render();
      newPic.item();
      $('div').removeClass('pageTwo').addClass('pageOne');
    });

  });

// $( "p" ).removeClass( "myClass noClass" ).addClass( "yourClass" );

$.ajax('./data/page-2.json')
  .then(data => {
    data.forEach(value => {
      let newPic = new Picture(value);

      newPic.render();
      newPic.item();
      $('div').removeClass('pageOne').addClass('pageTwo');
      newPic.hide();
    });
  });

$('#pageSwitch').on(function () {
  $('.pageTwo').toggle('hide');
});

function Picture(pic) {
  this.image_url = pic.image_url;
  this.title = pic.title;
  this.description = pic.description;
  this.keyword = pic.keyword;
  this.horns = pic.horns;
}

Picture.prototype.render = function () {
  let $templateDiv = $('<div></div>');
  let $templateClone = $('#photo-template').html();
  $templateDiv.html($templateClone);

  $('main').append($templateDiv);
  $templateDiv.find('h2').text(this.title);
  $templateDiv.find('img').attr('src', this.image_url);
  $templateDiv.find('p').text(this.description);
  $templateDiv.removeAttr('id');
  $templateDiv.attr('id', this.keyword);

};

Picture.prototype.item = function () {
  let listItem = $(`<option value="${this.keyword}")>
  ${this.keyword}</option>`);
  if (listItem !== $('select').text()) {
    $('select').append(listItem);
  }
};

//Lab03



