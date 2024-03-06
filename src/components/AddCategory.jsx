import PropTypes from 'prop-types';
import { useState } from 'react';

export const AddCategory = ( { onNewCategory }) => {
    
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ( { target } ) => {        
        setInputValue(target.value);
    }

    const onSubmit = ( event ) => {
        console.log('Hola mundo desde el submit')
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;

        onNewCategory(inputValue.trim());
        //setCategories(categories => [inputValue, ...categories]);
        setInputValue('');
        
    }
    
    return (
        <form onSubmit={ onSubmit } aria-label='form'>
            <input 
                type="text"
                placeholder="Buscar gifts"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>

        )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}