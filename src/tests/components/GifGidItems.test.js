import React from 'react'
import { shallow } from 'enzyme'
import GifGidItems from '../../components/GifGidItems'

describe('Pruebas en <GifGidItems />', () => {

    const title = 'Titulo de prueba'
    const url = 'https//localhosto/prueba'
    // Se obtienen las caracteristicas del componente con los parámetros que recibe
    const wraper = shallow( <GifGidItems title={title} url={url}/> )

    test('Debe mostrar el componente correctamente', () => {
        expect(wraper).toMatchSnapshot();// Copia del cuerpo del componente, en caso que ocurra algún cambio este va a notificar
    })

    test('El title debe ser un párrafo ', () => {
        const p = wraper.find('p')// Se obtiene el parrafo y se verifica que coincida con la variable title
        expect(p.text().trim()).toBe(title)
    })

    test('src y alt de la imagen igual a las props ', () => {
        const img = wraper.find('img')
        //console.log(img.props().src)// Se verifica que las propiedades de la etiqueta img conincidan
        expect(img.props().src).toBe(url)
        expect(img.props().alt).toBe(title)
    })

    test('Debe terner la clase animate__fadeIn', () => {
        const div = wraper.find('div')
        const className = div.props().className // Se ontiene la clase animate__fadeIn
        expect(className.includes('animate__fadeIn')).toBe(true) // Se verifica que la clase animate__fadeIn esté en el componente
    })
})