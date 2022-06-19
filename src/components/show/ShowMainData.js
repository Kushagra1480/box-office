import React from 'react'
import IMG_PLACEHOLDER from '../../images/not-found.png';
import { Star } from '../styled';
import { MainDataWrapper, Headline, TagList } from './ShowMainData.styled';

const ShowMainData = ({name, rating, tags, summary, image}) => {
  return (
    <MainDataWrapper>
        <img src={image ? image.original : IMG_PLACEHOLDER} alt="show-cover" />
        <div className = 'text-side'>
            <Headline>
                <h1>{name}</h1>
                <div>
                    <Star active/>
                    <span>{rating.average || 'N/A'}</span>
                </div>
            </Headline>
            <div dangerouslySetInnerHTML={{ __html: summary }} className = 'summary'/>
            <div>
                Tags:{' '}
                <TagList>
                    {tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                    ))}
                </TagList>
            </div>
        </div>
    </MainDataWrapper>
  )
}

export default ShowMainData