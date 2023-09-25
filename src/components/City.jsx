import { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './City.css'

function City({ cityName }) {
  const [big, setBig] = useState(0)
  const [cityData, setCityData] = useState(null);

  // Tratamento do cityName para eliminar espaços e converter para letras minúsculas
  const formattedCityName = cityName.replace(/\s+/g, '').toLowerCase();

  useEffect(() => {
    // Faça uma chamada AJAX para buscar as informações da cidade no servidor
    axios.get(`http://localhost:3000/${formattedCityName}`)
      .then((response) => {
        setCityData(response.data);
        console.log('cityData: '+cityData)
        console.log('cityData.city: '+cityData.city)
        console.log('cityData.description: '+cityData.description)
      })
      .catch((error) => {
        console.error(`Erro ao buscar dados de ${formattedCityName}:`, error);
      });
  }, [formattedCityName, cityData]);

  return (
    <div className="city-card" onClick={()=> setBig(!big)}>
      {!cityData ? (
          <p>Carregando...</p>
      ) : (
        big ? (
        <>
          <h1>{cityData.city}</h1>
          <p>{cityData.description}</p>
        </>
        ) :
        (
          <h1>{cityData.city}</h1>
        )
      )}
    </div>
  );
}

City.propTypes = {
  cityName: PropTypes.string.isRequired
};

export default City;
