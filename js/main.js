// $(document).keydown(function(event){
//     if(event.keyCode==123){
//         return false;
//     } else if (event.ctrlKey && event.shiftKey && event.keyCode==73){        
//         return false;
//     }
// });

$(document).on("contextmenu",function(e){        
   e.preventDefault();
});

document.onkeydown = function(e) {
    if (e.ctrlKey && 
        (e.keyCode === 67 || 
         e.keyCode === 86 || 
         e.keyCode === 85 || 
         e.keyCode === 117)) {
        return false;
    } else {
        return true;
    }
};


// Fanpage Message
var chatbox = document.getElementById('fb-customer-chat');
chatbox.setAttribute("page_id", "108688041898641");
chatbox.setAttribute("attribution", "biz_inbox");

window.fbAsyncInit = function() {
    FB.init({
        xfbml            : true,
        version          : 'v14.0'
    });
};

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));