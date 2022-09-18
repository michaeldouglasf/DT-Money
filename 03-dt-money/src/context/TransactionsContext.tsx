import { Children, createContext, ReactNode, useEffect, useState } from 'react';

interface Transactions {
    id: number;
    description: string;
    price:number;
    type: 'income' | 'outcome';
    category: string;
    createdAt:string;
  }

interface TransactionsContextType {
transactions: Transactions[]
}

interface TransactionsProviderProps {   
    children: ReactNode
}
export const  TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsProvider ({children} : TransactionsProviderProps){

    const [ transactions,setTransactions] = useState<Transactions[]>([])

    async function LoadTransactions() {
      const response = await fetch('http://localhost:3000/transactions')
      const data = await response.json()
      setTransactions(data)
      
    }
      useEffect(()=>{
        LoadTransactions()
    
      },[])
    return(
        <TransactionsContext.Provider  value={{transactions}}>
            {children}
        </TransactionsContext.Provider>
    )
}