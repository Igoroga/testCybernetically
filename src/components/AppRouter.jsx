import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom"
import { StockRoutes } from '../routes';
import { NewsRoutes } from '../routes';


// Апроутер заточен под дальнейшее расширение

const AppRouter = () => {


    return (
     <Routes>
       {StockRoutes.map(({path, Component}, index) =>
       <Route key={path} path={path} element={<Component/>} />
       )} 
       {NewsRoutes.map(({path, Component}, index) =>
       <Route key={path} path={path} element={<Component/>} />
       )} 
         <Route path="/*" element={<Navigate to="/news" replace />} />  
     </Routes>   
    )
  
};



export default AppRouter;