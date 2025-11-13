# gostrings.js

<table>
	<thead>
    	<tr>
      		<th style="text-align:center">English</th>
      		<th style="text-align:center"><a href="README_ja.md">日本語</a></th>
    	</tr>
  	</thead>
</table>

[![npm version](https://badge.fury.io/js/gostrings.js.svg)](https://badge.fury.io/js/gostrings.js)
[![npm downloads](https://img.shields.io/npm/dm/gostrings.js)](https://www.npmjs.com/package/gostrings.js)

`gostrings.js` is a lightweight, dependency-free string utility library for TypeScript, inspired by Go's standard `strings` package. It brings Go's simple and intuitive API to TypeScript, enabling efficient and readable string manipulation.

## ✨ Features

- **Inspired by Go's `strings` package**: Adopts Go's API design philosophy to provide consistent and easy-to-use functions.
- **Rich String Manipulation Capabilities**:
  - Provides a variety of functions for case conversion.
  - Includes functions for substring search and checks.
  - Offers utilities for string formatting and replacement.
  - Contains other helpful utility functions for string handling.
- **Lightweight and Dependency-Free**: Easily integrate into your projects without extra bloat.
- **TypeScript Friendly**: Includes type definitions to enhance the development experience in TypeScript projects.

## 🚀 Installation

You can install it using npm or yarn:

```bash
npm install gostrings.js
# or
yarn add gostrings.js
```

## 💡 Usage

### Import

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
// or
import { contains } from "gostrings.js";
```
