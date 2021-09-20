import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux"
import {allHomePosts} from '../../redux/asyncMethods/HomeGetAllPostMethod';
import { useParams } from 'react-router-dom';



const HomeAllPosts = () => {
    let {page} = useParams();
    if(page === undefined){
        page = 1
    }
    const {loading} = useSelector((state) => state.PostReducer)
    const {posts, count, perPage} = useSelector(state => state.FetchPosts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(allHomePosts(page))
    }, [])
    console.log("page",page)
    console.log("posts",posts)
    console.log("count", count)
    console.log("perPage", perPage)
    return (
        <div>
            
        </div>
    );
};

export default HomeAllPosts;