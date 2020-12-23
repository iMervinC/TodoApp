const ListItem = ({ label, id }) => {
  return (
    <div className="list-item">
      <input type="checkbox" id={`check${id}`} />
      <label htmlFor={`check${id}`}>{label}</label>
    </div>
  )
}

export default ListItem
