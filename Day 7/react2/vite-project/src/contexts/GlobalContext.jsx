// Context is like aa store which holds the data


import { createContext,useState } from "react";

const GlobalContext = createContext();

//named export
export const GlobalProvider = (props) => {
    const {children} = props;
    const [currPage,setCurrentPage] = useState(1);
    return(

    <GlobalContext.Provider value = {{currPage,setCurrentPage}}>
        {children}
    </GlobalContext.Provider>
    )
}

//Default export
export default GlobalContext;