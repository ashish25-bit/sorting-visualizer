import React, { useLayoutEffect } from 'react';
import Array from '../components/Sorting/Array';

const Sort = () => {
    useLayoutEffect(() => { document.title = "Sorting Algorithms" }, []) 
    return <Array /> 
}

export default Sort;
