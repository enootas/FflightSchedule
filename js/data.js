var mydata = JSON.parse(data);
function addInfo(data) {
  var block = $(".block__item");
  obj = {
    "time": ".time",
    "flight": ".flight",
    "town": ".city",
    "terminal": ".terminal",
    "status": ".status"
  };
  data.forEach(function(el, i) {
    var parent = block[i];
    Object.keys(obj).forEach(function(key) {
      $(parent).find(obj[key]).html(el[key]);
      switch (el[key]) {
        case 'совершил посадку':
        $(parent).addClass('flight-in');
        break;
        case 'вылетел':
        $(parent).addClass('flight-up');
        break;
        case 'задержан':
        $(parent).addClass('flight-delay');
        break;
      };
    });
  })
}
addInfo(mydata);
