const IMAGE_BASE = "assets/reference";
const IMAGE_VERSION = "20260812-opt1";

const results = {
  brevimanus: species("短掌陆寄居蟹", "Coenobita brevimanus", "2020/09/coenobita_brevimanus_14.jpg", "coenobita_brevimanus_ch.htm"),
  clypeatus: species("西伯利斯陆寄居蟹", "Coenobita clypeatus", "2020/09/coenobita_clypeatus_16.jpg", "coenobita_clypeatus_ch.htm"),
  violascens: species("深紫陆寄居蟹", "Coenobita violascens", "2020/09/coenobita_violascens_9.jpg", "coenobita_violascens_ch.htm"),
  compressus: species("厄瓜多尔产陆寄居蟹", "Coenobita compressus", "2020/09/coenobita_compressus_18.jpg", "coenobita_compressus_ch.htm"),
  cavipes: species("凹足陆寄居蟹", "Coenobita cavipes", "2020/09/coenobita_cavipes_15.jpg", "coenobita_cavipes_ch.htm"),
  lila: species("淡紫陆寄居蟹", "Coenobita lila", "2020/09/coenobita_lila_19.jpg", "coenobita_lila_ch.htm"),
  moluccensis: species("摩鹿加陆寄居蟹", "Coenobita moluccensis", "2025/05/coenobita_moluccensis_toppic.jpg", "coenobita_moluccensis_ch.htm"),
  patsyae: species("帕西陆寄居蟹", "Coenobita patsyae", "2025/05/coenobita_patsyae_cover.jpg", "coenobita_patsyae_ch.htm"),
  celebensis: species("西里伯陆寄居蟹", "Coenobita celebensis", "2025/05/coenobita_celebensis_toppic.jpg", "coenobita_celebensis_ch.htm"),
  longitarsis: species("长趾陆寄居蟹", "Coenobita longitarsis", "2025/04/coenobita_longitarsis_toppic.png", "coenobita_longitarsis_ch.htm"),
  spinosus: species("棘足陆寄居蟹", "Coenobita spinosus", "2020/09/coenobita_spinosus_17.jpg", "coenobita_spinosus_ch.htm"),
  rugosus: species("灰白陆寄居蟹", "Coenobita rugosus", "2023/04/rugosusridge-1.jpg", "coenobita_rugosus_ch.htm"),
  pseudorugosus: species("伪灰白陆寄居蟹", "Coenobita pseudorugosus", "2025/04/coenobita-pseudorugosus_toppic.jpg", "coenobita_pseudorugosus_ch.htm"),
  granularis: species("颗粒陆寄居蟹", "Coenobita granularis", "2025/05/coenobita_granularis_5-2048x1365.jpg", "coenobita_granularis_ch.htm"),
  perlatus: species("橙红陆寄居蟹", "Coenobita perlatus", "2020/09/coenobita_perlatus_toppic.jpg", "coenobita_perlatus_ch.htm"),
  carnescens: species("Coenobita carnescens", "Coenobita carnescens", "2020/09/coenobita_carnescens_toppic.jpg", "coenobita_carnescens_ch.htm"),
  purpureus: species("紫陆寄居蟹", "Coenobita purpureus", "2020/09/coenobita_purpureus_16.jpg", "coenobita_purpureus_ch.htm"),
  variabilis: species("澳洲产陆寄居蟹", "Coenobita variabilis", "2020/09/coenobita_variabilis_7.jpg", "coenobita_variabilis_ch.htm"),
  scaevola: species("红海产陆寄居蟹", "Coenobita scaevola", "2020/09/coenobita_scaevola_13.jpg", "coenobita_scaevola_ch.htm"),
  rubescens: species("西非产陆寄居蟹", "Coenobita rubescens", "2020/09/coenobita_rubescens_4.jpg", "coenobita_rubescens_ch.htm")
};

