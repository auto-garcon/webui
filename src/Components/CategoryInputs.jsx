import React from "react"

const CategoryInputs = (props) => {
    return (
        props.categories.map( (val, idx) => {
            let categoryId = `category-${idx}`;
            return (
                <div key = {idx}>
                    <label htmlFor = {categoryId}>{`Category #${idx +1}`}</label>
                    <input
                        type = "text"
                        name = {categoryId}
                        data-id = {idx}
                        value = {props.categories[idx].categoryName}
                        className = "categoryName"
                    />
                    <button>Add new menu item</button>
                </div>
            )
        })
    )
}
export default CategoryInputs;