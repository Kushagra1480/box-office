import React from 'react'
import { StyledActorCard } from './ActorCard.styled'

const ActorCard = ({name, country, gender, image, birthday, deathday}) => {
  return (
    <StyledActorCard>
      <div>
        <img src={image} alt="actor" />
      </div>
      <h1>
        {name} 
      </h1>
      <p>{country ? `From ${country}` : 'No country known'}</p>
      {birthday ? <p>Born {birthday}</p> : null}
      {gender ? `(${gender})` : null}
      <p className='deathday'>{deathday ? `Died ${deathday}` : 'Alive'}</p>
    </StyledActorCard>
  )
}

export default ActorCard