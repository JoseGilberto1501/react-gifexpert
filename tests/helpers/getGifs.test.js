
import { getGifs } from "../../src/helpers/getGifs"

describe('Probando el helper', () => {
  
    test('should return gifs array ', async () => {
      
        const gifs = await getGifs('one-punch');

        expect( gifs.length).toBeGreaterThan(0);

        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url:expect.any(String),
        });
    })
    
})
