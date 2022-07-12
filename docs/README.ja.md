# 文字数カウンター
<div align="center">
<img src="https://user-images.githubusercontent.com/51479912/177196562-f7e84dbb-adf8-4ce4-a248-8747ab706054.png" alt="文字数カウンター Icon" style="justify-content: center;">
</div>

<img width="1024" alt="スクリーンショット 2022-07-09 0 36 43" src="https://user-images.githubusercontent.com/51479912/178274042-261e967b-a7b1-434c-8c2c-79eb27a77bc1.png">

文字数を数えてくれる Chrome Extension です。
絵文字や日本語の「𪗱」「𪘚」といったサロゲートペアとなる文字まで正確に数えることができます。

また、文字数に限らず空白数、単語数まで数えてくれます。

実装は javascript の `Intl.Segmenter` に依存しています。

# インストール

## Chrome Web Store からインストール
https://chrome.google.com/webstore/detail/character-counter/inbkndchoofidndibcgbijbfmmnkmoem

## git でインストール

1. クローン
   ```bash
   git clone git@github.com:H0R15H0/character_counter.git
   ```
2. `src` フォルダを chrome://extensions/ からアップロード


# 使い方

1. 文字数を数えたい部分を範囲選択
2. 右クリックでコンテキストメニューを開く
3. 「文字数カウンター」を選択
