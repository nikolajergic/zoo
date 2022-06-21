import logo from './logo.svg';
import './App.css';

const animal = [
  {vrsta:'Konj',ime:'Cezar',datumRodjenja:''},
  {vrsta:'Pas',ime:'Kliford',datumRodjenja:( new Date() )},
  {vrsta:'Macka',ime:'Senka',datumRodjenja:( new Date() )},
  {vrsta:'Krava',ime:'Ana',datumRodjenja:( new Date() )},
  {vrsta:'Bik',ime:'Crni',datumRodjenja:''},
]

function App() {

  return (
    <div className="App">

<table>
{animal.map((animal, index) => (
  <tr key={index}>
      <td>{animal.vrsta}</td>
      <td>{animal.ime}</td>
      <td>
        {animal.datumRodjenja
            ? animal.datumRodjenja.toLocaleDateString()
            : "Nepoznat"}
    </td>
  </tr>
))}
</table>
</div> );
}
  
  
export default App;
  