const nodes = {
  "1": {
    title: "步骤 1 · 观察眼柄形状",
    help: "请点击与你的陆寄居蟹最相符的图片和描述。",
    options: [
      option("1. 眼柄呈圆型 → 2", "2023/04/round_eye.jpg", "2"),
      option("1. 眼柄呈扁平四方形 → 3", "2023/04/compressed_eye.jpg", "3")
    ]
  },
  "2": {
    title: "步骤 2 · 比较圆型眼柄与体色",
    help: "依照原鉴别页的 2a、2b 特征选择。",
    options: [
      option("2a. 眼柄眼睛呈长条圆柱状，体色呈紫色、紫红色、红豆色、棕色等等 → 短掌陆寄居蟹", "2020/09/coenobita_brevimanus_14.jpg", null, "brevimanus"),
      option("2b. 眼柄呈圆型，但底部较粗，体色是红色色系 → 西伯利斯陆寄居蟹", "2020/09/coenobita_clypeatus_16.jpg", null, "clypeatus")
    ]
  },
  "3": {
    title: "步骤 3 · 观察眼柄斑纹及其他特征",
    help: "依照原鉴别页的 3a 至 3d 特征选择。",
    options: [
      option("3a. 眼柄底部带有黑色斑纹 → 4", "2023/04/blackband.jpg", "4"),
      option("3b. 眼柄底部没有黑色斑纹 → 7", "2023/04/noblackband.jpg", "7"),
      option("3c. 眼柄整体呈黑色，第一触角呈红色，体色是紫色色系，左螯脚没有有齿状斜向颗粒列 (////) → 深紫陆寄居蟹", "2020/09/coenobita_violascens_9.jpg", null, "violascens"),
      option("3d. 眼晴形状像「，」(逗号)，体色是褐色色系，左螯脚具有齿状斜向颗粒列 (////) → 厄瓜多尔产陆寄居蟹", "2020/09/coenobita_compressus_18.jpg", null, "compressus")
    ]
  },
  "4": {
    title: "步骤 4 · 观察左螯脚颗粒列",
    help: "依照原鉴别页的 4a、4b 特征选择。",
    options: [
      option("4a. 左螯脚没有有齿状斜向颗粒列 (////) → 5", "2023/04/NOridge.jpg", "5"),
      option("4b. 左螯脚具有齿状斜向颗粒列 (////) → 6", "2020/08/ridge.jpg", "6")
    ]
  },
  "5": {
    title: "步骤 5 · 综合比较身体各部位",
    help: "依照原鉴别页列出的特征选择，文字编号保留原页标示。",
    options: [
      option("5a. 左螯脚可动指和不动指呈白色，体色是褐色色系 → 凹足陆寄居蟹", "2020/09/coenobita_cavipes_15.jpg", null, "cavipes"),
      option("5b. 眼柄底部带有黑色斑纹，体色是紫色色系 → 淡紫陆寄居蟹", "2020/09/coenobita_lila_19.jpg", null, "lila"),
      option("5c. 眼柄颜色跟体色一致，左螯脚长节有轻微的黄色或橙色色斑，第一和第二触角呈褐色 → 摩鹿加陆寄居蟹", "2025/05/coenobita_moluccensis_toppic.jpg", null, "moluccensis"),
      option("5b. 眼柄眼色呈白色或淡黄，左螯脚长节有不同呈度的黄色或橙色色斑，第一和第二触角呈橙色 → 帕西陆寄居蟹", "2025/05/coenobita_patsyae_cover.jpg", null, "patsyae"),
      option("5e. 眼柄眼色呈白色或淡黄，左螯脚长节有明显黄色或橙色色斑，第一和第二触角呈橙色 → 西里伯陆寄居蟹", "2025/05/coenobita_celebensis_toppic.jpg", null, "celebensis"),
      option("5f. 外表跟凹足陆寄居蟹很相似，但第三胸足十分幼细和修长 → 长趾陆寄居蟹", "2025/04/coenobita_longitarsis_toppic.png", null, "longitarsis"),
      option("5g. 身体各部分具有很多锐棘, 体色是暗红色系 → 棘足陆寄居蟹", "2020/09/coenobita_spinosus_17.jpg", null, "spinosus")
    ]
  },
  "6": {
    title: "步骤 6 · 比较灰白种近似特征",
    help: "依照原鉴别页的 6a 至 6c 特征选择。",
    options: [
      option("6a. 眼柄底部带有黑色斑纹, 前甲顶部有深色「O」型班纹，体色多变 → 灰白陆寄居蟹", "2023/04/rugosusridge-1.jpg", null, "rugosus"),
      option("6b. 外表跟灰白陆寄居蟹很相似，但左螯脚掌部下缘的前半部分几乎平直 → 伪灰白陆寄居蟹", "2025/04/coenobita-pseudorugosus_toppic.jpg", null, "pseudorugosus"),
      option("6c. 外表跟灰白陆寄居蟹很相似，但体色呈褐色色系，左第三胸足强壮 → 颗粒陆寄居蟹", "2025/05/coenobita_granularis_5-2048x1365.jpg", null, "granularis")
    ]
  },
  "7": {
    title: "步骤 7 · 比较左螯脚颗粒列",
    help: "依照原鉴别页的 7a、7b 特征选择。",
    options: [
      option("7a. 左螯脚具有明显的齿状斜向颗粒列 (////) → 8", "2020/08/ridge.jpg", "8"),
      option("7b. 左螯脚具有齿状斜向颗粒列 (////)，但并不明显 → 9", "2023/04/ridgenotobvious.jpg", "9")
    ]
  },
  "8": {
    title: "步骤 8 · 比较体色与花纹",
    help: "依照原鉴别页的 8a、8b 特征选择。",
    options: [
      option("8a. 体色是橙色色系，全身着有白色颗点 → 橙红陆寄居蟹", "2020/09/coenobita_perlatus_toppic.jpg", null, "perlatus"),
      option("8b. 外表跟橙红陆寄居蟹很相似，但呈白色、着有灰色或褐色横向环带 → Coenobita carnescens", "2020/09/coenobita_carnescens_toppic.jpg", null, "carnescens")
    ]
  },
  "9": {
    title: "步骤 9 · 比较体色及刚毛特征",
    help: "依照原鉴别页的 9a 至 9d 特征选择。",
    options: [
      option("9a. 眼柄呈白色，底部没有黑色斑纹，体色是紫蓝色色系 → 紫陆寄居蟹", "2020/09/coenobita_purpureus_16.jpg", null, "purpureus"),
      option("9b. 体色偏向浅褐色，米白色色系，右螯脚长节下缘内有一束长刚毛 → 澳洲产陆寄居蟹", "2020/09/coenobita_variabilis_7.jpg", null, "variabilis"),
      option("9c. 体色偏向米白色，白色，浅灰色系，右螯脚长节下缘内有一束长刚毛 → 红海产陆寄居蟹", "2020/09/coenobita_scaevola_13.jpg", null, "scaevola"),
      option("9d. 身体各部分没有锐棘, 体色是暗红色系 → 西非产陆寄居蟹", "2020/09/coenobita_rubescens_4.jpg", null, "rubescens")
    ]
  }
};

