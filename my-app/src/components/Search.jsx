import React from 'react'

const Search = (props) => {
    const { afterSubmit, afterClick } = props
    const {searchValue} = props.formData
    return (
        <input value={searchValue} name='searched' placeholder="Search" className="searchBar" autocomplete="off" onSubmit={(e) => afterSubmit(e)}>
           
            <button onClick={afterClick}>
                Submit
            </button>
        </input>
    )
}

export default Search;