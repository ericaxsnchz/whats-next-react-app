import React from 'react'

const ListButton = ({ todos, setFilteredTodos }) => {
    const handleFilterChange = (e) => {
        const selectedFilter = e.target.value;
        filterTodos(selectedFilter);
    }

    const filterTodos = (selectedFilter) => {
        if (todos) {
            switch (selectedFilter) {
                case 'complete':
                    setFilteredTodos(todos.filter(item => item.completed));
                break;
                case 'incomplete':
                    setFilteredTodos(todos.filter(task => !task.completed));
                break;
                default:
                    setFilteredTodos(todos);
            }
        }
    }
    
  return (
    <div className="list-btn">
        <select onChange={handleFilterChange}>
            <option value="all">all</option>
            <option value="complete">active</option>
            <option value="incomplete">done</option>
        </select>
    </div>
  )
}

export default ListButton