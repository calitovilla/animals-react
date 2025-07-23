const SearchBox = ({ onChangeHandler }: { onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void }) => {
    return (
        <input type="text" placeholder="Type here" className="input mb-8" onChange={onChangeHandler} />
    )
}

export default SearchBox;

