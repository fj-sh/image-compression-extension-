
## プロジェクトを開始する

- [Create a Vite-React Chrome Extension in 90 seconds](https://dev.to/jacksteamdev/create-a-vite-react-chrome-extension-in-90-seconds-3df7)

```shell
npm init vite@latest
npm i @crxjs/vite-plugin -D
touch manifest.json
```

### PrettierとESLintの設定

- [Viteで作成したReact（TypeScript）プロジェクトにEsLintとPrettierを導入する（2022/02）](https://zenn.dev/longbridge/articles/ae3aa36cf17d73)

### Viteでscssを使えるようにする

[CSS Pre-processors](https://vitejs.dev/guide/features.html#css)

```shell
npm add -D sass
```

## コンポーネント

### DragAndDrops

- [Animated CSS Gradient Border](https://codepen.io/mike-schultz/pen/NgQvGO)
- [これを使った！Fancy animated rainbow border xD](https://codepen.io/ahmadnasr/pen/BaNQweQ)
- [グラデーションのサンプルがたくさんある](https://freefrontend.com/css-border-animations/)


### NotificationBar

エラーの通知を行う。

https://github.com/kufu/smarthr-ui/blob/v22.2.1/src/components/NotificationBar/NotificationBar.tsx


## Chrome ウェブストア

デベロッパーダッシュボードにて、審査が不承認となった場合。

### スパムとストア掲載順位

- 違反の参照 ID: 
- 違反: スパムに関するポリシーの 1 つ以上のセクションに違反するアイテムが公開されています。
- 修正方法: アイテムでスパム行為に関与することや、ストアでのアイテムの掲載位置を操作することはしないでください。
- プログラム ポリシーの関連セクション: スパムとストア掲載順位

公開したパッケージ名が他の拡張と重複している場合に不承認となった。
パッケージ名を変更して、説明をシンプルなものに変更したら、審査が開始された。

## React + Vite + MUI

```shell
npm install @mui/material @emotion/react @emotion/styled
```
