

import React from 'react';
import Link from 'next/link';

export default async function WebSearchPage({ searchParams }) {
    try {
        const response = await fetch(
            `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`
        );
        
        if (!response.ok) {
            throw new Error(`Failed to fetch search results: ${response.status}`);
        }
        
        const data = await response.json();
        const results = data.items;
        
        if (!results) {
            return (
                <div className='flex flex-col justify-center items-center pt-10'>
                    <h1 className='text-3xl mb-4'>
                        No results found for {searchParams.searchTerm}
                    </h1>
                    <p className='text-lg'>
                        Try searching for web or images instead
                        <Link href='/' className='text-blue-500 ml-2'>Home</Link>
                    </p>
                </div>
            );
        }
        return (
            <div className="search-results">
                {results && results.map((result, index) => (
                    <div key={`${result.cacheId || index}`} className="result-item mb-4">
                        <h1 className="text-xl font-medium text-blue-800">{result.title}</h1>
                        {/* You can add more result details here */}
                    </div>
                ))}
            </div>
        );
    } catch (error) {
        console.error("Search error:", error);
        throw new Error("Failed to get search results");
    }
}
