import React from 'react'
import styles from './UsimFaq.module.scss';
import { ChevronUpIcon } from "@heroicons/react/outline";

const usimFaqData = [
  {
    id : 1, 
    question : `[After pay] When can i expect
  to get my SIM card?
  `,
    answer : `Delivery will usually start the next day, delivery 
    procedure and speed is totally depending on the shipping company.
    It usually takes 3-5 business days to deliver to your foot step. (if your address is correct)`
},
{
  id : 2, 
  question : `I Aleady register my SIM card serial number on my page, 
  When it will be activated?
`,
  answer : [`SIM card will be activated withine 2 days upon successful registration of the SIM card serial number
  on our website, unless issue such as unclear passport 
  (light reflection, shadow, cropped out).
  `,
  `Activavtion is usually perfomed on 3-5pm during weekdays and weekend. 
  Restart your phone several times after the stated time above.
  If it's still doesnt't work, try it again the next day.
  Contact Customer Experience team if it still doesn't work ultimately.
  `]
},
{
  id : 3, 
  question : `[After Activation] How can i cancle or deactivate my SIM card?`,
  answer : `After 30 days of usage, the SIM card will be expired
  without credit. If you don't recharge it, it will stays without credit and no fees
  will incurred. Also If there is no recharge for the next 44 days, the SIM card will be 
  deactivated permenently.
  `
},
]

const UsimFaq = () => {
  const handleOpenAnswer = () => {
    
  }
  return (
    <section>
      <div className = {styles.faqcontainer}>
        <div className = {styles.faqtitle}>FAQ</div>
      {usimFaqData.map((faq)=>{
        return (
          <article key = {faq.id} className = {styles.faqCard}>
            <div className = {styles.questionbox}>
              <h2>Q.{faq.question}</h2>
              <ChevronUpIcon 
              onClick = {handleOpenAnswer}
              className = {styles.icon} />
            </div>
            <p>{faq.answer}</p>
          </article>
        )
      })}

</div>
    </section>
  )
}

export default UsimFaq
