//Detect mobile device
function mobileRedirect(){
    var uagent = navigator.userAgent.toLowerCase();
    if(uagent.search("iphone") > -1 
        || uagent.search("ipad") > -1
        || uagent.search("android") > -1
        || uagent.search("blackberry") > -1
        || uagent.search("webos") > -1){
            console.log("Mobile device detected");
            //alert("Mobile device detected");
            $(".catchphrase").attr("style","font-size:1.5vw;");
            //window.location.href = "m_index.html";
        }else{
            console.log("Desktop device detected");
        }
}