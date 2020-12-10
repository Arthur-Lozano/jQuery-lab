'use strict';

// DOM manipulation
// 1. Select the element from the DOM
let $photoTemplate = $('#photo-template');

// 2. Create the markup/Give it content


// 3. Render it to the DOM


$.ajax('./data/page-1.json')
  .then( data => {
    data.forEach(value => {//value each object from json
      let $templateDiv = $('<div></div>');
      let $templateClone = $('#photo-template').html();
      $templateDiv.html($templateClone);
      console.log($templateDiv.html());
      // let $newPhoto = $templateClone.clone();
      $('main').append($templateDiv);
      // $newPhoto.removeAttr('id');
      new Picture(value);
      // $newPhoto.attr('src',value.image_url);

      console.log(value);

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
  let $templateClone = $('#photo-template').clone();
  $('main').append($templateClone);
  $templateClone.find('h2').text(this.titlel);
  $templateClone.find('img').attr('src', this.image_url);
  $templateClone.find('p').text(this.description);
  // $templateClone.find('p').text(this.keyword);
  // $templateClone.find('p').text(this.horns);
  $templateClone.removeAttr('id');
  $templateClone.attr('id', this.keyword);
}