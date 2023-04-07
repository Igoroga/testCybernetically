import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import Stock from './Stock';
import HatTable from './HatTable';
import token from '../token/token';



// Не убивайте за этот компонент божественный, его разгребать на хуки кастомные и отдельные UI компоненты еще часа 4 работы(( ну если прям надо то можно
// он основной так что расспишу что сделал

const ListStock = () => {
  const [data, setData] = useState([]); // Наш массив сделок акций
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [filter, setFilter] = useState(null); // для подсветки кнопки фильтра
  const [filteredData, setFilteredData] = useState([]); // для фильтра выгодных сделок и убыточных
  const [fromA, setFromA] = useState(0); // это далее переключает с помощью slice акции например с 1 до 10 показать или 11 до 20
  const [toA, setToA] = useState(10);   // меняется при смене страницы
  const [page, setPage] = useState([]); // контроль количества страниц

  
// эх, это можно в отдельный хук функции для фильтра
  const handlePositiveFilter = () => {
    setFilter('positive');
  };

  const handleNegativeFilter = () => {
    setFilter('negative');
  };

  const handleAllFilter = () => {
    setFilter(null);
  };

// тоже можно запрос отдельно запрашиваем массив данных

  useEffect(() => {
    axios
      .get(`https://cloud.iexapis.com/v1/stock/AAPL/chart/1y?token=${token}`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
        setPage( Array.from({length: Math.ceil(response.data.length / 10)+1}, (_, i) => i + 1));
        console.log( Math.ceil(response.data.length / 10));
      })
      .catch((error) => {
        setLoading(false);
        setError(true)
      });
  }, []);

  // Ниже идет фильтрация массива в зависемости от выбраного фильтра

  useEffect(() => {
    if (filter === 'positive') {
      setFilteredData(data.filter((item) => item.close > item.open));
      setPage(Array.from({length: Math.ceil(data.filter((item) => item.close > item.open).length / 10)}, (_, i) => i + 1));
      
    } else if (filter === 'negative') {
      setFilteredData(data.filter((item) => item.close < item.open));
      setPage(Array.from({length: Math.ceil(data.filter((item) => item.close < item.open).length / 10)}, (_, i) => i + 1));
    } else {
      setFilteredData(data);
      setPage(Array.from({length: (data.length / 10) + 1}, (_, i) => i + 1));
    }
    setFromA(0);
    setToA(10);
  }, [filter, data]);


  if (error) {
    return <h1 style={{ marginTop: '400px', textAlign: 'center', height: '45vh', color: "white" }}>Токенннннн вставьте свой</h1>;
  }

  if (loading) {
    return <Spinner style={{ margin: 'auto' }} />;
  }

// Странички считаем прибовляем, тож нужно все отдельно функции для кнопок навигации

  const handleNextPage = () => {
    setFromA((prev) => prev + 10);
    setToA((prev) => prev + 10);
  };

  const handlePrevPage = () => {
    setFromA((prev) => prev - 10);
    setToA((prev) => prev - 10);
  };

  const handlePageClick = (page) => {
    setFromA((page - 1) * 10);
    setToA(page * 10);
  };

  // Пока идет загрузка крутиться крутейший фильтр можно так же ошибку обработать

  if (loading) {
    return <Spinner style={{ margin: 'auto' }} />;
  }


// ну и ниже верстка по сути, разворачиваем массив акций сделок,
// так же разворачиваю странички в зависемости от количества элеменнтов само все высчитывается
// Консоль очень плачет что у нумерации страниц нет особого ключа, не успел поправить

  return (
    <div className='pageStock'>
      <div>
        <button className={filter !== 'positive' && filter !== 'negative' ? 'buttonFilterActiv' : 'buttonFilter'} onClick={handleAllFilter}>All</button>
        <button className={filter === 'positive' ? 'buttonFilterActiv' : 'buttonFilter'} onClick={handlePositiveFilter}>Positive close</button>
        <button className={filter === 'negative' ? 'buttonFilterActiv' : 'buttonFilter'} onClick={handleNegativeFilter}>Negative close</button>
      </div>
      <table>
        <HatTable />
        <tbody>
          {filteredData.slice(fromA, toA).map((item) => (
            <Stock key={item.volume} {...item} />
          ))}
        </tbody>
      </table>
      <div className='pagination'>
        <button onClick={handlePrevPage} disabled={fromA === 0} className='buttonFilter'>Prev</button>
        {page.map((page, index) => (
          <button
            key={index}
            className={fromA / 10 + 1 === page ? 'buttonNumberActiv' : 'buttonNumber'}
            onClick={() => handlePageClick(page)}
          >
            {page}
          </button>
        ))}
        <button onClick={handleNextPage} disabled={Math.round(toA / 10) === page.length} className='buttonFilter'>Next</button>
      </div>
    </div>
  );
};

export default ListStock;

