# React GSAP Practice

あるホームページを参考にした 1 ページだけの軽い GSAP 練習サイトです。

## 概要

このプロジェクトは、GSAP（GreenSock Animation Platform）と React を使用したアニメーション練習サイトです。スムーズなアニメーション効果を実装し、モダンな Web 開発技術を学習することを目的としています。

## 技術スタック

- **React 19** - フロントエンドフレームワーク
- **TypeScript** - 型安全性
- **GSAP** - アニメーションライブラリ
- **Tailwind CSS** - スタイリング
- **Vite** - ビルドツール

## セットアップ

### 前提条件

- Node.js (v18 以上)
- npm または yarn

### インストール

```bash
# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev
```

### 利用可能なスクリプト

```bash
# 開発サーバー起動
npm run dev

# プロダクションビルド
npm run build

# ビルド結果のプレビュー
npm run preview

# リント実行
npm run lint
```

## プロジェクト構造

```
react-gsap-practice/
├── public/
│   └── hero.webm          # ヒーローセクション用動画
├── src/
│   ├── App.tsx            # メインアプリケーションコンポーネント
│   ├── assets/            # 静的アセット
│   ├── hooks/             # カスタムフック
│   │   └── useIsMobile.ts # モバイル判定フック
│   ├── lib/               # ユーティリティ
│   │   └── utils.ts       # 共通ユーティリティ関数
│   └── main.tsx           # エントリーポイント
└── package.json
```

## 主な機能

- GSAP を使用したスムーズなアニメーション
- レスポンシブデザイン対応
- モバイルデバイス検出
- ヒーローセクションの動画背景

## 開発メモ

- GSAP のアニメーションは `@gsap/react` パッケージを使用
- Tailwind CSS v4 を使用したモダンなスタイリング
- TypeScript による型安全性の確保
- 初マスクアニメーションを試してみた
- ラストは three.js で plane をバラっぽくしてみた マウスで動く
- メモ化こうできるのか　 const MemoizedHero = memo(Hero);

## ライセンス

このプロジェクトは学習目的で作成されています。
