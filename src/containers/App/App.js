import React, { useReducer } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Instructions from '../../components/pages/Instructions/Instructions'
import Home from '../../components/pages/Home/Home'
import About from '../../components/pages/About/About'
import ArrowUp from '../../assets/icons/SVG/Up.svg'
import ArrowDown from '../../assets/icons/SVG/Down.svg'
import ArrowLeft from '../../assets/icons/SVG/Left.svg'
import ArrowRight from '../../assets/icons/SVG/Right.svg'
import Loop from '../../assets/icons/SVG/Arrow.svg'
import Braces from '../../assets/icons/SVG/Bracket.svg'
import './App.css'

const initialState = {
  gameMode: [],
  difficulty: '',
  gameStart: false,
  sound: true,
  music: true,
  dragId: '',
  dragSource: '',
  dragOver: '',
  toolboxControls: {
    arrowUp: {
      icon: ArrowUp,
      id: 'arrowUp',
      function: false,
      dropDepth: 0,
      inDropZone: false,
    },
    arrowDown: {
      icon: ArrowDown,
      id: 'arrowDown',
      function: false,
      dropDepth: 0,
      inDropZone: false
    },
    arrowRight: {
      icon: ArrowRight,
      id: 'arrowRight',
      function: false,
      dropDepth: 0,
      inDropZone: false
    },
    arrowLeft: {
      icon: ArrowLeft,
      id: 'arrowLeft',
      function: false,
      dropDepth: 0,
      inDropZone: false
    },
    braces: {
      icon: Braces,
      id: 'braces',
      function: false,
      dropDepth: 0,
      inDropZone: false
    },
    loop: {
      icon: Loop,
      id: 'loop',
      function: true,
      dropDepth: 0,
      inDropZone: false
    }
  },
  benchControls: [],
  braceControls: []
}

function reducer(state, action) {
  switch (action.type) {
    case 'SET_GAME_MODE':
      return { ...state, gameMode: action.gameMode }
    case 'SET_DIFFICULTY':
      return { ...state, difficulty: action.difficulty }
    case 'SET_GAME_START':
      return { ...state, gameStart: action.gameStart }
    case 'SET_SOUND':
      return { ...state, sound: action.sound }
    case 'SET_MUSIC':
      return { ...state, music: action.music }
    case 'SET_DRAG_ID':
      return { ...state, dragId: action.dragId }
    case 'SET_DRAG_SOURCE':
      return { ...state, dragSource: action.dragSource }
    case 'SET_DRAG_OVER':
      return { ...state, dragOver: action.dragOver }
    case 'SET_BENCH_CONTROLS':
      return { ...state, benchControls: action.benchControls }
    case 'SET_BRACE_CONTROLS':
      return { ...state, braceControls: action.braceControls }
    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Router>
      <Header settings={[state.difficulty, state.sound, state.music]} dispatch={dispatch} />
      <Route exact path="/" render={() => <Home data={state} dispatch={dispatch} />} />
      <Route path="/about" component={About} />
      <Route path="/instructions" component={Instructions} />
    </Router>
  )

}

export default App
