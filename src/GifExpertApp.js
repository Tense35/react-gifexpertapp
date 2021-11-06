import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    // const handleAdd = ( ) => {
    //     // setCategories( [...categories, 'HunterXHunter'] );
    //     setCategories( _categories => [..._categories, 'HunterXHunter'] );
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr></hr>

            <ol>
                { 
                    categories.map( category => <GifGrid key={ category } category={ category } /> ) 
                }
            </ol>
        </>
    );
}