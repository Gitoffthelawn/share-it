# Share-it Contribution Guide

[English](CONTRIBUTING.md) | 日本語

ご覧いただきありがとうございます。このWeb Extensionへの貢献方法、リクエスト方法についてのガイドです。

## 機能をリクエストしたい
- 増やして欲しいサービスのボタンがある方は、ぜひお気軽に[GitHub Issue](https://github.com/psephopaiktes/share-it/issues/new)を追加するか、[わたしのXアカウント](https://x.com/psephopaiktes)にリプライしてください。
- ただし、対応できるかは**そのサービスがURLクエリからの投稿をサポートしているかどうか**に依存します。例えば、[Notion Web Clipper](https://www.notion.com/web-clipper)などはURLからの新規投稿がサポートされていないため、実現できません。
- また、個々のボタン自体は比較的かんたんに実装されています。[こちらのソースコード](https://github.com/psephopaiktes/share-it/blob/main/components/Button/X.vue)を見て、簡単そうだと感じた方はぜひPullRequestを送ってください！

## Pull Requestで機能を提案したい

一般的な手順に従ってフォークし、Pull Requestを出してください。

### 開発環境のセットアップ

node環境が必要です。

```zsh
npm i
npm start
```

### ボタンを追加する
0. `/components/Button/` に追加ボタンコンポーネントを追加します。
0. `/components/Button/index.ts` のリストに、`import`と`export`を2行追加します。
0. `/components/defaultButtonList.ts` に行を追加します。`enable`はデフォルトで有効になっているかのフラグです。一般的に、ユーザーが少ないと思われるサービスの場合は`false`にしてください。
