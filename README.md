# React-useEffect-WindowResizeApp

Reactの `useEffect` を使って、ブラウザのウィンドウサイズ変更を検知する練習用アプリです。

## 📌 概要

ブラウザのウィンドウをリサイズすると、現在のウィンドウ幅を取得して画面に表示します。

`useEffect` を利用して `resize` イベントのリスナーを登録し、コンポーネントのアンマウント時にクリーンアップしています。

## 🛠 使用技術

* React
* TypeScript
* Vite
* Tailwind CSS
* useState
* useEffect
* Window Resize Event

## 📂 コンポーネント構成

```text
src/
├── components/
│   ├── HandleResize.tsx
│   └── DisplayWindowSize.tsx
├── App.tsx
└── main.tsx
```

### HandleResize.tsx

ウィンドウ幅の状態管理と `resize` イベントの処理を担当します。

* `useState` でウィンドウ幅を管理
* `resize` イベントを監視
* ウィンドウサイズ変更時に `windowWidth` を更新
* クリーンアップでイベントリスナーを解除

### DisplayWindowSize.tsx

`HandleResize` から受け取ったウィンドウ幅を画面に表示します。

## 🔄 処理の流れ

```text
ブラウザをリサイズ
      ↓
resizeイベント発生
      ↓
handleResize実行
      ↓
window.innerWidthを取得
      ↓
setWindowWidthで状態更新
      ↓
再レンダリング
      ↓
現在のウィンドウ幅を表示
```

## 🧹 useEffectのクリーンアップ

イベントリスナーを登録した場合、コンポーネントがアンマウントされるときに解除します。

```tsx
useEffect(() => {
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);
```

これにより、不要になったイベントリスナーが残り続けることを防ぎます。

## 🎯 学習ポイント

* `useState` による状態管理
* `useEffect` の基本的な使い方
* ブラウザAPIの `window.innerWidth`
* `resize` イベントの監視
* イベントリスナーの登録と解除
* `useEffect` のクリーンアップ
* コンポーネント間のProps受け渡し

## 🚀 起動方法

```bash
npm install
npm run dev
```

表示されたURLをブラウザで開き、ウィンドウサイズを変更すると幅が更新されます。
