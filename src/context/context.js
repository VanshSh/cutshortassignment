import React, { createContext, useContext, useState } from 'react'

const StepCounterContext = createContext()

export const StepCounterProvider = ({ children }) => {
    const [page, setPage] = useState(1)

    const pageHandler = () => {
        if (page < 4) {
            setPage((prev) => prev + 1)
        } else {
            setPage(1)
        }
    }

    return (
        <StepCounterContext.Provider value={{ page, setPage, pageHandler }}>
            {children}
        </StepCounterContext.Provider>
    )
}

export const useStepCounter = () => {
    return useContext(StepCounterContext)
}
