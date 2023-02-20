import { useState, createContext } from "react";
import Child1 from "./Child1";
export const UserContext = createContext();
export const ProductContext = createContext();
// export default function Parent() {
//     const [user] = useState('This text from initial useState in parent component!')
//     return (
//         <>
//             <h1>Parent</h1>
//             <Child1 user={ user }></Child1>
//         </>
//     );
// }
export default function Parent() {
    const [user] = useState('This text from initial useState in parent component!');
    const [product] = useState([
        { id: '001', name: 'Coca-Cola', price: 25 },
        { id: '002', name: 'Sting',price: 25 }
    ])
    // return (
    //     <UserContext.Provider value={user}> {/* if there more than one we use value = {{user, product, ...}} */}
    //         <h1>Parent</h1>
    //         <Child1></Child1>
    //     </UserContext.Provider>
    // )

        return (
            <UserContext.Provider value={{ user, product }}>
                <h1>Parent</h1>
                <Child1></Child1>
            </UserContext.Provider>
        )

    // return (
    //     <UserContext.Provider value={user}>
    //         <ProductContext.Provider value={product}>
    //             <h1>Parent</h1>
    //             <Child1></Child1>
    //         </ProductContext.Provider>
    //     </UserContext.Provider>
    // )
}
/* if we have more than one context, we use this way
    <UserContext.Provider value={user}>
        <ProductContext.Provider value={...}>
            <h1>Parent</h1>
            <Child1></Child1>
        <ProductContext.Provider>
    </UserContext.Provider>
*/