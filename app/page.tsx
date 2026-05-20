import Link from "next/link";

const entries = [
  {
    slug: "hackathon",
    date: "きっかけ / 2024-08・09",
    title: "ハッカソンでエンジニアを志した話",
    summary:
      "開発未経験で参加した防災・減災系IoTハッカソン。バックエンドを担当し、GPS情報を読み取ってロボットを動かす仕組みを作りました。この経験が、エンジニアを志すきっかけになりました。",
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
        <p>プロフィール</p>
      </aside>
    </main>
  </>
  )
}
