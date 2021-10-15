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
        console.log('bonjour');

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

                    
                    setAllPosts(data.map((post) => (
                        <div className="post">
                                {/* user */}
                                <div className="post__user">
                                    <div className="user_container">
                                        {post.user.imageUrl ? (<img src={post.user.imageUrl} className="user_pdp" />) : (<img src={'http://localhost:3001/images/defaultskin.png'} className="user_pdp" />)}
                                        <h2 className="user_name">{post.user.firstname} {post.user.lastname}</h2>
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
                                    <i class="far fa-heart" id={`${post.id}heart`} onClick={handleLike}></i>
                                    <span id={`${post.id}span`}>{post.likes}</span>
                                    {/* <p className={post.id} id={post.id}> likes</p> */}
                                </div>
                            </div>
                    ))) 
                })
                .catch((err) => err);
        }
    },[]);

    const handleDelete = (e) => {
        const postId = e.target.value;
        Axios.delete(url, { data: { postId: postId } })
            .then(() => {
                console.log('post correctement supprimer');
                window.location.reload();})
            .catch((err) => console.log(err));
    }

    const handleLike = (e) => {
        const postId = e.target.id;
        postId.split('s');
        const id = postId[0];
        console.log(id);
        const token = localStorage.getItem('token');

        Axios.put(url, { postId: id }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(() => {
                Axios.get('http://localhost:3001/post', { params: { id: id, token: token } })
                    .then((data) => {
                        const spanName = `${id}span`;
                        const span = document.getElementById(spanName);
                        const likes = data.data.data.likes;
                        span.innerHTML = likes;
                        
                        const userid = data.data.userId;
                        const uiString = userid.toString();
                        const testArray = data.data.data.usersLiked;
                        let arrayString = testArray.split('-');
                        let indexTest = arrayString.indexOf(uiString);
                        console.log(indexTest);

                        if(indexTest == -1) {
                            const heart = document.getElementById(postId);
                            heart.style.color = 'black';
                        } else {
                            const heart = document.getElementById(postId);
                            heart.style.color = 'red';
                        }

                    })
                    .catch((err) => console.log(err))
            })
    }

    


    

    return (
        <div className="accueil">
            <Navigation />
            {allPosts}
        </div>
    )
}

export default Accueil;