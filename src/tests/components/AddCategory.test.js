import React from 'react'
import '@testing-library/jest-dom'
import AddCategory from '../../components/AddCategory'
const { shallow } = require("enzyme")

describe('Pruebas componente <AddCategory />', () => {
    const setCategories = jest.fn()
    let wraper;

    // Ciclo de vida de las pruebas
    beforeEach(() => {
        jest.clearAllMocks() // Se reinicializan los valores de las pruebas
        wraper = shallow(<AddCategory setCategories={setCategories} />)
    })

    test('El componente debe mostrarse correctamente', () => {
        expect(wraper).toMatchSnapshot(); // se verifica que el cuerpo del componente no se modifique
    })

    test('Cambios en el input', () => {
        const input = wraper.find('input')
        const value = 'Hola mundo' // Se pasa como argumento el evento con el target.value.
        input.simulate('change', { target: { value } })
    })

    test('No se debe ejecutar el método handleSubmit', () => {
        wraper.find('form').simulate('submit', { preventDefault() { } }) // Si el input está vacio la func no debería llamarse
        expect(setCategories).not.toHaveBeenCalled()// La función no se debe llamar
    })

    test('Debe llamar al método setCategories y limpiar el input', () => {
        // 1. Simular el inputChange
        const input = wraper.find('input')
        const value = 'Shoes'
        input.simulate('change', { target: { value } })// Se simula pasarle un valor al target

        // 2. simular el submit
        wraper.find('form').simulate('submit', { preventDefault() { } })
        expect(setCategories).toHaveBeenCalled();// La función se debe llamar por lo menos una vez
        expect(setCategories).toHaveBeenCalledTimes(1);// Se pasa como argumento el número de veces que se quiere llamar a la función
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));// Se valida que el argumento de setCategories sea una función

        // 3. El valor del input debe estar vacio
        expect(input.props().value).toBe('')
    })
})