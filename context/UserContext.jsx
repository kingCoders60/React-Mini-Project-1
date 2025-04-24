import React,{createContext} from 'react'

export const DataContext = createContext()

const UserContext = ({children}) => {
    const username = createContext();

    const userData = {
        username:"Shivam",
        city:"Kol"
    }
return (
    <div>
        <DataContext.Provider value={username}>
        {children}
        </DataContext.Provider>
    </div>
)
}

export default UserContext
