import logo from './logo.svg';
import './App.css';

function App() {

  const animal = [
    {vrsta:'Konj',ime:'Cezar',datumRodjenja:( new Date() )},
    {vrsta:'Pas',ime:'Kliford',datumRodjenja:( new Date() )},
    {vrsta:'Macka',ime:'Senka',datumRodjenja:( new Date() )},
    {vrsta:'Krava',ime:'Ana',datumRodjenja:( new Date() )},
    {vrsta:'Bik',ime:'Crni',datumRodjenja:( new Date() )},
  ]

  return (
    <div className="App">

{animal.map((animal, index) => (
    <tr key={index}>
     <td>
        {animal.sektor ? animal.sektor : <p>Nepoznat</p>}
     </td>
    <td>{animal.vrsta}</td>
    <td>{animal.ime}</td>
    <td>
        {animal.datumRodjenja
            ? animal.datumRodjenja.toLocaleDateString()
            : <p>Nepoznat</p>}
    </td>
</tr>
 
))}
</div> );
}
  
  
export default App;
  
