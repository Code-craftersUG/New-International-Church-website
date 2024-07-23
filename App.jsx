import React from 'react';
import './App.css'; 
import { useState, useEffect } from 'react';
import bibleImage from './assets/bible.png'
import Pastor from './assets/pastor.png'

const Header = () => {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">New International Church </div>
      <nav>
        <a href="#" className="mx-2">Home</a>
        <a href="#" className="mx-2">About Us</a>
        <a href="#" className="mx-2">Sermons</a>
        <a href="#" className="mx-2">Contact Us</a>
      </nav>
    </header>
  );
};

const Article = () => {
  return (
    <section className="w200">
      <img src={bibleImage} alt="Bible" className='Image' width="500" height="300" />
      <h2 className="text-2xl font-bold mb-4">How To Truly Trust Someone</h2>
      <p className="mb-41">
      Trusting someone requires vulnerability, faith, and wisdom. 
      It means surrendering your fears, doubts, and control, and choosing to believe in their goodness and intentions.
       Trust is built through consistent actions, honest communication, and empathy.
        When you truly trust someone, you create a safe space for deep connection, growth, and unwavering support.
      </p>
      <p className="mb-41">
      Trusting someone means being willing to take risks, to be vulnerable, and to believe in their ability to catch you when you fall.
       It's a choice that requires effort, patience, and understanding, but yields a harvest of strong relationships, inner peace, and joy
      </p>
    </section>
  );
};

const Register = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [location, setLocation] = useState({ city: '', country: '' });

  useEffect(() => {
    // Get current date
    const date = new Date();
    const formattedDate = date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    setCurrentDate(formattedDate);

    // Get current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const response = await fetch(
            `https://geocode.xyz/${latitude},${longitude}?json=1`
          );
          const data = await response.json();
          setLocation({
            city: data.city,
            country: data.country
          });
        } catch (error) {
          console.error('Error fetching location data:', error);
        }
      });
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <section className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Register Now</h2>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <span className="material-icons">place</span>
            <span>{location.city}, {location.country}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="material-icons">event</span>
            <span>{currentDate}</span>
          </div>
        </div>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Full Name</label>
            <input type="text" className="w-full p-2 border rounded-md" placeholder="Leonard John" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input type="email" className="w-full p-2 border rounded-md" placeholder="admin@abc.com" />
          </div>
          <button type="submit" className="w1-full bg-orange-200 text-black p-2 rounded-md hover:bg-orange-300">
            Register Now
          </button>
        </form>
      </section>
    </div>
  );
};

const SermonCard = ({ name, title }) => (
  <div className="text-center p-4">
    <div className='image-div'>
      <img src={Pastor} alt="pastor" className='Image1'/>

      <div className="Image1">{name}</div>
    <div className="Image1">{title}</div>
      </div>
  </div>
);

const UpcomingSermons = () => {
  const sermons = [
    { name: 'Kim Romen', title: 'Speaker'},
    { name: 'Danielle Watkins', title: 'Speaker'},
    { name: 'Naomi Chang', title: 'Speaker'},
    { name: 'Santos Payne', title: 'Speaker'},
  ]; 

  return (
    <section className="mb-8">
      <h2 className="ministry">Ministry</h2>
      <h2 className="upcoming-sermon">Upcoming Sermons</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {sermons.map((sermon, index) => (
          <SermonCard key={index} name={sermon.name} title={sermon.title} image={sermon.image} />
        ))}
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black text-white p-4">
      <div className="flex justify-between items-center">
        <div>&copy; 2024 Faithful Church</div>
        <div>
          <a href="#" className="mx-2">Facebook</a>
          <a href="#" className="mx-2">Twitter</a>
          <a href="#" className="mx-2">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="bg-peach-500 font-sans">
      <Header />
      <main className="max-w-7xl mx-auto p-4">
        <Article />
        <Register />
        <UpcomingSermons />
      </main>
      <Footer />
    </div>
  );
};

export default App;
