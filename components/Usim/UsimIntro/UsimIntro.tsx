import React from 'react'
import styles from './UsimIntro.module.scss';

const usimintroData = [
  {id : 1, icon :'./Asset/icons/globeicon.svg',title : 'International Customer Service',
desc : `No need for Google Translate anymore! 
Talk directly to your English/Chinese speaking
agents`
},
{id : 2, icon:'./Asset/icons/timeicon.svg',title : 'Easy Recharging Process',
desc : `You can recharge your plan with easy steps.
Once you click extend butto, our team will handle
all your problems with recharging your plan.
`
},
{id : 3, icon:'./Asset/icons/walleticon.svg',title : 'Self-Identification Support',
desc : `Most SIM providers do not support Self
Identification.
Verify with your Alien Registration Number
and access many on/off line services in Korea`
},
]

const UsimIntro = () => {
  return (
    <section>
      <div className = {styles.textcontainer}>
        <h2>The cheapest plan you can<br/>
        find in korea.
        </h2>
        <h3>First month at a 70% lower price! Cancle anytime
        </h3>
      </div>
      <div className = {styles.cardcontainer}>
      {usimintroData.map((card)=>{
        return (
          <article key = {card.id} className = {styles.cards}>
            <img src = {card.icon} alt= {card.title} />
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </article>
        )
      })}
      </div>
    </section>
  )
}

export default UsimIntro
