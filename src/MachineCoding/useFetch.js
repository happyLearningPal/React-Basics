import { useEffect, useState } from "react";


export const useFetch = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10&_page=1}');
                if (!res.ok) {
                    throw new Error("Something went wrong");
                }
                const data = await res.json();
                setData(data);
                setLoading(false);
            } catch (error) {
                console.error("Error:", error.message);
            }
        }
        fetchData();
    }, []);

    return { data, loading }
}