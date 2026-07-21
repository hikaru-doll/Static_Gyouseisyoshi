document.addEventListener("DOMContentLoaded", () => {
  // ハンバーガーメニューの開閉
  // const body = document.body;
  // const ham = document.querySelector(".ham");
  // const menu = document.querySelector(".main-navigation");
  // ham.addEventListener("click", () => {
  //   body.classList.toggle("open");
  // });
  // menu.addEventListener("click", () => {
  //   body.classList.remove("open");
  // });

  const body = document.body;
  const ham = document.querySelector(".ham");
  const menu = document.querySelector(".main-navigation");
  function closeMenu() {
    body.classList.remove("open");
    ham.setAttribute("aria-expanded", "false");
    ham.setAttribute("aria-label", "メニューを開く");
    ham.focus();
  }
  function openMenu() {
    body.classList.add("open");
    ham.setAttribute("aria-expanded", "true");
    ham.setAttribute("aria-label", "メニューを閉じる");
  }
  function toggleMenu() {
    body.classList.contains("open") ? closeMenu() : openMenu();
  }

  // ハンバーガーメニューの開閉とaria属性の切り替え
  ham.addEventListener("click", toggleMenu);

  // 開いたmenuのクリック時でメニューの閉会とaria属性の切り替え
  menu.addEventListener("click", closeMenu);

  // ESCキーでメニューを閉じる
  // 視覚上の状態だけでなくaria-expandedも同期する
  const handleKeydown = (e) => {
    if (e.key === "Escape") {
      closeMenu();
    }
  };
  document.addEventListener("keydown", handleKeydown);

  // キーボード操作時に、メニュー最後の次はボタンに戻るようにする
  const focusTrap = document.getElementById("js-focus-trap");
  focusTrap.addEventListener("focus", (e) => {
    ham.focus();
  });

  // コピーライトの西暦を動的に出力する
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // アニメーション　フッターがビューに入ったらヘッダーがぬるっと消える
  const header = document.querySelector(".header");
  const footer = document.querySelector(".footer");
  let observer = new IntersectionObserver(callback);
  observer.observe(footer);
  function callback(entries) {
    if (entries[0].isIntersecting) {
      header.classList.add("hide");
    } else {
      header.classList.remove("hide");
    }
  }
});
