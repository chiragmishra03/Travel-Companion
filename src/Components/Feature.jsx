import React from 'react'
import { tours } from '../Data'
import Tour from './Tour'
import Title from './Title'

const Feature = () => {
  return (
    <>
       <section className='section' id='tours'>
      <Title title='featured' subTitle='tours' />
      <div className='section-center featured-center'>
        {tours.map((tour) => {
          return <Tour {...tour} key={tour.id} />
        })}
      </div>
    </section>
    </>
  )
}

export default Feature
