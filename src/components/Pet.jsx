import axios from 'axios'
import React, { useEffect, useState } from 'react'

export function Pet({
  id,
  name,
  birthday,
  hungerLevel,
  happinessLevel,
  playtimes,
  feedings,
  scoldings,
}) {
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
  return <li>{name}</li>
}
