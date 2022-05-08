import axios from "axios"
import { useEffect, useState } from "react"

const useHomeItem = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        const url = `https://pacific-thicket-77981.herokuapp.com/inventories`
        axios.get(url)
            .then(res => {
                setItems(res.data);
            })
    }, [])

    return [ items, setItems ]

}

export default useHomeItem