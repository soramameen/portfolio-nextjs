# portfolio-nextjs

クラベス株式会社 インターン選考用ポートフォリオです。

> **デプロイ先**: https://soramameen.github.io/portfolio-nextjs/

## なぜ Next.js か

元々HTMLで作成していたポートフォリオをNext.jsに書き直しました。
ルーティングやコンポーネントの最低限の理解を示したかったからです。

GitHub Pages にデプロイするため、静的書き出し（`output: "export"`）でビルドしています。

## 設計判断

6記事だけの小さなサイトなので、過剰に抽象化しないことを意識しました。

### コンポーネント分割

最初は記事ごとに共通コンポーネントを作り、データを別ファイルで渡そうとしました。
しかし各記事は独自のレイアウト（画像、作品カード、フローチャートなど）を持つため、
無理に共通化すると内部分岐が多くなります。結局共通化はやめ、ページごとにJSXで直書きしました。

### データレイヤー

記事は構造化されたデータではなく、それぞれ自由な構成のHTMLです。
無理にデータ層を設けても意味がないため、ページごとに実装しています。
（多言語化が必要になれば、そのときにデータ layer を導入すれば良いと判断しました。）

### CSS

当初はページごとにCSSを分けようとしましたが、共通して使えるクラスが多かったため
`globals.css` 1ファイルにまとめました。

## CD/CI

最初から GitHub Pages へのデプロイを意識して開発しました。

これにより、以下の利点がありました：
- 静的サイトとして使える機能と使えない機能を意識しながら開発できた
- 開発環境と本番環境の違い（basePath の有無）を早期に発見・解決できた
- エラーが起きたとき、該当のcommitの変更から原因を特定しやすかった

結果的に、パスの問題に2度ぶつかりましたが、都度ビルドして確認していたため
素早く解決できました。

## basePath と画像パスの問題

GitHub Pages では `https://soramameen.github.io/portfolio-nextjs/` のサブパスで公開されるため、
`basePath` を `/portfolio-nextjs` に設定しています。

しかし `<Image>` コンポーネントは basePath を自動解決しないことが分かりました。
そこで、`process.env.NODE_ENV` で開発/本番を判定し、`src` に明示的に basePath を含める方式を採用しました。

```
const basePath = process.env.NODE_ENV === "development" ? "" : "/portfolio-nextjs";
<Image src={`${basePath}/images/hackathon.jpg`} ... />
```

## 技術スタック

- Next.js 16
- React 19
- TypeScript
- CSS（globals.css 1ファイル）
- GitHub Pages（静的書き出し）

## 開発環境

コーディングの一部に pi-coding-agent（DeepSeek V4 Flash 等）を用いています。
