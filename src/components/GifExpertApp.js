import React, { Fragment, useState } from 'react';
import AddCategory from './AddCategory';

const GifExpertApp = () => {
    const arr = ['Shoes', 'Clocks', 'Purses'];
    const [categories, setCategories] = useState(arr)

    return (
        <Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />

            <ol>
                {categories.map(category => {
                    return <li key={category}>{category}</li>
                })}
            </ol>
        </Fragment>
    )
}

export default GifExpertApp;