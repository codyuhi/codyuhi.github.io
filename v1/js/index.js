function expandEdu(){
    console.log("Attempting to toggle relevantedu info");
    try{
        document.getElementById("relevantedu").classList.toggle("closed");
        console.log("Successfully toggled relevantedu info");
    }
    catch(error){
        console.log("Unable to toggle relevantedu info");
        console.error(error);
    }
    console.log("Attempting to toggle irrelevantedu info");
    try{
        document.getElementById("irrelevantedu").classList.toggle("closed");
        console.log("Successfully toggled irrelevantedu info");
    }
    catch(error){
        console.log("Unable to toggle irrelevantedu info");
        console.error(error);
    }
}

$(window).on('scroll', function (e) {
    var top = $(window).scrollTop() + $(window).height(),
        isVisible = top > $('#edu img').offset().top;

    $('#edu').toggleClass('animate', isVisible);
});