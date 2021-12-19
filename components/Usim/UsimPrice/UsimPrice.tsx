import Button from 'components/common/Btns/Button/Button';
import React from 'react'
import styles from './UsimPrice.module.scss';

const UsimPrice = () => {
  const handleApplyLink = () => {
    console.log('movemove!')
  }
  return (
    <section>
      <div className = {styles.pricecontainer}/>
      <div className = {styles.textcontainer}>
      <article className = {styles.textbox}>
        <h1>Apply now and get <br/>
        <span>from $15</span><br/>
        for the first month
        </h1>
        <p>You can cancle anytime</p>
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

export default UsimPrice