let state = { current: "1", history: [], result: null };
const app = document.querySelector("#app");
const headerReset = document.querySelector("#headerReset");

function species(name, scientificName, imagePath, detailPath) {
  const reference = detailPath.replace(/^coenobita_/, "").replace(/_ch\.htm$/, "");
  return { name, scientificName, image: `${IMAGE_BASE}/${imagePath}?v=${IMAGE_VERSION}`, reference };
}

function option(label, imagePath, next = null, result = null) {
  return { label, image: `${IMAGE_BASE}/${imagePath}?v=${IMAGE_VERSION}`, next, result };
}

function displayOptionLabel(label) {
  return label.replace(/^\S+\s*/, "").replace(/\s*→.*$/, "").trim();
}

function render(shouldScroll = false) {
  headerReset.disabled = state.current === "1" && !state.result;
  app.innerHTML = state.result ? resultTemplate(results[state.result]) : questionTemplate(nodes[state.current]);
  if (shouldScroll) window.scrollTo({ top: document.querySelector("#identify").offsetTop - 10, behavior: "smooth" });
}

function questionTemplate(node) {
  const gridClass = `option-grid option-count-${node.options.length}`;
  return `
    <div class="fade-in">
      <div class="step-meta">
        <span class="step-label">鉴别节点 ${state.current}</span>
        <span class="progress-track" aria-hidden="true"><span class="progress-value" style="width:${Math.min((state.history.length + 1) / 4 * 100, 100)}%"></span></span>
      </div>
      <h1 class="question-title">${node.title}</h1>
      <div class="${gridClass}">
        ${node.options.map((item, index) => optionTemplate(item, index)).join("")}
      </div>
      <div class="quiz-actions">
        <button class="back-button" type="button" data-action="back" ${state.history.length ? "" : "hidden"}>返回上一步</button>
      </div>
    </div>`;
}

