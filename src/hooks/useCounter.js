import { useState } from "react";

export const useCounter = (initialValue = 777) => {

    const [count, setCount] = useState(initialValue)

    function inc() {
        setCount(count + 1)
    }

    function dec() {
        setCount(count - 1)
    }

    return [count, inc, dec]

}