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
        detailBtn.textContent = "📖 詳しく見る (画面構成・機能詳細)";
      } else {
        detailBtn.textContent = "✖ 閉じる";
      }
    });
  }

  // --- 3. 〇×ゲームの「詳しく見る (About)」開閉 ---
  const gameDetailBtn = document.getElementById("toggle-game-about");
  const gameDetailContent = document.getElementById("game-about-content");

  if (gameDetailBtn && gameDetailContent) {
    gameDetailBtn.addEventListener("click", () => {
      gameDetailContent.classList.toggle("hidden");

      if (gameDetailContent.classList.contains("hidden")) {
        gameDetailBtn.textContent = "📖 詳しく見る (画面・プログラム構成・工夫点)";
      } else {
        gameDetailBtn.textContent = "✖ 閉じる";
      }
    });
  }
});
