import { useState, useEffect } from 'react'
import { BlogList } from './BlogList';

export function Home() {

    const [blogs, setBlogs] = useState(null);

    function handleDelete(id) {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        fetch("http://localhost:8000/blogs")
            .then(res => {
                return res.json();
            })
            .then(data => {
                setBlogs(data)
            })
    }, []);

    return (
        <div className="home">
            { blogs && <BlogList blogs={blogs} title="All blogs!" handleDelete={handleDelete} />}
        </div>
    )
}

