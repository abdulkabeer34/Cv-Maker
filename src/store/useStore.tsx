import { applySnapshot, types , Instance } from "mobx-state-tree";
import { FormInfo, initFormInfo } from "./cv-maker";
import { useMemo } from "react";

const rootStore = types.model({
    FormInfo : FormInfo
})


export type RootStoreType  =  Instance<typeof rootStore>

let store : RootStoreType


const initialStore = (snapshot:any) =>{
     const  _store = store ?? rootStore.create({
        FormInfo : initFormInfo()
    })
  

    if(snapshot){
        applySnapshot(_store, snapshot)
    }

    if (typeof window === 'undefined') {
        return _store
      }

    if(!store){
        store  = _store
    }

    return _store


}


export function  useStore(snapshot:any)   {
     return useMemo(()=>initialStore(snapshot),[snapshot])
}