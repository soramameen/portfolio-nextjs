import Link from "next/link";

const entries = [
  {
    slug: "univ",
    date: "大学 / 情報科学の基礎",
    title: "大学で学んだ情報科学の基礎",
    summary:
      "C言語、アセンブリ、CPU設計、ソケットプログラミング、コンパイラなどを通して、普段書いているプログラムの裏側を学びました。",
  },
  {
    slug: "hackathon",
    date: "きっかけ / 2024-08・09",
    title: "ハッカソンでエンジニアを志した話",
    summary:
      "開発未経験で参加した防災・減災系IoTハッカソン。バックエンドを担当し、GPS情報を読み取ってロボットを動かす仕組みを作りました。この経験が、エンジニアを志すきっかけになりました。",
  },
  {
    slug: "learning",
    date: "学習 / 2024-09 〜 2024-11",
    title: "ハッカソンの後に始めた三ヶ月の学習",
    summary:
      "HTML、CSS、JavaScriptから学び始め、React、Next.js、TypeScriptまで一気に学習しました。その後、参考書紹介サイト、リアルタイムチャット、ITニュースをクイズ化するサイトを作りました。",
  },
  {
    slug: "plex-internship",
    date: "実務経験 / 2025-06 〜 2025-09",
    title: "株式会社プレックスでのフルタイムインターン",
    summary:
      "建設業向けSaaSで、タスク管理機能を中心に、組織管理、メール送付、権限管理などを担当しました。実務で機能を設計し、実装していく流れを経験しました。",
  },
  {
    slug: "stores-internship",
    date: "実務経験 / 2026-03",
    title: "STORESでの決済関連システム開発",
    summary:
      "予約・決済関連システムで、解約新規に対応するための設計変更を担当しました。本番で動いている決済システムを安全に変える難しさを経験しました。",
  },
  {
    slug: "ai-travel",
    date: "個人開発 / 2026-05",
    title: "LLMアプリのコツは「LLMを使いすぎない」ことかもしれない",
    summary:
      "自然文で旅行条件を入力できる航空券検索CLIをLangChainで開発。LLMの責務を絞り、空港コード解決や旅程生成は決定論的に処理。LLMアプリ設計の学びをまとめました。",
  },
];

export default function Home() {
  return(
  <>
    <section className="hero">
      <h1>エンジニアを志してから、今までの経験</h1>
      <p>ハッカソンをきっかけにエンジニアを志し始めました</p>
    </section>
    <main className="layout">
      <section className="article-list">
        {entries.map((e) => (
          <article key={e.slug}>
            <div className="date">{e.date}</div>
            <h2><Link href={`/${e.slug}`}>{e.title}</Link></h2>
            <p>{e.summary}</p>
            <Link className="more" href={`/${e.slug}`}>詳細を読む</Link>
          </article>
        ))}
      </section>
      <aside className="sidebar">
        <section className="side-section">
          <h3>プロフィール</h3>
          <div className="profile-name">中嶋 空偉</div>
          <p>岡山大学。Web開発、SaaS、決済領域、AIを使ったプロダクト開発に関心があります。</p>
        </section>
        <section className="side-section">
          <h3>経験</h3>
          <ul>
            <li>React / Next.js</li>
            <li>Ruby on Rails</li>
            <li>GraphQL</li>
            <li>MongoDB / PostgreSQL</li>
            <li>決済関連システム</li>
          </ul>
        </section>
        <section className="side-section links">
          <h3>リンク</h3>
          <ul>
            <li><a href="https://github.com/soramameen"><img src="https://cdn.simpleicons.org/github/333333" alt="" width="15" height="15" />GitHub</a></li>
            <li><a href="https://x.com/soramameen"><img src="https://cdn.simpleicons.org/x/333333" alt="" width="15" height="15" />X</a></li>
            <li><a href="https://zenn.dev/soramameen"><img src="https://cdn.simpleicons.org/zenn/333333" alt="" width="15" height="15" />Zenn</a></li>
          </ul>
        </section>
      </aside>
    </main>
  </>
  )
}
