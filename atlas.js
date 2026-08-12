const atlasArticle = document.querySelector("#atlasArticle");

let catalog = [];

function selectedSpecies() {
  const requested = new URLSearchParams(window.location.search).get("species");
  return catalog.some((item) => item.key === requested) ? requested : catalog[0]?.key;
}

function renderSpecies(species) {
  document.title = `${species.name}参考图鉴 · 陆寄居蟹品种鉴别`;
  const speciesOptions = catalog.map((item) => `
    <option value="${item.key}" ${item.key === species.key ? "selected" : ""}>${item.name}</option>`).join("");
  atlasArticle.innerHTML = `
    <header class="atlas-hero">
      <label class="atlas-switcher">
        <span>切换图鉴</span>
        <select data-action="switch-species" aria-label="切换图鉴品种">
          ${speciesOptions}
        </select>
      </label>
      <div>
        <p class="eyebrow">陆寄居蟹物种参考图鉴</p>
        <h1>${species.name}</h1>
        <p class="atlas-latin">${species.scientificName}</p>
      </div>
      <img src="${species.cover}" alt="${species.name}" />
    </header>
    <div class="atlas-source-content">${species.content}</div>
    <div class="atlas-end-actions">
      <a class="primary-button" href="./">返回鉴别工具</a>
      <button class="source-button" type="button" data-action="top">回到顶部</button>
    </div>`;
  sanitizeAtlasContent();
}

function sanitizeAtlasContent() {
  const content = atlasArticle.querySelector(".atlas-source-content");
  if (!content) return;

  content.querySelectorAll("a").forEach((link) => {
    const label = link.textContent.trim();
    const isBareLink = /^(?:⇒\s*)?(?:(?:https?:\/\/|www\.)|(?:[a-z0-9-]+\.)+[a-z]{2,}(?:\/|$))/i.test(label);
    const isLinkMarker = /^[\s⇒➊➋➌➍➎➏➐➑➒➓❶❷❸❹❺❻❼❽❾❿]+$/.test(label);
    if (link.querySelector("img") || (label && !isBareLink && !isLinkMarker)) {
      const fragment = document.createDocumentFragment();
      while (link.firstChild) fragment.append(link.firstChild);
      link.replaceWith(fragment);
      return;
    }
    link.remove();
  });

  content.querySelectorAll("p, dd, figcaption").forEach((element) => {
    const text = element.textContent.replace(/\s+/g, " ").trim();
    const isEnglishCredit = /^(?:⇒\s*)?(?:(?:photos?|images?|pictures?)\s*(?:©|from\b|by\b|credit\b|courtesy\b|source\b)|©\s*(?:photos?|images?|pictures?))/i.test(text);
    const isChineseCredit = /^(?:图片|照片)(?:来源|来自|由|提供|摄影|攝影)|^(?:摄影|攝影|供图|供圖)\s*[:：]/.test(text);
    if (isEnglishCredit || isChineseCredit) element.remove();
  });

  const walker = document.createTreeWalker(content, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);
  textNodes.forEach((node) => {
    node.nodeValue = node.nodeValue
      .replace(/Exif_JPEG_PICTURE/gi, "")
      .replace(/(?:⇒\s*)?(?:https?:\/\/|www\.)\S+/gi, "")
      .replace(/(?:⇒\s*)?\b(?:[a-z0-9-]+\.)+[a-z]{2,}(?:\/[^\s]*)?/gi, "")
      .replace(/⇒/g, "")
      .replace(/原整文章请看(?:这里|以下)\s*[:：]?[。.]?/g, "")
      .replace(/[ \t]{2,}/g, " ");
  });

  content.querySelectorAll("p, li, dd, figcaption").forEach((element) => {
    if (!element.textContent.trim() && !element.querySelector("img")) element.remove();
  });
}

async function loadAtlas() {
  try {
    const catalogResponse = await fetch("atlas-data/index.json");
    if (!catalogResponse.ok) throw new Error("图鉴目录读取失败");
    catalog = await catalogResponse.json();
    const activeKey = selectedSpecies();

    const speciesResponse = await fetch(`atlas-data/${activeKey}.json`);
    if (!speciesResponse.ok) throw new Error("物种图鉴读取失败");
    renderSpecies(await speciesResponse.json());
  } catch (error) {
    atlasArticle.innerHTML = `
      <div class="atlas-error">
        <h1>图鉴载入失败</h1>
        <p>${error.message}</p>
        <a class="primary-button" href="./">返回鉴别工具</a>
      </div>`;
  }
}

atlasArticle.addEventListener("click", (event) => {
  if (event.target.closest('[data-action="top"]')) window.scrollTo({ top: 0, behavior: "smooth" });
});

atlasArticle.addEventListener("change", (event) => {
  if (!event.target.matches('[data-action="switch-species"]')) return;
  window.location.assign(`atlas.html?species=${encodeURIComponent(event.target.value)}`);
});

loadAtlas();
