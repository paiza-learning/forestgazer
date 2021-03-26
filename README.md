# forestgazer

## これは何

github 上で push された際に飛ばされる webhook を待ち受け, 任意のコードを実行するためのもの.

[forestbot](https://github.com/paiza-learning/forestbot) の master ブランチに push があった際に, paiza.cloud 上で自動的に `git pull` ~ `yarn start` を実行するために開発されている

だが, ある程度汎用的なものである.

## 事前準備

このプログラムを動かすサーバの URL:port/webhook に対して push 時に application/json 形式で webhook を飛ばすように設定しておくこと.

## インストール ~ 実行まで

```sh
$ git pull https://github.com/paiza-learning/forestgazer
$ cd forestgazer
$ yarn
# webhook を待ち受ける状態になる
$ yarn start
```

## 実行されるコード

ルートディレクトリ直下の `bin/run` が実行される. ここに, 個別に実行ファイルを設置すればよい.
