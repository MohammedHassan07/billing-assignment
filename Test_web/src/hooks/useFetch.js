import { useState, useEffect } from 'react';

// Custom useFetch hook for handling data fetching and state management
export const useFetch = (fetchFunction) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchFunction(); // Execute the API call function passed
                setData(response.data);                 // Set the fetched data
            } catch (err) {
                setError(err);                         // Capture and set error
            } finally {
                setLoading(false);                     // Stop loading spinner once data is fetched or an error occurs
            }
        };

        fetchData();
    }, [fetchFunction]);  // Dependency on the fetchFunction so that it re-runs if the function changes

    return { data, loading, error };
};
