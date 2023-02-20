import { UserContext } from "./Parent";
import { useContext } from "react";
export default function Child3({ user }) { //using props
    const { user3 } = useContext(UserContext);
    return (
        <>
            <h1>Child3</h1> 
            <h1>{ user3 }</h1>
        </>
    );
}