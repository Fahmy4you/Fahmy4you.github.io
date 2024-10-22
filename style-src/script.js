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