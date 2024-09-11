import React, { useEffect, useState } from 'react'
import '../Contact.css'
import { base_url } from '../utils/constants'

const Contact = () => {
  const [planets, setPlanets] = useState(['wait...']);

  useEffect(() => {
    const fetchPlanets = async () => {
      const storedData = localStorage.getItem('planetsData');
      const currentTime = new Date().getTime();

      if (storedData) {
        const { data, timestamp } = JSON.parse(storedData);
        const thirtyDaysInMs = 30 * 24 * 60 * 60 * 1000;

        if (currentTime - timestamp < thirtyDaysInMs) {
          setPlanets(data);
          return;
        }
      }

      try {
        const response = await fetch(`${base_url}/v1/planets`);
        const data = await response.json();
        const planetNames = data.map(item => item.name);
        setPlanets(planetNames);
        
        localStorage.setItem('planetsData', JSON.stringify({
          data: planetNames,
          timestamp: currentTime
        }));
      } catch (error) {
        console.error('Error fetching planets:', error);
      }
    };

    fetchPlanets();
  }, [])

  return (
    <form className='containerContact'>
      <label>First Name
        <input type="text" name="firstname" placeholder="Your name.." />
      </label>

      <label>Last Name
        <input type="text" name="lastname" placeholder="Your last name.." />
      </label>
      <label>Country
        <select name="planet">
          {planets.map(item => <option key={item} value={item}>{item}</option>)}
        </select>
      </label>

      <label>Subject
        <textarea name="subject" placeholder="Write something.." style={{ height: '200px' }}></textarea>
      </label>
      <button>Submit</button>
    </form>
  )
}

export default Contact