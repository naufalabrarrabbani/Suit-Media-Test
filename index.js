var prevScrollpos = window.scrollY;
      window.onscroll = function() {
         var currentScrollPos = window.scrollY;
         if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").classList.add("show");
         } else {
            document.getElementById("navbar").classList.remove("show");
         }
         prevScrollpos = currentScrollPos;
      };

let header = document.getElementById("navbar");
let btns = header.getElementsById("navbar-default");

for (let i = 0; i < btns.length; i++) {
   btns[i].addEventListener("click", function() {
      let current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace("active", "");
      this.className += "active";
   });
}

const endpoint = "https://suitmedia-backend.suitdev.com/api/ideas";

async function getIdeas() {
   const response = await fetch(endpoint);
   const data = await response.json();
   console.log(data);
}

getIdeas();