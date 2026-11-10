document.addEventListener("DOMContentLoaded", () => {
  // --- 1. Tab Switching ---
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));

      button.classList.add("active");

      const targetTab = button.getAttribute("data-tab");
      const targetContent = document.getElementById(targetTab);
      if (targetContent) {
        targetContent.classList.add("active");
      }
    });
  });

  // --- 2. Language Toggle ---
  const langBtn = document.getElementById("lang-toggle-btn");
  let currentLang = "ja";

  if (langBtn) {
    langBtn.addEventListener("click", () => {
      currentLang = currentLang === "ja" ? "en" : "ja";
      langBtn.textContent = currentLang === "ja" ? "🌐 English" : "🌐 日本語";

      const translatableElements = document.querySelectorAll("[data-ja][data-en]");
      translatableElements.forEach((el) => {
        const text = el.getAttribute(`data-${currentLang}`);
        if (text) {
          el.textContent = text;
        }
      });
    });
  }
});
