import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'whatwg-fetch';
import './App.css';

const memoized = {};

const memoizedClassList = (baseURL, updateFn) => {
  if (memoized[baseURL]) { return; }
  memoized[baseURL] = true;
  fetch(`${baseURL}/api/class_list`).then(resp => resp.json()).then(classes => { updateFn(`I can detect: ${classes.join(', ')}`); }).catch(() => updateFn('API call to get classes failed...not great...'));
}

function App() {
  const [currentURL, setCurrentURL] = useState('https://www.azquotes.com/picture-quotes/quote-the-future-is-not-something-we-enter-the-future-is-something-we-create-leonard-sweet-66-75-70.jpg');
  const [currentInput, setCurrentInput] = useState('');
  const [predictions, setPredictions] = useState('');
  const [classMessage, setClassMessage] = useState('Getting a list of classes...');
  const [serverBaseURL, setServerBaseURL] = useState('https://truck-classifier.herokuapp.com')


  memoizedClassList(serverBaseURL, setClassMessage);

  const onClick = () => {
    setCurrentURL(currentInput);
    fetch(`${serverBaseURL}/api/classify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url: currentInput,
      }),
    })
    .then(resp => resp.json())
    .then(results => setPredictions(JSON.stringify(results.predictions)))
    .catch(error => setPredictions(`Oops, an error occured: : ${error}`));
  };

  const onChange = (e) => { setCurrentInput(e.target.value); };

  const onBlur = (e) => { setServerBaseURL(e.target.value); };
  return (
    <div className="App">
      <header className="App-header">
        <img src={currentURL} style={{ marginBottom: '20px', maxHeight: '400px' }}></img>
        <p>
          {classMessage}
        </p>
        <div className="container">
          <div className="row">
            <form className="col-sm-12">
              <div className="form-group">
              <label htmlFor="baseURL">
                  Classification server to use
                </label>
                <input type="text" className="form-control" id="baseUrl" placeholder={serverBaseURL} onBlur={onBlur}></input>
                <label htmlFor="urlInput">
                  Enter the URL of an image you'd like to classify below
                </label>
                <input type="text" className="form-control" id="urlInput" value={currentInput} onChange={onChange}></input>
              </div>
                <button type="button" className="btn btn-primary" onClick={onClick}>Predict!</button>
            </form>
          </div>
          <div className="row">
            <div className="col-sm-12">
              {predictions}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
