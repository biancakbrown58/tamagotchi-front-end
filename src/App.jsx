import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { Tamagotchi } from './components/Tamagotchi'

export function App() {
  return (
    <>
      <header>
        <h1>Tamagotchi!</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Go Home</Link>
            </li>
            <li>
              <Link to="/1">Page 1</Link>
            </li>
            <li>
              <Link to="/2">Page 2</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/">
          Home
          <ul>
            <li>One Tamagotchi</li>
            <li>Two Tamagotchi</li>
            <Tamagotchi />
          </ul>
        </Route>
        <Route exact path="/1">
          Page 1
        </Route>
        <Route exact path="/2">
          Page 2
        </Route>
        <Route path="*">Not Found</Route>
      </Switch>
    </>
  )
}
