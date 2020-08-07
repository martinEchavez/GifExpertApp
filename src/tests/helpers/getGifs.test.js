import getGifs from '../../helpers/getGifs'

describe('Pruebas compornente getGifs', () => {
    test('Debe traer 10 elementos', async () => {
        const gifs = await getGifs('Shoes')
        expect(gifs.length).toBe(10)
    })

    test('Función sin argumentos', async () => {
        const gifs = await getGifs('')
        expect(gifs.length).toBe(0)
    })
})