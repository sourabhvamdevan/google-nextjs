"use client";

import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
export default function CountryLookup(){
    const[country,setCountry]=useState('India');

  useEffect(()=>{
  const getCountry=async()=>{
    const response=await fetch('https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_API_KEY}').
    then((res)=>res.json())
    .then((data)=>data.country);
    if(!response)return;
    setCountry(response);

  };
  getCountry();





  }, []);
  return (
    <div>{country}</div>
  )
}
