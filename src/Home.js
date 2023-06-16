import { useState, useEffect } from 'react'
import { BlogList } from './BlogList';

export function Home() {




    

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All blogs!" />}
        </div>
    )
}

