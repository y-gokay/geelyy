'use client';

import { createContext, useContext, useState } from "react";

const PriceContext = createContext();

export function PriceProvider({ children }) {
    const [totalPrice, setTotalPrice] = useState(0);

    const updatePrice = (price) => {
        setTotalPrice(price);
    };

    return (
        <PriceContext.Provider value={{ totalPrice, updatePrice }}>
            {children}
        </PriceContext.Provider>
    );
}

export function usePrice() {
    return useContext(PriceContext);
} 