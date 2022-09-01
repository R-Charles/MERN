import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      
      <PersonCard lastName = {"Doe"} firstName = {"Jane"}
      age = {45} hairColor = {"Black"}></PersonCard>
      <PersonCard lastName = {"Smith"} firstName = {"John"}
      age = {88} hairColor = {"Brown"}></PersonCard>
      <PersonCard lastName = {"Fillmore"} firstName = {"Millard"}
      age = {50} hairColor = {"Brown"}></PersonCard>
      <PersonCard lastName = {"Smith"} firstName = {"Maria"}
      age = {62} hairColor = {"Brown"}></PersonCard>

    </div>
  );
}

export default App;
