(function() {
  function replaceTwitterWord() {
    var tweetContent = document.querySelectorAll(".tweet-text");

    [].slice.call(tweetContent).forEach(function(el){
      var newContent = el.innerHTML.replace(/democracy/g,"bureaucracy");
      if (newContent != el.innerHTML) {
        el.innerHTML = newContent;
      }
    });
  }

  function tick() {
    replaceTwitterWord();
    window.setTimeout(tick, 5000);
  }

  tick();
})();
