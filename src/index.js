import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Register } from './components/register/register';
import { DataBinding } from './components/flipkart/databinding';
import { DataBinding2 } from './components/flipkart/databinding2';
import { TwoWayBinding } from './components/flipkart/twowaybinding';
import { ProductDetail } from './components/flipkart/productdetail';
import { StyleBinding } from './components/flipkart/stylebinding';
import { ClassBinding } from './components/flipkart/classbinding';
import { ClassBinding2 } from './components/flipkart/classbinding2';
import { StyleBindingTask } from './components/flipkart/stylebindingtask';
import { EventBinding } from './components/flipkart/eventbinding';
import { EventBinding2 } from './components/flipkart/eventbinding2';
import { EventPropogation } from './components/flipkart/eventpropagation';
import { PreventDefault } from './components/flipkart/preventdefault';
import { UseEffect } from './components/flipkart/useeffect';
import { KeyBoardEvent } from './components/flipkart/keyboardevent';
import { PasswordStrength } from './components/flipkart/passwordstrength';
import { PasswordBootstrap } from './components/flipkart/passwordwithbootstrap';
import { OnBlur } from './components/flipkart/onblurIFSC';
import { IFSC_onBlur } from './components/flipkart/IFSConBlur';
import { ButtonEvent } from './components/flipkart/NewWindowbuttonevents';
import { ClipboardEvent } from './components/flipkart/clipboardEvent';
import { TouchEvent } from './components/flipkart/touchevent';
import { TimeoutDemo, TimerDemo } from './components/flipkart/timerevent';
import { APIFetchExample } from './components/flipkart/fetch';
import { XMLHttpRequestExample } from './components/flipkart/XMLHttpReq';
import { JQueryAjax } from './components/flipkart/JQueryAjax';
import { AxiosExample } from './components/flipkart/axios';
import { NasaAPI } from './components/flipkart/nasaAPI';
import { Fakestore } from './components/flipkart/fekstoreAPI';
import { FakestoreAPI2 } from './components/flipkart/fekstoreAPI2';
import { InmemoryCRUD } from './components/flipkart/inlineCRUD';
import { CompleteInmemoryCRUD } from './components/flipkart/CompleteCRUD';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Register/> */}
    {/* <DataBinding/> */}
    {/* <DataBinding2/> */}
    {/* <TwoWayBinding/> */}
    {/* <ProductDetail/> */}
    {/* <StyleBinding/> */}
    {/* <ClassBinding2/> */}
    {/* <StyleBindingTask/> */}
    {/* <EventBinding2/> */}
    {/* <EventPropogation/> */}
    {/* <PreventDefault/> */}
    {/* <UseEffect/> */}
    {/* <KeyBoardEvent/> */}
    {/* <PasswordStrength/> */}
    {/* <PasswordBootstrap/> */}
    {/* <OnBlur/> */}
    {/* <IFSC_onBlur/> */}
    {/* <ButtonEvent/> */}
    <ClipboardEvent/>
    {/* <TouchEvent/> */}
    {/* <TimerDemo/> */}
    {/* <TimeoutDemo/> */}
    {/* <APIFetchExample/> */}
    {/* <XMLHttpRequestExample/> */}
    {/* <JQueryAjax/> */}
    {/* <AxiosExample/> */}
    {/* <NasaAPI/> */}
    {/* <Fakestore/> */}
    {/* <FakestoreAPI2/> */}
    {/* <InmemoryCRUD/> */}
    {/* <CompleteInmemoryCRUD/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
