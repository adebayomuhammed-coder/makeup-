const profileImg = document.getElementById("profile");

let imageNumber = 1;


function handleClick () {if (imageNumber === 1) {
    profileImg.src = "profile2.jpeg";
    imageNumber = 2;
  } else if (imageNumber === 2) {
    profileImg.src = "profile3.jpeg";
    imageNumber = 3;
  } else {
    profileImg.src = "profile1.jpeg";
    imageNumber = 1;
  } }

profileImg.addEventListener("click", handleClick);


