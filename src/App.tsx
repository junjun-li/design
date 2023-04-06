import React from 'react';
import { Button, Swiper, Alert, Swiper2 } from './components';
import 'animate.css';
import './app.scss';

function App() {

  return (
    <div
      className="App" style={{
      backgroundImage: 'url("https://img1.mukewang.com/6404ba4200018a1217920764.jpg")',
      height: '500px',
      backgroundSize: 'contain',
    }}
    >
      <div style={{ padding: 24, display: 'flex' }}>
        <Button>default</Button>
        <Button btnType="primary">primary</Button>
        <Button btnType="primary" disabled>disabled</Button>
        <Button btnType="danger">danger</Button>
        <Button btnType="link" href="https://www.baidu.com" target="_blank">link</Button>
        <Button btnType="link" href="https://www.baidu.com" disabled>link disabled</Button>
      </div>
      <div style={{ padding: 24 }}>
        <Button size="large">large</Button>
        <Button size="small">small</Button>
      </div>
      <div style={{ padding: 24 }}>
        <Alert
          title="hello world"
          type="warning"
          closable
          description="111"
          onClose={() => {
            console.log('click close');
          }}
        />
      </div>
      <div style={{ padding: 24 }}>
        <Alert
          title="hello world"
          type="warning"
          closable
          description="111"
          className="test-alert"
          onClose={() => {
            console.log('click close');
          }}
        />
      </div>
      <div style={{ padding: 24 }}>
        <Alert
          title="success"
          type="success"
        />
      </div>
      <div style={{ padding: 24 }}>
        <Alert
          title="danger"
          type="danger"
        />
      </div>
      <div style={{ padding: 24 }}>
        <Alert title="default" />
      </div>
    </div>
  );
}

export default App;
