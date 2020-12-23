'use strict';

let allItems = [];
let keyWords = [];
let currentPage = 1;

$.ajax('./data/page-1.json')
  .then(data => {
    data.forEach(value => {
      let newPic = new Picture(value, 'pageOne');

      newPic.render();
    });

  });

$.ajax('./data/page-2.json')
  .then(data => {
    data.forEach(value => {
      let newPic = new Picture(value, 'pageTwo');

      newPic.render();
    });
    $('.pageTwo').hide();
    popList();
  });

$('#pageSwitch').on('click', function () {
  $('.pageTwo').toggle();
  $('.pageOne').toggle();
  currentPage = currentPage === 1 ? 2 : 1;

});

function Picture(pic, page) {
  this.image_url = pic.image_url;
  this.title = pic.title;
  this.description = pic.description;
  this.keyword = pic.keyword;
  this.horns = pic.horns;
  this.page = page;
  allItems.push(this);
  if (!keyWords.includes(pic.keyword)) keyWords.push(pic.keyword);
}

Picture.prototype.render = function () {
  var template = document.getElementById('template').innerHTML;
  var rendered = Mustache.render(template, this);
  $('main').append(rendered);
};

function popList() {
  keyWords.forEach(item => {
    let listItem = $(`<option value="${item}")>${item}</option>`);
    $('#filter').append(listItem);
  });
}

$('#filter').on('change', function () {
  $('div').hide();

  console.log ($(this).val());
  $(`.${$(this).val()}`).show();
});

$('#sortBy').on('change', function () {
  if ($(this).val() === 'title') {
    allItems.sort((a, b) => {

      if (a.title > b.title) {
        return 1;
      }
      else if (a.title < b.title) {
        return -1;
      }
      else {
        return 0;
      }
    });
  }

  else {
    allItems.sort((a, b) => a.horns > b.horns ? 1 : -1);
  }
  $('main').empty();

  allItems.forEach(item => {
    item.render();
  });
  if (currentPage === 1) {
    $('.pageTwo').hide();
  }

  else { $('.pageOne').hide(); }
});

