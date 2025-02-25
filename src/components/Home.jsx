// src/components/Home.js
import React from 'react';

const Home = () => {
  return (
    <section id="home" className="section">
      <div className='text-white w-[50%] pt-24'>

        <h1 className='text-3xl mb-5 text-blue-300'>Hello my name is </h1>
        <h1 className='text-6xl mb-6 '> Durges Kumar </h1>
        <p className='text-3xl'> I am a MERN Stack developer  </p>
      <button className='text-blue-200 mt-8 text-3xl border-3 px-8 p-4'> Let's talk </button>
      </div>
    </section>
  );
};

export default Home;