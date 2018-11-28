var searchStyle = document.getElementById('search-style');
document.getElementById('search').addEventListener('input', function() {
  if (!this.value) {
    searchStyle.innerHTML = '';
    return;
  }
  searchStyle.innerHTML = '.block__item div:not([data-index*="' + this.value.toLowerCase() + '"]) { display: none;}';
});
