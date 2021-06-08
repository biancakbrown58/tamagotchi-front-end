import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Pet } from './Pet'

export function Tamagotchi() {
  // const [pet, setPet] = useState({
  //   id: undefined,
  //   name: '',
  //   birthday: undefined,
  //   hungerLevel: 0,
  //   happinessLevel: 0,
  //   playtimes: null,
  //   feedings: null,
  //   scoldings: null,
  // })
  const [allPets, setAllPets] = useState([])

  async function loadPets() {
    const response = await axios.get(
      'http://sdgbiancatamagotchiii.herokuapp.com/api/Pets'
    )
    if (response.status === 200) {
      console.log(response.data)
      setAllPets(response.data)
    }
  }

  useEffect(function () {
    loadPets()
  }, [])

  return (
    <>
      <ul>
        {allPets.map(function (pet) {
          return (
            <Pet
              key={pet.id}
              id={pet.id}
              name={pet.name}
              birthday={pet.birthday}
              hungerLevel={pet.hungerLevel}
              happinessLevel={pet.happinessLevel}
              playtimes={pet.playtimes}
              feedings={pet.feedings}
              scoldings={pet.scoldings}
            />
          )
        })}
      </ul>
    </>
  )
}
