import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import FetchButton from './FetchButton'

function FinalScreen() {
  const score = useSelector((state) => state.score)

  const dispatch = useDispatch()

  const replay = () => {
    dispatch({
      type: 'SET_INDEX',
      index: 0,
    })

    dispatch({
      type: 'SET_SCORE',
      score: 0,
    })
  }

  const settings = () => {
    dispatch({
      type: 'SET_QUESTIONS',
      questions: [],
    })

    dispatch({
      type: 'SET_SCORE',
      score: 0,
    })
  }

  return (
    <div>
      <h3 style={{color: 'navy', fontSize: '30px'}}>Final Score : {score}</h3>
      <button onClick={replay} style={{ borderRadius: '10px' , backgroundColor: '#FF4500'}}>Try again</button>
      <FetchButton text="Fetch new questions" />
      <button onClick={settings} style={{borderRadius: '10px', backgroundColor: '#64E986'}}>Back to settings</button>
    </div>
  )
}
export default FinalScreen