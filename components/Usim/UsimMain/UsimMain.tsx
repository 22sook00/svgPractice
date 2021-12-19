import Button from 'components/common/Btns/Button/Button'
import React from 'react'

import styles from './UsimMain.module.scss';

const UsimMain = () => {
  const handleApplyLink = () => {
    console.log('hahaha')
  }
  return (
    <section>

      <div className = {styles.imgbox} />
      
      <div className = {styles.textcontainer}>
        <article className = {styles.textbox}>
          <h1>Stay connected <br/>
          in Korea with <br/>
          ENKOR <span>SIM Card</span>
          </h1>
          <h2>Starting from only $15</h2>
        </article>
        <Button 
        customStyle = {styles.customBtn}
        onClick = {handleApplyLink}
        children = {'Apply Now'}
        />
      </div>
    </section>
  )
}

export default UsimMain
