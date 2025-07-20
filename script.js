// Wait for the page to load fully
document.addEventListener("DOMContentLoaded", () => {
  console.log("JB Public School website loaded successfully.");

  // Highlight current nav link (if not already handled via CSS)
  const links = document.querySelectorAll(".navbar nav a");
  const currentURL = window.location.href;

  links.forEach((link) => {
    if (currentURL.includes(link.getAttribute("href"))) {
      link.classList.add("active");
    }
  });

  // Optional: You can add scroll event, gallery logic, form validation here
});
const quotes = [
  "Be the change that you wish to see in the world. — Mahatma Gandhi",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
  "Believe you can and you're halfway there. — Theodore Roosevelt",
  "Your time is limited, so don’t waste it living someone else’s life. — Steve Jobs",
  "It always seems impossible until it's done. — Nelson Mandela",
  "Don’t watch the clock; do what it does. Keep going. — Sam Levenson",
  "Dream big and dare to fail. — Norman Vaughan",
  "What lies behind us and what lies before us are tiny matters compared to what lies within us. — Ralph Waldo Emerson",
  "Hardships often prepare ordinary people for an extraordinary destiny. — C.S. Lewis",
  "If you want to achieve greatness, stop asking for permission. — Anonymous",
  "Opportunities don't happen. You create them. — Chris Grosser",
  "The future belongs to those who believe in the beauty of their dreams. — Eleanor Roosevelt",
  "Don’t let yesterday take up too much of today. — Will Rogers",
  "You are never too old to set another goal or to dream a new dream. — C.S. Lewis",
  "Success usually comes to those who are too busy to be looking for it. — Henry David Thoreau",
  "Act as if what you do makes a difference. It does. — William James",
  "Only those who dare to fail greatly can ever achieve greatly. — Robert F. Kennedy",
  "It does not matter how slowly you go as long as you do not stop. — Confucius",
  "I am not a product of my circumstances. I am a product of my decisions. — Stephen R. Covey",
];

let index = 0;
const notice = document.getElementById("notice-container");
function showNextQuote() {
  if (notice) {
    notice.textContent = quotes[index];
    index = (index + 1) % quotes.length;
  }
}
showNextQuote();
setInterval(showNextQuote, 15000);

// dsfsdfdfjfjkfadff

fetch("popup.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("popupContainer").innerHTML = data;

    // DOM load hone ke baad click listener lagao
    setTimeout(() => {
      const popupOverlay = document.getElementById("popupOverlay");
      const popupBox = document.querySelector(".popup-box");

      if (popupOverlay && popupBox) {
        // Outside click detect karo
        popupOverlay.addEventListener("click", function (e) {
          if (!popupBox.contains(e.target)) {
            popupOverlay.style.display = "none";
          }
        });
      } else {
        console.error("Popup elements not found.");
      }
    }, 100);
  })
  .catch((error) => console.error("Popup load failed:", error));
