import React, { Fragment, useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
    const arr = ['Shirt'];// Valor por defecto
    const [categories, setCategories] = useState(arr)

    return (
        <Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            {categories.map(category => (
                <GifGrid
                    key={category}
                    category={category}
                />
            ))}
        </Fragment>
    )
}

export default GifExpertApp;