import React from 'react';
import Login from './components/Auth/Login';
import Home from './components/Dashboard/Home';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Retail_Transaction from "../src/components/Retail/Retail_Transaction"
import Table from "../src/components/Table/ZoneTable.jsx"
import Search from "./components/Retail/AUM/Search"
import UfcWise from './components/Table/All-Wise-Table/UfcWise';
import RmWise from './components/Table/All-Wise-Table/RmWise';
import AumRegionReport from './components/Retail/AUM/AumRegionReport';
import AumUfcReport from './components/Retail/AUM/AumUfcReport';
import RegionWiseSales from './components/Table/All-Wise-Table/RegionWiseSales';
import TransactionReport from './components/Retail/Report_Transaction';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Transaction' element={<Retail_Transaction/>}/>
        <Route path='/Table' element={<Table/>}/>
        <Route path='/Aum' element={<Search/>}/>
        <Route path='/RegionWiseSales/:select_type/:startDate/:endDate' element={<RegionWiseSales/>}/>
        <Route path='/UfcWise/:select_type' element={<UfcWise/>}/>
        <Route path='/RmWise/:select_type' element={<RmWise/>}/>
        <Route path='/AumRegionReport' element={<AumRegionReport/>}/>
        <Route path="/AumUfcReport" element={<AumUfcReport />} />
        <Route path='TransactionReport' element={<TransactionReport/>}/>
      </Routes>
    </BrowserRouter>         
    </div>
  );
}

export default App;
