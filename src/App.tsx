import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="mb-4 font-montserrat">
      <Navbar />
      <h1 className="my-5 text-center text-3xl">Popular</h1>
      <div className="flex flex-wrap justify-center gap-4">
        <div className="w-[430px] border border-slate-400 p-2">
          <img
            src="https://images.unsplash.com/photo-1675110972343-67d9aaaea396?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=280&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3Njg4MDkwMw&ixlib=rb-4.0.3&q=80&w=420"
            alt="random unsplash"
            className="mb-2 cursor-pointer shadow-slate-400 transition-all hover:scale-[102%]"
          />
          <p>AWD TUNDRO FYP</p>
          <p>$35,000.00</p>
        </div>
        <div className="w-[430px] border border-slate-400 p-2">
          <img
            src="https://images.unsplash.com/photo-1675710640218-d5329c2fdba4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=280&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3Njg4MDkxOA&ixlib=rb-4.0.3&q=80&w=420"
            alt="random unsplash"
            className="mb-2 cursor-pointer shadow-slate-400 transition-all hover:scale-[102%]"
          />
          <p>Rainy Day Flower Bouquet</p>
          <p>$27.77</p>
        </div>
        <div className="w-[430px] border border-slate-400 p-2">
          <img
            src="https://images.unsplash.com/photo-1674436861129-8b3c98a6f2ed?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=280&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3Njg4MDkzNA&ixlib=rb-4.0.3&q=80&w=420"
            alt="random unsplash"
            className="mb-2 cursor-pointer shadow-slate-400 transition-all hover:scale-[102%]"
          />
          <p>Cute Cloth Handbag</p>
          <p>$33.19</p>
        </div>
        <button className="hover:black w-full py-2 text-blue-800 hover:bg-slate-200 hover:text-blue-600">
          View All
        </button>
      </div>
      <h1 className="my-5 text-center text-3xl">Just Made</h1>
      <div className="flex flex-wrap justify-center gap-4">
        <div className="w-[430px] border border-slate-400 p-2">
          <img
            src="https://images.unsplash.com/photo-1674665881281-d1fee5d0ac1a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=280&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NjkzMDQ0NA&ixlib=rb-4.0.3&q=80&w=420"
            alt="random unsplash"
            className="mb-2 cursor-pointer shadow-slate-400 transition-all hover:scale-[102%]"
          />
          <p>Snow Blue Overcoat</p>
          <p>$319.59</p>
        </div>
        <div className="w-[430px] border border-slate-400 p-2">
          <img
            src="https://images.unsplash.com/photo-1673881142305-3eea48e8762f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=280&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NjkzMDUzMg&ixlib=rb-4.0.3&q=80&w=420"
            alt="random unsplash"
            className="mb-2 cursor-pointer shadow-slate-400 transition-all hover:scale-[102%]"
          />
          <p>All Star Access</p>
          <p>$418.81</p>
        </div>
        <div className="w-[430px] border border-slate-400 p-2">
          <img
            src="https://images.unsplash.com/photo-1674160797233-4807abd77a32?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=320&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NjkzMDU0Mw&ixlib=rb-4.0.3&q=80&w=480"
            alt="random unsplash"
            className="mb-2 cursor-pointer shadow-slate-400 transition-all hover:scale-[102%]"
          />
          <p>Bright Home Renovation</p>
          <p>$2,999.99</p>
        </div>
        <button className="hover:black w-full py-2 text-blue-800 hover:bg-slate-200 hover:text-blue-600">
          View All
        </button>
      </div>
      <h1 className="my-5 text-center text-3xl italic">Running Out!</h1>
      <div className="flex flex-wrap justify-center gap-4">
        <div className="w-[430px] border border-slate-400 p-2">
          <img
            src="https://images.unsplash.com/photo-1676261122722-b4af8363af28?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=320&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NjkzMDU1Mw&ixlib=rb-4.0.3&q=80&w=480"
            alt="random unsplash"
            className="mb-2 cursor-pointer shadow-slate-400 transition-all hover:scale-[102%]"
          />
          <p>Monarch Hideout Tour</p>
          <p>$188.89</p>
        </div>
        <div className="w-[430px] border border-slate-400 p-2">
          <img
            src="https://images.unsplash.com/photo-1675787228464-9fde72c16534?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=320&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NjkzMDU2Nw&ixlib=rb-4.0.3&q=80&w=480"
            alt="random unsplash"
            className="mb-2 cursor-pointer shadow-slate-400 transition-all hover:scale-[102%]"
          />
          <p>River Tour 'N' Cliff Jumping</p>
          <p>$229.25</p>
        </div>
        <div className="w-[430px] border border-slate-400 p-2">
          <img
            src="https://images.unsplash.com/photo-1673943046093-081894bdab1c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=320&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NjkzMDU3Ng&ixlib=rb-4.0.3&q=80&w=480"
            alt="random unsplash"
            className="mb-2 cursor-pointer shadow-slate-400 transition-all hover:scale-[102%]"
          />
          <p>Spiral Staircase Installation</p>
          <p>$19,998.76</p>
        </div>
        <button className="hover:black w-full py-2 text-blue-800 hover:bg-slate-200 hover:text-blue-600">
          View All
        </button>
      </div>
    </div>
  );
}

export default App;
