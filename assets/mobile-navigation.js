(function(){
  var buttons=document.querySelectorAll('.mobile-menu-button');
  buttons.forEach(function(button){
    var panel=document.getElementById(button.getAttribute('aria-controls'));
    if(!panel)return;
    button.addEventListener('click',function(){
      var open=panel.classList.toggle('is-open');
      button.setAttribute('aria-expanded',String(open));
      button.textContent=open?'✕ 닫기':'☰ 메뉴';
    });
    panel.querySelectorAll('a').forEach(function(link){
      link.addEventListener('click',function(){
        panel.classList.remove('is-open');
        button.setAttribute('aria-expanded','false');
        button.textContent='☰ 메뉴';
      });
    });
  });
})();
