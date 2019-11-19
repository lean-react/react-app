import React from 'react';

import './App.css';

const App = () => (
  <div className="teaser">
    <header>
      <h2>The Webpack Toolchain</h2>
    </header>
    <div className="kanban">
      <article>
        <h3>To Do</h3>
        <ul>
          <li>Typescript</li>
          <li>Testing</li>
          <li>CSS Präpozessoren bzw. PostCSS</li>
          <li>Code Splitting</li>
        </ul>
      </article>
      <article>
        <h3>In Progress</h3>
        <ul>
        </ul>
      </article>
      <article>
        <h3>Done</h3>
        <ul>
          <li>Bundling</li>
          <li>HTML ausliefern</li>
          <li>JSX Transpilation</li>
          <li>Styles Handling</li>
        </ul>
      </article>
    </div>
  </div>
);

export default App;
