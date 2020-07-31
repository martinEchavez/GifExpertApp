import React from 'react'
import GifGidItems from './GifGidItems'
import { useFetchGifs } from '../hooks/useFetchGifs'

const GifGrid = ({ category }) => {
    // Se renombra data por images
    const { data:images, loading } = useFetchGifs(category)

    return (
        <>
            <h3>{category}</h3>
            {/**if loading === true */}
            {loading && <p>Loading...</p>}
            <div className="card-grid">
                {
                    images.map(img => (
                        <GifGidItems
                            key={img.id}
                            {...img} // Se desestructura el objeto antes de ser enviado
                        />
                    ))
                }
            </div>
        </>
    )
}

export default GifGrid;