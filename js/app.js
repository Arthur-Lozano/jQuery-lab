'use strict';

// DOM manipulation
// 1. Select the element from the DOM
let $photoTemplate = $('#photo-template');

// 2. Create the markup/Give it content


// 3. Render it to the DOM


$.ajax('./data/page-1.json')
  .then( data => {
    data.forEach(value => {//value each object from json
      // console.log($templateDiv.html());
      // let $newPhoto = $templateClone.clone();
      // $newPhoto.removeAttr('id');
      let newPic = new Picture(value);
      // $newPhoto.attr('src',value.image_url);
      newPic.render();
    });
  });

function Picture (pic) {
  this.image_url = pic.image_url;
  this.title = pic.title;
  this.description = pic.description;
  this.keyword = pic.keyword;
  this.horns = pic.horns;
}

Picture.prototype.render = function() {
  let $templateDiv = $('<div></div>');
  let $templateClone = $('#photo-template').html();
  $templateDiv.html($templateClone);

  // let $templateClone = $('#photo-template').clone();
  $('main').append($templateDiv);
  $templateDiv.find('h2').text(this.title);
  $templateDiv.find('img').attr('src', this.image_url);
  $templateDiv.find('p').text(this.description);
  // $templateDiv.find('p').text(this.keyword);
  // $templateDiv.find('p').text(this.horns);
  $templateDiv.removeAttr('id');
  $templateDiv.attr('id', this.keyword);
}