document.addEventListener("DOMContentLoaded", () => {
  // --- 1. メニュータブ切り替え ---
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

  // --- 2. 学食アプリの「詳しく見る (About)」開閉 ---
  const detailBtn = document.getElementById("toggle-app-about");
  const detailContent = document.getElementById("app-about-content");

  if (detailBtn && detailContent) {
    detailBtn.addEventListener("click", () => {
      detailContent.classList.toggle("hidden");

      if (detailContent.classList.contains("hidden")) {
        detailBtn.textContent = "📖 詳しく見る (アプリ概要・機能・画像)";
      } else {
        detailBtn.textContent = "✖ 閉じる";
      }
    });
  }
});
