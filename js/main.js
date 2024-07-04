let menuIcon = document.querySelector(".navbar .container .menu-icon");
let sections = document.querySelectorAll(".section")


menuIcon.addEventListener( "click" , () => {
  document.querySelector(".navbar .container ul").classList.toggle("active");
});

document.querySelectorAll(".navbar .container li a").forEach((ele) => {
  ele.addEventListener("click", () => {
    document.querySelector(".navbar .container ul").classList.remove("active");
  })
});

let loadAnimation = new IntersectionObserver ((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting){
      e.target.classList.add("active");
      loadAnimation.unobserve(e.target);
    }
  })
} , {
  threshold:.2,
})

sections.forEach((e) => {
  loadAnimation.observe(e)
});
