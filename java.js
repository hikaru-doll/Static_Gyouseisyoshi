document.addEventListener("DOMContentLoaded", () => {
  // ハンバーガーメニューの開閉
  const body = document.body;
  const ham = document.querySelector(".ham");
  const menu = document.querySelector(".main-navigation");
  ham.addEventListener("click", () => {
    body.classList.toggle("open");
  });
  menu.addEventListener("click", () => {
    body.classList.remove("open");
  });
  // フッターがビューに入ったらヘッダーが消える
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
