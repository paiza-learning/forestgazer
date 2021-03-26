# forestgazer

## これは何

github 上で push された際に飛ばされる webhook を待ち受け, 任意のコードを実行するためのもの.

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
