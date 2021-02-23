jQuery(document).ready(function($) {
  
  //check to see if the submited cookie is set, if not check if the popup has been closed, if not then display the popup
  if( getCookie('popupCookie') != 'submited'){ 
    if(getCookie('popupCookie') != 'closed' ){
      $('.popup-overlay').css("display", "flex").hide().fadeIn();
    }
  }
  
  $('a.disagree').click(function(){
    window.location.href = "accounts/logout";
  });
  
  $('a.submit').click(function(){
    $('.popup-overlay').fadeOut();
    $('.memes').css('display', 'block');
  });

  setTimeout(()=>{
    $('.popup-overlay').fadeOut();
  }, 5000)

  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
});