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

function clickHome() {
    $(".active").removeClass("active");
    $("#homeNav").addClass("active");
}

function clickEdu() {
    $(".active").removeClass("active");
    $("#eduNav").addClass("active");
}

function clickExperience() {
    $(".active").removeClass("active");
    $("#experienceNav").addClass("active");
}

function clickSkills() {
    $(".active").removeClass("active");
    $("#skillsNav").addClass("active");
}

function clickHobbies() {
    $(".active").removeClass("active");
    $("#hobbiesNav").addClass("active");
}

function clickContact() {
    $(".active").removeClass("active");
    $("#contactNav").addClass("active");
}

$(window).on('scroll', function (e) {
    var top = $(window).scrollTop() + $(window).height(),
        isVisible = top > $('#edu img').offset().top;

    $('#edu').toggleClass('animate', isVisible);
});