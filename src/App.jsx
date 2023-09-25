import './App.css';
import City from './components/City';

function App() {
  const cities = [
    { city: 'riodejaneiro', description: 'Cidade maravilhosa no Brasil.' },
    { city: 'Paris', description: 'Cidade do amor na França.' },
    { city: 'New York', description: 'A cidade que nunca dorme nos EUA.' },
    { city: 'tokyo', description: 'Capital movimentada do Japão.' },
    { city: 'Roma', description: 'Cidade eterna na Itália.' },
    { city: 'Sydney', description: 'Cidade icônica na Austrália.' },
    { city: 'Cairo', description: 'Cidade histórica no Egito.' },
    { city: 'Machu Picchu', description: 'Antiga cidade inca no Peru.' },
    { city: 'Istambul', description: 'Cidade única que liga Europa e Ásia na Turquia.' },
    { city: 'Cidade do Cabo', description: 'Belíssima cidade na África do Sul.' },
  ];

  return (
    <div className='content'>
      {cities.map((cityData, index) => (
        <City key={index} cityName={cityData.city} />
      ))}
    </div>
  );
}

export default App;
