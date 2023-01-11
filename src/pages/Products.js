import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCog, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Form, ButtonGroup, Breadcrumb, InputGroup, Dropdown } from '@themesberg/react-bootstrap';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import { useSelector, useDispatch } from 'react-redux';

import App from './App'
import { properties } from '../properties.js';


const URL_PRODUCTS = `${properties.HOST}/sp-api/process-product`;
const https = require('https');
export default () => {
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [productNotFound, setProductNotFound] = useState(false);
  const [productLoaded, setProductLoaded] = useState(false);

  const handleChange = (event) => {
    let fieldName = event.target.name;
    let fleldVal = event.target.value;
    console.log(fleldVal);
    setInputValue(fleldVal);
  }

  const handleLoadProduct = () => {
    let queryString = `${URL_PRODUCTS}?asin=${inputValue}`;
    const httpsAgent = new https.Agent({
      rejectUnauthorized: false,
    });
    setLoading(true);
    fetch(queryString, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      agent:httpsAgent,
      body: null,
    })
      .then(response => {
        console.log('Product found ' + response.status);
        if(response.status == 404){
          console.log('Data not found');
          setProductNotFound(true);
          setLoading(false);
  
          setTimeout(() => {
            setProductNotFound(false);
          }, 5000);
        }else{
          setProductLoaded(true);
          setLoading(false);
          setTimeout(() => {
            setProductLoaded(false);
          }, 4000);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        console.log('Data not found');
        setProductNotFound(true);
        setLoading(false);

        setTimeout(() => {
          setProductNotFound(false);
        }, 5000);
      });
  }
    const currentUser = useSelector((store) => store.auth.user);

  React.useEffect(() => {
    console.log('currentUser  ===========', currentUser);
    ;

  }, []);

  return (
 
      <App />

  );
};
