import React, { useEffect, useState } from "react";
import Navigation from "../Components/nav";
import Axios from "axios";
import Post from "../Components/post";
import { useHistory } from "react-router";

const Accueil = () => {

    const [allPosts,setAllPosts] = useState(null);

    const url = 'http://localhost:3001/posts';
    let data = null;
    const historique = useHistory();
    const token = localStorage.getItem('token');

    useEffect(() => {

        if(!token) {
            historique.push('/error');
        } else {

            Axios.get(url, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then((res) => {
                    data = res.data.data;
                    const userId = res.data.userId;
                    console.log('on est bien dans la map')

                    
                    setAllPosts(data.map((post) => (
                        <div className="post">
                                {/* user */}
                                <div className="post__user">
                                    <div className="user_container">
                                        <img src={post.User.imageUrl} className="user_pdp" />
                                        <h2 className="user_name">{post.User.firstname} {post.User.lastname}</h2>
                                    </div>
                                    {post.user_id === userId && (
                                        <button className="post_delete" value={post.id} onClick={handleDelete}>x</button>
                                    )}
                                </div>
                                {/* contenu */}
                                <div className="post__content"> 
                                    <h1 className="post__content--title">{post.title}</h1>
                                    {post.imageUrl != null && (
                                        <div className="post__content--img">
                                            <img src={post.imageUrl} className="img_accueil"/>
                                        </div>
                                    )}
                                    <p className="post__content--desc">{post.description}</p>
                                </div>
                                {/* likes */}
                                <div className="post__likes">
                                    <i class="far fa-heart"></i>
                                    <p className="post__likes--p">X likes</p>
                                    {post.title}
                                </div>
                            </div>
                    ))) 
                })
                .catch((err) => err);
        }
    },[]);

    const handleDelete = (e) => {
        const postId = e.target.value;
        Axios.delete(url, {params: {foo: 'bar'}})
            .then(() => console.log('post correctement supprimer'))
            .catch((err) => console.log(err));
    }

    


    

    return (
        <div className="accueil">
            <Navigation />
            {allPosts}
        </div>
    )
}

export default Accueil;