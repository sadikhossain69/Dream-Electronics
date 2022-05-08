import axios from "axios"
import { useEffect, useState } from "react"

const useHomeItem = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        const url = `http://localhost:5000/inventories`
        axios.get(url)
            .then(res => {
                setItems(res.data);
            })
    }, [items])

    return [ items, setItems ]

}

export default useHomeItem