// Function Nav Burger
const hamburgerButton = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

hamburgerButton.addEventListener("click", () => {
  hamburgerButton.classList.toggle("diklik");
  navbar.classList.toggle("active")
})

// Function Nav Active Link
const semuaSection = document.querySelectorAll("section"),
semuaMenuLink = document.querySelectorAll(".navbar .menu a");
window.addEventListener("scroll", () => {
  semuaSection.forEach(section => {
    let windowScrollY = window.scrollY,
    offsetTopSection = section.offsetTop - 100,
    sectionHeight = section.offsetHeight,
    idSection = section.getAttribute("id");
    
    if(windowScrollY >= offsetTopSection && windowScrollY < offsetTopSection + sectionHeight) {
      semuaMenuLink.forEach(link => {
        link.classList.remove("active");
        document.querySelector(".navbar .menu a[href*=" + idSection + "]").classList.add("active");
        
      })
      
    }
    
    
  })
  
})

// Function Mengetik
const elementKetik = document.querySelector("#mengetik");
let textKetik = ["Fullstack Developer", "Designer UI/UX", "Microsoft Data Entry"];

let textIndex = 0,
karIndex = 0,
hapusText = false;

const ketikFunction = () => {
  let textDiketik = textKetik[textIndex],
  karSaatIni = textDiketik.substring(0, karIndex);
  elementKetik.textContent = karSaatIni;
  
  elementKetik.classList.add("sedangMengetik");
  
  if(!hapusText && karIndex < textDiketik.length) {
    karIndex++;
    setTimeout(ketikFunction, 200);
    
  } else if(hapusText && karIndex > 0) {
    karIndex--;
    setTimeout(ketikFunction, 200);
    
  } else {
    hapusText = !hapusText;
    elementKetik.classList.remove("sedangMengetik");
    textIndex = !hapusText ? (textIndex + 1) % textKetik.length : textIndex;
    setTimeout(ketikFunction, 800);
    
  }
}
ketikFunction();

// Dark Mode Function 
const iconMode = document.querySelector(".iconMode")
iconMode.addEventListener("click", () => {
  document.querySelector('html').classList.toggle('dark');
  iconMode.classList.toggle("active")
})

setInterval(function() {
  document.querySelector(".loading h3").textContent = "Fahmy."
  setTimeout(function() {
    document.querySelector(".loading h3").textContent = "Fahmy.."
  }, 300)
  setTimeout(function() {
    document.querySelector(".loading h3").textContent = "Fahmy..."
  }, 600)
  setTimeout(function() {
    document.querySelector(".loading h3").textContent = "Fahmy.."
  }, 900)
}, 1200);

window.addEventListener("load", () => {
  document.querySelector(".loading").classList.add("hidden");
})