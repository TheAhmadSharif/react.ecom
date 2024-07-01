
import '../App.css'
import Button from '@mui/material/Button';

import { Outlet, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";


function About() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
        <p>Cart</p>
        <Button variant="contained">Cart</Button>
    </div>
    </>
  )
}
export default About;
