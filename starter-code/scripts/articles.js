var articles = [];

function Article (opts) {
  // TODO: Use the object passed in to complete this constructor function:
  // Save ALL the properties of `opts` into `this`.
  this.author      = opts.author;
  this.title       = opts.title;
  this.category    = opts.category;
  this.authorUrl   = opts.authorUrl;
  this.publishedOn = opts.publishedOn;
  this.body        = opts.body;
}

var firstArticle = ourLocalData[0];
new Article(firstArticle);

console.log('Problem?');

Article.prototype.toHtml = function() {
  var $newArticle = $('article.template').clone();
  $newArticle.attr('data-category', this.category);

  /* TODO: Now use jQuery to fill in the rest of the current
  template clone with properties from this particular Article instance.
  We need to fill in:
    1. author name
    2. author url,
    3. article title
    4. article body, and
    5. publication date. */

  $newArticle.find('address').text(this.author);

  $newArticle.find('.byline a').attr('href', this.authorUrl);

  $newArticle.find('header h1').text(this.title);

  $newArticle.find('.article-body').text(this.body);

  $newArticle.find('time[pubdate]').attr('title', this.publishedOn);
  $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');

  /* TODO: This clone article is no longer a template,
  as it now has real data attached to it! We need to account
  for that before this current article gets rendered to our
  DOM. */

  $newArticle.removeClass("template");

  return $newArticle;
};

ourLocalData.sort(function(curElem, nextElem) {
  return (new Date(nextElem.publishedOn)) - (new Date(curElem.publishedOn));
});

ourLocalData.forEach(function(ele) {
  articles.push(new Article(ele));
});

console.log('Hey');
console.log(articles);

articles.forEach(function(a) {
  console.log('Issue?');
  $('#articles').append(a.toHtml());
});
