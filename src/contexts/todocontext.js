import { createContext,useContext } from "react";
export const todocontext=createContext({
    todos :[{                                           
        id:2,                                                                                                                  
        todo:"todomsg",
        completed:false,
}                                                   
 ],
 addtodo: (todo)=>{},
 updatetodo:(id,todo)=>{},
 deletetodo:(id)=>{},
 togglecomplete:(id)=>{}
})
export const usetodo=()=>{
 return useContext(todocontext)   
}
export const Todoprovider=todocontext.Provider