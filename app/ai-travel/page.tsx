import Link from "next/link";

export default function AiTravel() {
  return (
    <main className="wrap">
      <Link className="back" href="/">
        ← soramame の記録
      </Link>
      <article>
        <div className="date">個人開発 / 2026-05</div>
        <h1>
          LLMアプリのコツは「LLMを使いすぎない」ことかもしれない
        </h1>

        <p>
          自然文で旅行条件を入力すると、複数国の航空券価格を調べて、最安の周遊ルートを表示するCLIアプリをLangChainで作りました。
        </p>
        <p>
          詳細は以下の記事で詳しく言及しています。
        </p>
        <p>
          <a className="link" href="https://zenn.dev/soramameen/articles/0e5c6517c77fb0">
            zenn.dev/soramameen/articles/0e5c6517c77fb0
          </a>
        </p>
        <p>
          実はこの前に、似たような旅行計画アプリを一度作っています。ただ、前回作ったものはほとんど全てをLLMに任せていて、何がどこで決まっているのか分からず、壊れたときに直せない状態でした。
        </p>
        <p>
          今回はLLMの責務を「自然文を構造化データに変換する」ところだけに絞り、空港コードの解決や旅程生成、価格比較は普通のコードで処理するようにしました。その結果、小さいけれど自分で理解できるアプリになりました。
        </p>

        <h2>作ったもの</h2>
        <p>
          ユーザーが「9月1日から2週間でタイとベトナムに関空から行きたい」のように入力すると、以下のような流れで航空券を検索します。
        </p>

        <div className="flow">{`自然文入力
  ↓
LLMで TravelQuery を抽出
  ↓
master.json で出発空港・目的国を解決
  ↓
ConfirmedTravelQuery に確定
  ↓
検索条件を表示して Y/n 確認
  ↓
目的国の順序候補とlegを生成
  ↓
SerpApi Google Flights APIで片道価格を取得
  ↓
旅程ごとに合計金額を計算
  ↓
最安旅程と候補一覧を整形表示`}</div>

        <h2>LLMに任せたこと・任せなかったこと</h2>
        <p>
          <strong>LLMに任せたこと</strong>
        </p>
        <p>
          自然文から旅行条件（出発地、目的国、出発日、帰国日）を抽出するだけです。空港コードや航空券価格は生成させません。
        </p>
        <p>
          <strong>LLMに任せなかったこと</strong>
        </p>
        <p>
          空港コードの生成、国から代表空港への変換、旅程候補の生成、SerpApiへのリクエスト、価格比較、最安選択、出力整形。これらは全て普通のコードで決定論的に処理しています。
        </p>

        <h2>学んだこと</h2>
        <p>
          前回のアプリは、LLMに全部任せていました。IATAコードの推測、ルート生成、地上交通の見積もりまでLLMにやらせていて、一見すごそうに見えるけど、事実情報の信頼性が低く、壊れたときの原因特定も難しかったです。
        </p>
        <p className="note">
          LLMアプリのコツは、LLMに全部任せることではなく、LLMを不確実な自然言語入力の変換器として扱い、その前後を普通のコードで支えることでした。
        </p>

        <h2>GitHub</h2>
        <div className="repos">
          <div className="repo">
            <h3>今回作ったMVP</h3>
            <p>
              LangChain + SerpApiを使った旅行検索CLI。LLMの責務を絞った設計。
            </p>
            <a className="link" href="https://github.com/soramameen/ai-travel">
              github.com/soramameen/ai-travel
            </a>
          </div>
          <div className="repo">
            <h3>前回の実験版</h3>
            <p>
              LLMに任せすぎていた旅行計画アプリ。LangGraph + Amadeus API。今は比較対象として残しています。
            </p>
            <a className="link" href="https://github.com/soramameen/plane-tool">
              github.com/soramameen/plane-tool
            </a>
          </div>
        </div>

        <h2>関連記事</h2>
        <p>
          最初にも触れましたが、このプロジェクトで学んだことをZennに書きました。
        </p>
        <p>
          <a className="link" href="https://zenn.dev/soramameen/articles/0e5c6517c77fb0">
            zenn.dev/soramameen/articles/0e5c6517c77fb0
          </a>
        </p>

        <h2>技術スタック</h2>
        <p>
          Python、LangChain、OpenAI API、SerpApi（Google Flights）、Pydantic、pytest。Nixとuvで環境管理しています。
        </p>
      </article>
    </main>
  );
}
