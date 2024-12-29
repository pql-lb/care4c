import React, { createContext, useContext, useEffect, useState } from "react";
import client from "../helpers/client.tsx";

interface PageData {
    id: string;
    title: string;
    content: any;
}

interface PageContextType {
    pageData: any;
    loading: boolean;
    error: string | null;
}

const PageContext = createContext({
    pageData: null,
    loading: true,
    error: null,
});

export const usePageData = () => useContext(PageContext);

export const PageProviderContact = ({ children, type }: any) => {
    const [pageData, setPageData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPageData = async () => {
            try {
                const response = await client.getEntries({
                    content_type: type,
                });

                if (response.items.length > 0) {
                    const item = response.items[0];
                    setPageData(item.fields);
                } else {
                    setError("Page not found");
                }
            } catch (err) {
                console.error("Error fetching page data:", err);
                setError("Failed to fetch page data");
            } finally {
                setLoading(false);
            }
        };

        fetchPageData();
    }, []);

    return (
        <PageContext.Provider value={{ pageData, loading, error }}>
            {children}
        </PageContext.Provider>
    );
};
