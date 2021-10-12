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

                    
                    setAllPosts(data.map((post) => (
                        <div className="post">
                                {/* user */}
                                <div className="post__user">
                                    <h2 className="post__user--name">Lamasticot</h2>
                                    {post.user_id === userId && (
                                        <div>X</div>
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
                                    <p className="post__content--desc">Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.</p>
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

    


    

    return (
        <div className="accueil">
            <Navigation />
            {allPosts}
        </div>
    )
}

export default Accueil;