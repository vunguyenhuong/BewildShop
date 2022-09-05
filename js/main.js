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