"use client"
import {Provider as ReduxProvider} from "react-redux";
import {store} from "@/store/store";
import {FC, ReactNode} from "react";
 const Provider: FC<{children: ReactNode}> = ({children}) => {
    return <ReduxProvider store={store}>{children}</ReduxProvider>
}
export default Provider
