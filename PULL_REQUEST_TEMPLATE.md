#### Single-line Summary
**Today, Tyler and Erica paired together. It took about an hour and 10 minutes**

#### Reflect and summarize on your process for each `TODO` item :  
  1. First, we started on adding the script tag. That was simple.
  2. Next, we completed the constructor function. This was also straight forward as it copied the example code.
  3. Then we used jQuery to initially set attributes for each of the listed properties, which was wrong.  (e.g. data-author, data-title).
  4. Then we used jQuery to remove the 'template' class. And went to look at the page and discovered our earlier errors.
  5.  We began debugging by inspecting the html elements and saw that we had only created attributes for each article and had not modified the content in each template.
  6. Then we had to figure out how to get to the child of the $newArticle.  The code for setting the date became clearer and we then used .find() to access the  relevant elements using jQuery.
  7. Then we set the html content using jQuery using the properties of each article.
  8. high fives!

#### Checklist (before submitting, fill in each set of square brackets with an 'x')
- [] We have titled the Pull Request similar to our branch name (ex: 'brian-rick').
- [] This PR includes commits from both myself and my partner; e.g. We followed good pair programming practices by switching driver/navigator roles.
- [] There is no extraneous, unrelated code included in this PR.
- [] We have summarized our `TODO:` process above.
