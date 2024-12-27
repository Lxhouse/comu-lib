# COMU-Lib

一个简单易用的 React 组件库

## 安装

```bash
npm install comu-lib
# 或者
yarn add comu-lib
```

## 使用

```jsx
import { ShowHello } from 'comu-lib';
import 'comu-lib/dist/style.css';

function App() {
  return <ShowHello text="你好，世界！" />;
}
```

## 组件文档

### ShowHello

展示一个问候语文本。

| 属性 | 类型   | 默认值   | 说明         |
| ---- | ------ | -------- | ------------ |
| text | string | 'Hello!' | 要显示的文本 |

## 本地开发

```bash
# 安装依赖
npm install

# 启动 Storybook
npm run storybook

# 构建组件库
npm run build

# 预览构建结果
npm run preview
```

## 本地测试

在组件库目录：

```bash
npm link
```

在使用组件的项目中：

```bash
npm link comu-lib
```
