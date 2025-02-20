import React, { useEffect, useState } from 'react';

export const useFetch = (url, initialValue) => {
    const [result, setResult] = useState(initialValue);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => setResult(json));
    }, []);

    // React executes the custom hook twice across two renders in the first render.
    return result;
}
