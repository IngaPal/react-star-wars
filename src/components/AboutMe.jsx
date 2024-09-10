import React, { useEffect, useState } from 'react'
import { base_url } from '../utils/constants'

const AboutMe = () => {
  const [hero, setHero] = React.useState();

  useEffect(() => {
    const fetchHeroData = async () => {
      const storedData = localStorage.getItem('heroData');
      const currentTime = new Date().getTime();

      if (storedData) {
        const { data, timestamp } = JSON.parse(storedData);
        const thirtyDaysInMs = 30 * 24 * 60 * 60 * 1000;

        if (currentTime - timestamp < thirtyDaysInMs) {
          setHero(data);
          return;
        }
      }

      try {
        const response = await fetch(`${base_url}/v1/peoples/1`);
        const data = await response.json();
        const heroData = {
          name: data.name,
          gender: data.gender,
          birth_year: data.birth_year,
          height: data.height,
          mass: data.mass,
          hair_color: data.hair_color,
          skin_color: data.skin_color,
          eye_color: data.eye_color
        };
        setHero(heroData);
        
        localStorage.setItem('heroData', JSON.stringify({
          data: heroData,
          timestamp: currentTime
        }));
      } catch (error) {
        console.error('Error fetching hero data:', error);
      }
    };

    fetchHeroData();
  }, [])

  return (
    <>
      {(!!hero) &&
        <div className='fs-2 lh-lg text-justify ms-5'>
          <p><span className='display-3'>name:</span> {hero.name}</p>
          <p><span className='display-3'>gender:</span> {hero.gender}</p>
          <p><span className='display-3'>birth year:</span> {hero.birth_year}</p>
          <p><span className='display-3'>height:</span> {hero.height}</p>
          <p><span className='display-3'>mass:</span> {hero.mass}</p>
          <p><span className='display-3'>hair color:</span> {hero.hair_color}</p>
          <p><span className='display-3'>skin color:</span> {hero.skin_color}</p>
          <p><span className='display-3'>eye color:</span> {hero.eye_color}</p>
        </div>
      }
    </>
  )
}

export default AboutMe