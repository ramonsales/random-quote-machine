var quotes = [];
var quotesNumber = 100;
var url = "https://talaikis.com/api/quotes/";
var quoteText = document.getElementById("quote-text");
var quoteAuthor = document.getElementById("quote-author");

console.log(url);

fetch(url)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data);
    quotes = data;
    renderQuote();
    //console.log(greaterQuote(quotes));
})
.catch(function(error) {
    console.log(error);
})

document.querySelector(".btn--new-quote").addEventListener('click', function() {
    renderQuote();
});

function randomizeNumber() {
    return Math.floor(Math.random() * quotesNumber);
}

function renderQuote() {
    var quoteIndex = randomizeNumber();
    quoteText.textContent = quotes[quoteIndex].quote;
    quoteAuthor.textContent = '\ufe63 ' + quotes[quoteIndex].author;
    setQuoteTweetURL(quotes[quoteIndex]);
}

/*
function greaterQuote(quotess) {
    var quotes = quotess.map(function(obj) {
        return obj.author.length;
    });
    return quotes.reduce(function(quote1, quote2) {
        return Math.max(quote1, quote2);
    });
}
*/

function setQuoteTweetURL(quote) {
    var quote = '"' + quote.quote + '", -'  + quote.author;
    var quoteURL = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(quote);
    document.querySelector(".btn--tweet").href = quoteURL;
}