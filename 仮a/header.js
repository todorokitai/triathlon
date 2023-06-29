function createLink(href, text) {
  const link = document.createElement("a");
  link.href = href;
  link.innerText = text;
  return link;
}

const headline = document.createElement("h1");
headline.className = "headline";
headline.style.color = "black";
headline.innerText = "会津大学トライアスロン部";
headline.href = "index.html";//🚨ここが反映されない



const header = document.querySelector("header");
header.appendChild(headline);

const navList = document.createElement("ul");
navList.className = "nav-list";

const navItems = [
  { href: "index.html", text: "ホーム" },
  { href: "about.html", text: "活動" },
  { href: "minitora2022.html", text: "ミニトライアスロン" },
  { href: "member.html", text: "部員" },
  { href: "plan.html", text: "年間計画" },
  { href: "report.html", text: "報告" },
  { href: "forMember.html", text: "部員の方へ" }
];

navItems.forEach(function(item) {
  const listItem = document.createElement("li");
  listItem.className = "nav-list-item";
  listItem.appendChild(createLink(item.href, item.text));
  navList.appendChild(listItem);
});

header.appendChild(navList);


console.log(header)