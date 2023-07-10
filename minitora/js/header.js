// ヘッダー要素の作成
var header = document.createElement("header");

// ロゴ部分の作成
var logoLink = document.createElement("a");
logoLink.href = "index.html";
logoLink.style.color = "inherit";
logoLink.style.textDecoration = "none";

var logoHeading = document.createElement("h3");
logoHeading.textContent = "会津大学 トライアスロン部";

logoLink.appendChild(logoHeading);
header.appendChild(logoLink);

// ナビゲーションメニュー部分の作成
var navbarDiv = document.createElement("div");
navbarDiv.className = "navbar";

var menuNav = document.createElement("nav");
menuNav.id = "menu";
menuNav.className = "menu";

var menuList = document.createElement("ul");

// メニュー項目の作成
var menuItems = [
  { href: "index.html", text: "ホーム" },
  { href: "about.html", text: "活動" },
  { href: "minitora2022.html", text: "ミニトライアスロン" },
  { href: "member.html", text: "部員" },
  { href: "plan.html", text: "年間計画" },
  { href: "report.html", text: "報告" },
  { href: "forMember.html", text: "部員の方へ" }
];

menuItems.forEach(function(item) {
  var menuItem = document.createElement("li");
  var menuLink = document.createElement("a");
  menuLink.href = item.href;
  menuLink.textContent = item.text;
  menuItem.appendChild(menuLink);
  menuList.appendChild(menuItem);
});

menuNav.appendChild(menuList);
navbarDiv.appendChild(menuNav);

// ハンバーガーメニュー部分の作成
var hamburgerDiv = document.createElement("div");
hamburgerDiv.className = "hamburger";
hamburgerDiv.onclick = toggleMenu;

for (var i = 0; i < 3; i++) {
  var span = document.createElement("span");
  hamburgerDiv.appendChild(span);
}

navbarDiv.appendChild(hamburgerDiv);

// ヘッダー要素に子要素を追加
header.appendChild(navbarDiv);

// ヘッダー要素をbodyに追加
document.body.appendChild(header);

// メニュー表示/非表示を切り替える関数
function toggleMenu() {
  var menu = document.getElementById("menu");
  menu.classList.toggle("active");
  const isOpen = menu.classList.contains('open');
  if (isOpen){
    menu.classList.remove('open');
  }
  else {
    menu.classList.add('open');
  }
}


console.log(header)