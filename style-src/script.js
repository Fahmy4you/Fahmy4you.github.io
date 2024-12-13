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
const iconMode = document.querySelector(".iconMode");

// Fungsi untuk mengatur tema
function setTheme(theme) {
  document.querySelector('html').classList.toggle('dark', theme === 'dark');
  iconMode.classList.toggle("active", theme === 'dark');
}

// Memeriksa tema yang disimpan di localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  setTheme(savedTheme);
} else {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(prefersDark ? 'dark' : 'light');
}

iconMode.addEventListener("click", () => {
  const currentTheme = document.querySelector('html').classList.contains('dark') ? 'dark' : 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  setTheme(newTheme);
  localStorage.setItem('theme', newTheme); // Simpan preferensi ke localStorage
});


// Loading
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

// Kirim Pesan Ke Whatsapp
function sendMessageWa(noHP, message) {
  message = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${noHP}?text=${message}`;
  window.open(whatsappUrl, "_blank");
}

// Cek Input
function kirimError(element, message) {
  element = document.querySelector(element);

  // Hapus elemen error yang sudah ada sebelumnya
  const existingError = element.querySelector('.error');
  if (existingError) {
    existingError.remove();
    element.style.removeProperty('--aHover');
  }

  element.insertAdjacentHTML('beforeend', `<div class="error">
              <span>${message}</span>
            </div>`);
  element.style.setProperty('--aHover', 'var(--error)');
}

function kirimPesanBelumDiisi(field, element, message = "Field Is Required") {
  if(field == "") {
    kirimError(element, message);

    return false;
  }

  return true;
}

function kirimPesanEmailNonValid(field, element, message = "Field Must Be Valid Email") {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if(!emailRegex.test(field)) {
    kirimError(element, message);

    return false;
  }

  return true;
}

let formContact = document.querySelector('#formContact');
formContact.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(formContact);
  const input = Object.fromEntries(formData.entries());

  let firstName = input.firstName,
  lastName = input.lastName,
  email = input.email,
  message = input.message;

  // Hapus error sebelumnya
  document.querySelectorAll('.error').forEach(element => element.remove());
  document.querySelectorAll('.input-content').forEach(element => element.style.removeProperty('--aHover'));

  if(
    !kirimPesanBelumDiisi(firstName, '.firstName') ||
    !kirimPesanBelumDiisi(lastName, '.lastName') ||
    !kirimPesanBelumDiisi(email, '.email') ||
    !kirimPesanEmailNonValid(email, '.email') ||
    !kirimPesanBelumDiisi(message, '.message')
  ) {
    return false;
  }

  let messageSendToWa = `Hello My Name Is ${firstName} ${lastName}\nMy Email Is : ${email}\n\nMy Message Is :\n${message}`;

  sendMessageWa('6285708219230', messageSendToWa);
  formContact.reset();

})