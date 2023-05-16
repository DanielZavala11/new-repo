import React, { useState, useEffect } from  'react'
import axios from 'axios'

/*
function Data() {
    const [loading, setLoading] = useState(false)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const loadPost = async () => {

            // Till the data is fetch using API
            // the Loading pade will show.
            setLoading(true)

            // Await make wait until that 
            // promise settles and return its result
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts/')

            //After fetching data stored it in posts state.
            setPosts(response.data)

            // Closed the loading page
            setLoading(false) 
        }

        //Call the function
        loadPost()
    },  [])
    return (
        <>
            <div className='App'>
                {loading ? (
                    <h4>Loading...</h4>) :
                    (posts.map((item) => 
                        // Presently we only fetch
                        // title from the API
                        <h4>{item.title}</h4>))
                }
            </div>
        </>
    )
}
*/

const Data = () => {
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    
    const addPosts =  async (title, body) => {
        await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: body,
                userId: Math.random().toString(36).slice(2),
            }),
            headers: {
                'Content-type': 'application/json: charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((data) => {
            setPosts((posts) => [data, ...posts]);
            setTitle('');
            setBody('');
        })
        .catch((err) => {
            console.log(err.message);
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addPosts(title, body);
    };

    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
           .then((response => response.json()))
           .then((data) => {
              console.log(data);
              setPosts(data);
           })
           .catch((err) => {
            console.log(err.message);
           });
    }, []);
    
    const deletePost = async (id) => {
        await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
        }).then((response) => {
            if(response.status === 200) {
                setPosts(
                    posts.filter((post) => {
                        return post.id !== id;
                    })
                    );
            } else {
                return;
            }
        });
    };

    return (
       // ... consume here
       <div className="app">
        <div className="add-post-container">
            <form onSubmit={handleSubmit}>
                <input type="text" className="form control" value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea name="" className="form-control" id="" cols="10" rows="8" value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <button type="submit">Add Post</button>
            </form>
        </div>
       
      <div className="posts-container">
        {posts.map((post) => {
            return (
                <div className="post-card" key={post.id}>
                    <h2 className="post-title">{post.title}</h2>
                    <p className="post-body">{post.body}</p>
                    <div className="button">
                        <div className="delete-btn" onClick={() => deletePost(post.id)}>Delete</div>
                        </div>
                    </div>
            );
        })}
      </div>
    
      </div>
    );
};

export default Data;