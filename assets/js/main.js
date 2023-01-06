

// Toggle hamburger
const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', function(){
    this.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
});

function closeMenu(){
    hamburger.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
};

// Change image -- EXPERIENCES

function changeImg(img_name, new_text){
    change_text(new_text);
    console.log(new_text);
    let img = document.querySelector("#exp-img");
    img.setAttribute("src", img_name);

}

function change_text(new_text){
    document.getElementById("exp-text").innerHTML = new_text;
}



//Like Alert

function likeAlert(){
    alert("This button does nothing. However, I just want to let you know, thank you for visiting and liking my website. I wish you a wonderful day!!!");
}