import React from 'react'
import Firebase from '../utils/firebase'

export default class Toggle extends React.Component {

  onClick = (e) => {
    console.log(e.target.checked)
    Firebase.setData(e.target.checked)
  }
  
  render () {
    return (
      <>
        <label htmlFor="" >toggle</label>
        <input type="checkbox" onClick={this.onClick}/>
      </>
    )
  }
  
}