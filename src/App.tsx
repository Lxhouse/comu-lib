import { ShowHello } from './components';
import './App.less';

const App = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>COMU-Lib 组件展示</h1>
      </header>

      <main className="components-display">
        <section className="component-section">
          <h2>ShowHello 组件</h2>
          <div className="component-demo">
            <ShowHello text="默认展示" />
            <ShowHello text="自定义文本" />
            <ShowHello text="你好，世界！" />
          </div>
        </section>

        {/* 当有新组件时，可以在这里添加新的 section */}
      </main>
    </div>
  );
};

export default App;