function optionTemplate(item, index) {
  const displayLabel = displayOptionLabel(item.label);
  return `
    <button class="option-card" type="button" data-option-index="${index}" aria-label="选择：${displayLabel}">
      <span class="option-image"><img src="${item.image}" alt="${item.label}" loading="${index > 3 ? "lazy" : "eager"}" /></span>
      <span class="option-body">
        <span class="option-copy">${displayLabel}</span>
      </span>
    </button>`;
}

function resultTemplate(result) {
  const selectedLabel = displayOptionLabel(state.history.at(-1)?.label || "");
  return `
    <div class="fade-in">
      <div class="result-kicker"><span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6" /></svg></span>鉴别完成</div>
      <div class="result-layout">
        <figure class="result-image"><img src="${result.image}" alt="${result.name}" /></figure>
        <div class="result-content">
          <h1>${result.name}</h1>
          <p class="latin-name">${result.scientificName}</p>
          <div class="result-summary">
            <small>主要特征</small>
            <p>${selectedLabel}</p>
          </div>
          <div class="result-actions">
            <button class="primary-button" type="button" data-action="reset">重新鉴别</button>
            <a class="source-button" href="atlas.html?species=${result.reference}">查看参考图鉴</a>
          </div>
          <p class="result-disclaimer">外观会受年龄、个体差异和光线影响，结果仅供初步判断。</p>
        </div>
      </div>
      <div class="quiz-actions">
        <button class="back-button" type="button" data-action="back">返回上一步</button>
      </div>
    </div>`;
}

function chooseOption(index) {
  const item = nodes[state.current].options[index];
  if (!item) return;
  state.history.push({ node: state.current, optionIndex: index, label: item.label });
  if (item.result) state.result = item.result;
  else state.current = item.next;
  render(true);
}

function goBack() {
  const previous = state.history.pop();
  if (!previous) return;
  state.current = previous.node;
  state.result = null;
  render(true);
}

function reset() {
  state = { current: "1", history: [], result: null };
  render(true);
}

app.addEventListener("click", (event) => {
  const optionButton = event.target.closest("[data-option-index]");
  if (optionButton) {
    if (app.dataset.transitioning === "true") return;
    app.dataset.transitioning = "true";
    optionButton.classList.add("is-selecting");
    window.setTimeout(() => {
      chooseOption(Number(optionButton.dataset.optionIndex));
      delete app.dataset.transitioning;
    }, 130);
    return;
  }
  const actionButton = event.target.closest("[data-action]");
  if (actionButton?.dataset.action === "back") goBack();
  if (actionButton?.dataset.action === "reset") reset();
});

headerReset.addEventListener("click", reset);
render();
