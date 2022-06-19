import React, {useState} from 'react'
import MainPageLayout from '../components/MainPageLayout'
import { apiGet } from '../misc/config'
import ShowGrid from '../components/show/ShowGrid'
import ActorGrid from '../components/actor/ActorGrid'
import { useLastQuery } from '../misc/custom-hooks'
import { SearchInput, RadioInputsWrapper, SearchButtonWrapper } from './Home.styled'
import CustomRadio from '../components/CustomRadio'

const Home = () => {
    const [input, setInput] = useLastQuery()
    const [results, setResults] = useState(null)
    const [searchOption, setSearchOption] = useState('shows')
    const isSearchShows = searchOption === 'shows'
    const onInputChange = ev => {
        setInput(ev.target.value)
    }
    const onSearch = () => {
        apiGet(`/search/${searchOption}?q=${input}`).then(result => {
            setResults(result)
        })
    }
    const onKeyDown = (ev) => {
        if(ev.keyCode === 13) {
            onSearch()
        }
    }
    const renderResults = () => {
        if(results && results.length === 0) {
            return <div>No Results!!</div>
        }
        if(results && results.length > 0) {
            return isSearchShows ? <ShowGrid data = {results}/> : <ActorGrid data = {results}/>        
        }
    }
    const onRadioChange = (ev) => {
        setSearchOption(ev.target.value)
    }
    return (
        <MainPageLayout>
            <SearchInput 
                type="text" 
                onChange={onInputChange} 
                value = {input} 
                onKeyDown = {onKeyDown} 
                placeholder = "Search for something"/>
            <RadioInputsWrapper>
            <div>
                <CustomRadio 
                    label = "Shows" 
                    id = "shows-search" 
                    value = 'shows' 
                    checked={isSearchShows} 
                    onChange = {onRadioChange}/>
            </div>
            <div>
                <CustomRadio 
                    label = "Actors" 
                    id='actors-search' 
                    value = 'people' 
                    checked = {!isSearchShows} 
                    onChange = {onRadioChange}/>
            </div>    
            </RadioInputsWrapper>
            <SearchButtonWrapper>
                <button type = "button" onClick = {onSearch}>Search</button>
            </SearchButtonWrapper>
            {renderResults()}
        </MainPageLayout>
    )
}

export default Home