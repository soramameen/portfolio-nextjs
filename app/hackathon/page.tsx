import Link from "next/link";
import Image from "next/image";

const basePath = process.env.NODE_ENV === "development" ? "" : "/portfolio-nextjs";

export default function Hackathon() {
  return (
    <main className="wrap">
      <Link className="back" href="/">
        ← soramame の記録
      </Link>
      <article>
        <div className="date">2024-08 / 2024-09</div>
        <h1>ハッカソンでエンジニアを志した話</h1>

        <p>
          2024年の8月と9月に、合計4日間のハッカソンに参加しました。チリメンを使った、防災・減災をテーマにしたIoTハッカソンです。
        </p>
        <p>
          当時は開発経験がほとんどありませんでした。チームは6人で、中学1年生から40代、50代の方まで、年齢も背景もかなり幅広い構成でした。
        </p>

        <figure className="photo">
          <Image
            src={`${basePath}/images/hackathon.jpg`}
            alt="ハッカソン参加時の集合写真"
            width={1000}
            height={585}
            style={{ width: "100%", height: "auto" }}
          />
          <figcaption className="caption">ハッカソン参加時の集合写真</figcaption>
        </figure>

        <h2>担当したこと</h2>
        <p>
          チームの中で「やってみなよ」と背中を押してもらい、私はバックエンドの部分を担当しました。ChatGPTに聞きながら、チームメンバーやメンターの方にも教えてもらいながら進めました。
        </p>
        <p>
          作ろうとしていたのは、避難誘導ロボットのようなものです。沖に置いた浮き輪の動きから津波の動きを想定し、ロボットが避難方向へ動き出す、というアイデアでした。
        </p>

        <h2>実際に作れたもの</h2>
        <p>
          もちろん、実際に高度な津波予測ができたわけではありません。作れたのは、浮き輪の座標が動いたときに、その逆側へロボットが動く、というシンプルな仕組みです。
        </p>
        <p>
          GPSの情報をスプレッドシートに記録し、その値を読み取って、チリメンのハードウェアへ指示を送り、ロボットを動かす。今振り返ると小さな実装ですが、当時の自分にとってはかなり大きな経験でした。
        </p>

        <h2>エンジニアを志すきっかけ</h2>
        <p className="note">
          このハッカソンで一番印象に残っているのは、年齢も立場も違う人たちが、エンジニアリングに熱意を持って関わっていたことです。その姿を見て、自分もソフトウェアエンジニアになりたいと強く思うようになりました。
        </p>
      </article>
    </main>
  );
}
