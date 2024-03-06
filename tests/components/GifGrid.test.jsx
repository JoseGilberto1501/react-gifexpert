import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Probando el GifGrid', () => {
  
    const category = 'Dragon Ball';

    test('debe de mostrar el loading ', () => {
      
        useFetchGifs.mockReturnValue({
            images:[],
            isLoading: true
        });
        
        render( <GifGrid category= {category}/>)

        //screen.debug();
        expect( screen.getByText('Cargando...'));
        expect( screen.getByText(category));
    });
   
    test('debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {
      
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url:'https://localhost/saitama.jpg'
            },
            {
                id: 'ABCD',
                title: 'Goku',
                url:'https://localhost/goku.jpg'
            }
        ];

        useFetchGifs.mockReturnValue({
            images:[],
            isLoading: false
        });

        render( <GifGrid category= {category}/>);
        //creen.debug();

        //expect(screen.getAllByRole('img').length).toBe(2);
        expect( screen.getAllByRole('img').length).toBe(2);



    });
    
});
