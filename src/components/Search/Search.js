import React, { useState } from 'react';
import User from './User';

const Search = () => {
    const [value, setValue] = useState(true);
    return (
        <div>
            <h2>Is Value: {value.toString()}</h2>
            <button onClick={() => setValue(!value)}>Toggle Button</button>
            <User value={value} />
        </div>
    );
};

export default Search;