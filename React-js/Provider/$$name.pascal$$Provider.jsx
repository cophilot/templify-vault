import React from 'react';

const $$name.pascal$$Context = React.createContext({
    test: () => {},
});

/**
 * This is the useTest hook
 * @returns {function} test
 */
export function useTest() {
    const context = React.useContext($$name.pascal$$Context);
    if (!context) {
        throw new Error('useTest must be used within a $$name.pascal$$Provider');
    }
    return context.test;
}

/**
 * This is the $$name.pascal$$Provider
 * @author $$git-name$$
 * @version 1.0.0
 * @created $$year$$-$$month$$-$$day$$
 */
export function $$name.pascal$$Provider({ children }) {
    const test = () => {
        console.log('test');
    };

    return (
        <$$name.pascal$$Context.Provider
            value={{
                test: test,
            }}>
            {children}
        </$$name.pascal$$Context.Provider>
    );
}
