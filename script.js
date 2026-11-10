document.addEventListener("DOMContentLoaded", () => {
  // --- 1. タブ切り替え処理 ---
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

  // --- 2. 言語切り替え（日英）処理 ---
  const langBtn = document.getElementById("lang-toggle-btn");
  let currentLang = "ja";

  if (langBtn) {
    langBtn.addEventListener("click", () => {
      currentLang = currentLang === "ja" ? "en" : "ja";
      langBtn.textContent = currentLang === "ja" ? "🌐 English" : "🌐 日本語";

      // data-ja と data-en を持つ要素をすべて取得して書き換え
      const translatableElements = document.querySelectorAll("[data-ja][data-en]");
      translatableElements.forEach((el) => {
        el.textContent = el.getAttribute(`data-${currentLang}`);
      });
    });
  }
});
