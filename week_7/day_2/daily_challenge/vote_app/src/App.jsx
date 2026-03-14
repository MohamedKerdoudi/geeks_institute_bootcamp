import { useState } from 'react'

import './App.css'

function App() {
 
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaSript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);

  
  const voteForLanguage = (languageName) => {
    setLanguages((prev) =>
      prev.map((lang) =>
        lang.name === languageName
          ? { ...lang, votes: lang.votes + 1 }
          : lang
      )
    );
  };

  return (
    <div className="App">
      <h1>Vote Your Language!</h1>

      <div className="language-list">
        {languages.map((lang) => (
          <div key={lang.name} className="language-item">
            <span className="votes">{lang.votes}</span>
            <span className="name">{lang.name}</span>
            <button
              className="vote-btn"
              onClick={() => voteForLanguage(lang.name)}
            >
              Click Here
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App
