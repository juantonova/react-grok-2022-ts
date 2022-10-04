import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// basic
import Basic01_H1 from '../Basic01_H1/Basic01_H1';
import Basic02_Fragment from '../Basic02_Fragment/Basic02_Fragment';
import Basic03_ElbrusColor from '../Basic03_ElbrusColor/Basic03_ElbrusColor';
import Basic04_List from '../Basic04_List/Basic04_List';
import Basic05_Image from '../Basic05_Image/Basic05_Image';

// useState
import UseState01_ChangeColor from '../UseState01_ChangeColor/UseState01_ChangeColor';
import UseState02_Toggle from '../UseState02_Toggle/UseState02_Toggle';
import UseState03_Slider from '../UseState03_Slider/UseState03_Slider';
import UseState04_Props from '../UseState04_Props/UseState04_Props';
import UseState05_Modal from '../UseState05_Modal/UseState05_Modal';

// useReducer
import UseReducer01_Cards from '../UseReducer01_Cards/UseReducer01_Cards';
import UseReducer02_GetCities from '../UseReducer02_GetCities/UseReducer02_GetCities';
import UseReducer03_AddAndDeleteCity from '../UseReducer03_AddAndDeleteCity/UseReducer03_AddAndDeleteCity';
import UseReducer04_UpdateAndSortCities from '../UseReducer04_UpdateAndSortCities/UseReducer04_UpdateAndSortCities';
import UseReducer05_Pagination from '../UseReducer05_Pagination/UseReducer05_Pagination';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/basic01" element={<Basic01_H1 />} />
        <Route path="/basic02" element={<Basic02_Fragment />} />
        <Route path="/basic03" element={<Basic03_ElbrusColor />} />
        <Route path="/basic04" element={<Basic04_List />} />
        <Route path="/basic05" element={<Basic05_Image />} />
        <Route path="/useState01" element={<UseState01_ChangeColor />} />
        <Route path="/useState02" element={<UseState02_Toggle />} />
        <Route path="/useState03" element={<UseState03_Slider />} />
        <Route path="/useState04" element={<UseState04_Props />} />
        <Route path="/useState05" element={<UseState05_Modal />} />
        <Route path="/useReducer01" element={<UseReducer01_Cards />} />
        <Route path="/useReducer02" element={<UseReducer02_GetCities />} />
        <Route path="/useReducer03" element={<UseReducer03_AddAndDeleteCity />} />
        <Route path="/useReducer04" element={<UseReducer04_UpdateAndSortCities />} />
        <Route path="/useReducer05/*" element={<UseReducer05_Pagination />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
