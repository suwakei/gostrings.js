# gostrings.js

<table>
	<thead>
		<tr>
			<th style="text-align:center"><a href="README.md">English</a></th>
			<th style="text-align:center">日本語</th>
		</tr>
	</thead>
</table>

[![npm version](https://badge.fury.io/js/gostrings.js.svg)](https://badge.fury.io/js/gostrings.js)
[![npm downloads](https://img.shields.io/npm/dm/gostrings.js)](https://www.npmjs.com/package/gostrings.js)

`gostrings.js` は、Go言語の標準ライブラリ `strings` パッケージにインスパイアされた、JavaScript向けの軽量かつ強力な文字列操作ユーティリティライブラリです。Goのシンプルで直感的なAPIをJavaScriptの世界にもたらし、文字列処理をより効率的かつ読みやすくすることを目指しています。

## ✨ 特徴

- **Go言語の `strings` パッケージにインスパイア**: GoのAPI設計思想を取り入れ、一貫性のある使いやすい関数を提供します。
- **豊富な文字列操作機能**:
  - 大文字小文字の変換のための様々な関数を提供します。
  - 部分文字列の検索やチェックのための関数が含まれています。
  - 文字列の整形や置換のためのユーティリティを提供します。
  - その他、文字列操作に役立つユーティリティ関数が含まれています。
- **軽量で依存関係なし**: プロジェクトに簡単に組み込むことができます。
- **TypeScriptフレンドリー**: 型定義が付属しており、TypeScriptプロジェクトでの開発体験を向上させます。

## 🚀 インストール

npm または yarn を使用してインストールできます。

```bash
npm install gostrings.js
# または
yarn add gostrings.js
```

## 💡 使用方法

### インポート

CommonJS:

```javascript
const gostrings = require("gostrings.js");
```

ES Modules:

```javascript
import * as gostrings from "gostrings.js";
```

TypeScript:

```typescript
import * as gostrings from "gostrings.js";
// または
import { contains } from "gostrings.js";
```
