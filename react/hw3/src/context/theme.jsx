import React, { createContext, useState } from 'react';
// Provide ThemeContext
// Create ThemeContextProvider
// Inside ThemeContextProvider create state with "view" data
// Inside ThemeContextProvider create func "changeProductsView" for change "view" in state
// Provide "view" value & "changeProductsView" func as value for this context

// {
//     view: "grid"
//     changeView: (viewType) => {}
// }

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
    const [view, setView] = useState('grid');

    const changeView = (viewType) => setView(viewType);

    return (
        <ThemeContext.Provider value={{
            view,
            changeView
        }}>
            {children}
        </ThemeContext.Provider>
    )
}