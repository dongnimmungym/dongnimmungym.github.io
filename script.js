// menu + hero pick toggles
(function () {
  var t = document.querySelector('.toggle');
  var m = document.querySelector('.mnav');
  if (t && m) {
    t.addEventListener('click', function () {
      var open = m.classList.toggle('open');
      t.setAttribute('aria-expanded', open ? 'true' : 'false');
      t.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
    });
  }
  var b = document.getElementById('pickbtn');
  var p = document.getElementById('heropick');
  if (b && p) {
    b.addEventListener('click', function () {
      var show = p.hidden;
      p.hidden = !show;
      b.setAttribute('aria-expanded', show ? 'true' : 'false');
    });
  }
})();
