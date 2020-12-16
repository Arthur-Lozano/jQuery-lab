'use strict';

$.ajax('./data/page-1.json')
  .then(data => {
    data.forEach(value => {
      let newPic = new Picture(value, 'pageOne');

      newPic.render();
      newPic.item();
      // $('div').removeClass('pageTwo').addClass('pageOne');
    });

  });

// $( "p" ).removeClass( "myClass noClass" ).addClass( "yourClass" );

$.ajax('./data/page-2.json')
  .then(data => {
    data.forEach(value => {
      let newPic = new Picture(value, 'pageTwo');

      newPic.render();
      newPic.item();
      // $('div').removeClass('pageOne').addClass('pageTwo');
      // newPic.hide();
    });
    $('.pageTwo').hide();
  });

$('#pageSwitch').on('click',function () {
  $('.pageTwo').toggle();
  $('.pageOne').toggle();


});

function Picture(pic, page) {
  this.image_url = pic.image_url;
  this.title = pic.title;
  this.description = pic.description;
  this.keyword = pic.keyword;
  this.horns = pic.horns;
  this.page = page;
}

Picture.prototype.render = function () {
  var template = document.getElementById('template').innerHTML;
  var rendered = Mustache.render(template, this);
  $('main').append(rendered);

  // let $templateDiv = $('<div></div>');
  // let $templateClone = $('#photo-template').html();
  // $templateDiv.html($templateClone);

  // $templateDiv.find('h2').text(this.title);
  // $templateDiv.find('img').attr('src', this.image_url);
  // $templateDiv.find('p').text(this.description);
  // $templateDiv.removeAttr('id');
  // $templateDiv.attr('id', this.keyword);

};

Picture.prototype.item = function () {
  let listItem = $(`<option value="${this.keyword}")>
  ${this.keyword}</option>`);
  if (listItem !== $('select').text()) {
    $('select').append(listItem);
  }
};

//Lab03



