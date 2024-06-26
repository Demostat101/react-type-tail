interface Props{
    searchHandler:React.ChangeEventHandler<HTMLInputElement>,
    search:string
}


const Search = ({searchHandler,search}:Props) => {
  return (
    <div>
      <input className="border-solid border-2 border-blue-500 p-1 mt-3" type="text" value={search} placeholder="Search Todos..." onChange={searchHandler} />
    </div>
  )
}

export default Search
