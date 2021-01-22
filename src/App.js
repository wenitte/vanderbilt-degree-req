import logo from './logo.svg';
import './App.css';
import MajorsList from './MajorsList.js';
import listOfMajors from './listOfMajors.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
<h1> Vanderbilt Majors and their Degree Requirements (Currently Under Construction)</h1>
<h2>About</h2>
<h3>To Make contributionsnfork this repo, add the data to the listOfMajors.json file, and make a pull request. After review i will merge it with the project. </h3>
<MajorsList majors = {listOfMajors.majors}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
