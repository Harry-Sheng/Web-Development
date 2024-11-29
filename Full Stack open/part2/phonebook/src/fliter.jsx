const Filter = ({search, handleSearchChange, persons}) =>{
    const filteredPersons = persons.filter((person) =>
        person.name.toLowerCase().includes(search.toLowerCase())
    )
    return (<div>
          filter shown with: <input value = {search} onChange = {handleSearchChange}/>
          {filteredPersons.map(x => <p key = {x.id}>{x.name + ' ' + x.number}</p>)}
      </div>)
}
export default Filter