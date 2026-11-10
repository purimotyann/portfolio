document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // 1. 全てのボタンから active クラスを外す
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      // 2. 全てのコンテンツから active クラスを外す
      tabContents.forEach((content) => content.classList.remove("active"));

      // 3. クリックされたボタンに active クラスを付ける
      button.classList.add("active");

      // 4. 対応するコンテンツを表示する
      const targetTab = button.getAttribute("data-tab");
      const targetContent = document.getElementById(targetTab);
      if (targetContent) {
        targetContent.classList.add("active");
      }
    });
  });
});
