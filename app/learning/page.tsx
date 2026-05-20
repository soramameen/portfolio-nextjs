import Link from "next/link";

export default function Learning() {
  return (
    <main className="wrap">
      <Link className="back" href="/">
        ← soramame の記録
      </Link>
      <article>
        <div className="date">2024-09 〜 2024-11</div>
        <h1>ハッカソンの後に始めた三ヶ月の学習</h1>

        <p>
          ハッカソンを通して、ソフトウェアエンジニアになりたいと思うようになりました。終わった日の夜から、まずは何を学べばいいのかを調べ、HTMLから勉強を始めました。
        </p>
        <p>
          順番としては、HTML、CSS、JavaScript、React、Next.js、TypeScript
          の順で学んでいきました。大学が終わった後の時間と土日を使って、9月から11月くらいまでの3ヶ月間、かなり集中して取り組みました。
        </p>

        <h2>最初は手を動かして覚えた</h2>
        <p>
          HTML、CSS、JavaScriptはYouTubeの長い講座を見ながら学びました。どちらも8時間ほどある動画で、練習も多く、無料とは思えない内容でした。
        </p>
        <p>
          最近はAIに任せて飛ばしてしまう人も多い部分かもしれませんが、自分はここをかなり手を動かして学びました。タグを書く、スタイルを当てる、DOMを触る、イベントを扱う。今振り返ると、地味ですが大事な時間だったと思います。
        </p>
        <p>
          React、Next.js、TypeScriptはUdemyの講座で学びました。Reactの基礎、Hooks、状態管理、Next.js、TypeScriptまで一通り触りました。
        </p>

        <h2>作ってみたもの</h2>
        <p>
          ある程度学んだ後は、Webアプリを実際に作ってみることにしました。この時期に作ったものは主に3つです。
        </p>

        <section className="work">
          <h3>UniStudyGuide!</h3>
          <p>
            <a className="link" href="https://study-resource-site.netlify.app/">
              https://study-resource-site.netlify.app/
            </a>
          </p>
          <p>
            自分が学習に使った参考書やUdemyの動画を紹介するサイトです。初めてドメインを取得したり、インターネット上にデプロイしたりしました。AmazonアフィリエイトやUdemyのアフィリエイトも試してみました。
          </p>
        </section>

        <section className="work">
          <h3>リアルタイムチャットアプリ</h3>
          <p>
            <a className="link" href="https://real-time-app-virid.vercel.app/">
              https://real-time-app-virid.vercel.app/
            </a>
          </p>
          <p>
            LINEのようなリアルタイムチャットを作ってみたいと思い、Goを使って作りました。当時はリアルタイム通信ならGoが良いのかなと思っていました。友達が5人くらいでワイワイ使ってくれたのが嬉しかったです。
          </p>
        </section>

        <section className="work">
          <h3>ITニュースをクイズ化するサイト</h3>
          <p>
            <a className="link" href="https://final-news-app-tau.vercel.app/">
              https://final-news-app-tau.vercel.app/
            </a>
          </p>
          <p>
            AI関連のニュースが毎日のように出ていて、追いかけるのが難しいと感じて作りました。人気のテックニュースを取得し、LLMのAPIでクイズ化して、クイズ形式でキャッチアップできるようにしました。
          </p>
          <p>
            最初はその場で毎回生成する形にしていましたが、時間もお金もかかるため、毎朝決まった時間にクイズを生成する形に変更しました。
          </p>
        </section>

        <h2>振り返って</h2>
        <p className="note">
          この3ヶ月で、Webアプリを作るための基本を一気に学びました。完成度が高いものばかりではありませんが、分からないことを調べながら作り切る経験を積めた時期でした。
        </p>
      </article>
    </main>
  );
}
