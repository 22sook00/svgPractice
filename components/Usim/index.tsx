import React from 'react'
import UsimEnding from './UsimEnding/UsimEnding'
import UsimFaq from './UsimFaq/UsimFaq'
import UsimIntro from './UsimIntro/UsimIntro'
import UsimMain from './UsimMain/UsimMain'
import UsimPrice from './UsimPrice/UsimPrice'

const Usim = () => {
  return (
    <main>
      <UsimMain />
      <UsimIntro />
      <UsimPrice />
      <UsimFaq />
      <UsimEnding />
    </main>
  )
}

export default Usim
