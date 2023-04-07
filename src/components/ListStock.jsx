import OneNews from './OneNews';
import React, { useState, useEffect } from 'react';
import { getReports} from '../api/api'
import axios from 'axios';
import Spinner from './Spinner';
import { useInView } from 'react-intersection-observer';


const ListStock = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)


    const token = 'pk_fe6d7166b78c45caa34379e92b699531';

    useEffect(() => {
        
        axios
          .get(`https://cloud.iexapis.com/v1/stock/AAPL/chart/1y?token=${token}`)
          .then((response) => {
            setData(response.data);
            setLoading(false);
            console.log(response.data);
          })
          .catch((error) => {
            setLoading(false);
          });
      }, []);

    if (loading) {
return (
    <Spinner style={{ margin: 'auto' }}/>
)
    };

    return (
        <div>
           
        </div>
    );
};

export default ListStock;