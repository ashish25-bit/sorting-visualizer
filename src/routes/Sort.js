import React, { useLayoutEffect } from 'react';
import Array from '../components/Array';

const Sort = () => {
    useLayoutEffect(() => { document.title = "Sorting Algorithms" }, []) 
    return <Array /> 
}

export default Sort;
