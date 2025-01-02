let heart=document.getElementById("imagebuttonlike");

const emptyHeart='assets/heart.png';
const filledHeart='assets/filledheart.png';
function likeIncrementor(){
    if (heart.getAttribute('src') === emptyHeart) {
        heart.setAttribute('src', filledHeart);
        
    } else {
        heart.setAttribute('src', emptyHeart);
       
    }
}