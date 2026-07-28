const categories = [
  { number: "01", title: "人氣排行", subtitle: "みんなの定番" },
  { number: "02", title: "在地推薦", subtitle: "ローカルの声" },
  { number: "03", title: "零食伴手禮", subtitle: "お菓子・お土産" },
  { number: "04", title: "美妝藥妝", subtitle: "美容・ドラッグストア" },
  { number: "05", title: "價格比較", subtitle: "価格をくらべる" },
];

const methods = [
  {
    step: "壹",
    title: "蒐集",
    text: "整理日本官方、電商、媒體與社群的商品資訊，建立可查證的資料來源。",
  },
  {
    step: "貳",
    title: "比對",
    text: "交叉比較熱度、評價、價格與在地口碑，排除只靠廣告堆出的聲量。",
  },
  {
    step: "參",
    title: "更新",
    text: "持續追蹤新品與趨勢變化，讓排行榜保留時間軸，而不是一次性的清單。",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="必買研究所首頁">
          <span className="brand-name">必買研究所</span>
          <span className="brand-en">BUY LAB JP</span>
        </a>
        <nav aria-label="主要導覽">
          <a href="#categories">探索分類</a>
          <a href="#method">研究方法</a>
          <a href="#about">關於我們</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">日本の“買ってよかった”を、もっと確かに。</p>
          <h1>
            日本好物，
            <br />
            不再靠運氣找到
          </h1>
          <p className="hero-lead">
            整合日本商品排行、在地推薦與價格比較，
            <br />
            讓每一次選購都有根據。
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#categories">
              開始探索 <span aria-hidden="true">→</span>
            </a>
            <a className="button secondary" href="#method">
              了解研究方法 <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <img src="/hero-collage.png" alt="" />
        </div>
      </section>

      <section className="category-strip" id="categories" aria-label="商品分類">
        {categories.map((category) => (
          <a href="#coming-soon" className="category-card" key={category.number}>
            <span className="category-number">{category.number}</span>
            <span>
              <strong>{category.title}</strong>
              <small>{category.subtitle}</small>
            </span>
            <span className="arrow" aria-hidden="true">→</span>
          </a>
        ))}
      </section>

      <section className="method section" id="method">
        <div className="section-heading">
          <p className="kicker">OUR METHOD — 研究方法</p>
          <h2>不是推薦更多，<br />而是把選擇變簡單。</h2>
        </div>
        <div className="method-list">
          {methods.map((method) => (
            <article key={method.step}>
              <span className="method-step">{method.step}</span>
              <h3>{method.title}</h3>
              <p>{method.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about section" id="about">
        <p className="vertical-note">BUY LAB JOURNAL · 2026</p>
        <div>
          <p className="kicker">ABOUT — 關於必買研究所</p>
          <h2>從日本旅行前的那句<br />「到底該買什麼？」開始。</h2>
        </div>
        <div className="about-copy">
          <p>
            必買研究所是一個正在籌備中的日本購物決策平台。我們希望把散落各處的商品情報，
            整理成可信、好懂、能實際幫你做決定的指南。
          </p>
          <p>
            第一階段將從日本人氣商品、城市推薦與價格情報開始，逐步建立具有更新紀錄的商品資料庫。
          </p>
          <span className="status-seal">準備中<br /><small>COMING SOON</small></span>
        </div>
      </section>

      <footer id="coming-soon">
        <div>
          <span className="brand-name">必買研究所</span>
          <span className="brand-en">BUY LAB JP</span>
        </div>
        <p>日本好物，不再靠運氣找到。</p>
        <p className="copyright">© 2026 Buy Lab JP. All rights reserved.</p>
      </footer>
    </main>
  );
}
