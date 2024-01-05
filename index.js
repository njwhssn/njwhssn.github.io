const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById('toggleLight');

  if(toggle) {
    toggle.onclick = function() {
      document.body.classList.toggle("light-theme")
      if(document.body.classList.contains("light-theme")) {
        toggle.classList.remove('fa-moon')
        toggle.classList.add("fa-sun")
      } else {
        toggle.classList.remove("fa-sun");
        toggle.classList.add("fa-moon");
      }
    }
  }
})


// document.addEventListener("DOMContentLoaded", () => {
//   const toggle = document.getElementById('toggleDark');
//   const body = document.querySelector('body');

//   if (toggle) {
//     toggle.addEventListener('click', function() {
//       this.classList.toggle('fa-moon');
//       if (this.classList.contains('fa-sun')) {
//         body.style.background = 'white';
//         body.style.color = 'black';
//         body.style.transition = '.5s';
//       } else {
//         body.style.background = 'black';
//         body.style.color = 'white';
//         body.style.transition = '.5s';
//       }
//     });
//   } else {
//     console.error("Element with ID 'toggleDark' not found in the DOM.");
//   }
// });

function opentab(tabname) {
  for(tablink of tablinks) {
    tablink.classList.remove("active-link")
  }

  for(tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab")
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

function openmenu() {
  const sidemenu = document.getElementById("sidemenu");
  if(sidemenu) {
    sidemenu.style.right = "0";
  }
}

function closemenu() {
  const sidemenu = document.getElementById("sidemenu");
  if(sidemenu) {
    sidemenu.style.right = "-200px";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const toTop = document.querySelector(".to-top");

  if (toTop) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        toTop.classList.add("active");
      } else {
        toTop.classList.remove("active");
      }
    });
  } else {
    console.error("Element with ID 'toTop' not found in the DOM.");
  }
});

