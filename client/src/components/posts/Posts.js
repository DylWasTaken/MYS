import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Spinner from '../layout/Spinner';
import {getPosts} from '../../actions/post';
import { profile_url } from 'gravatar';

const Posts = ({getPosts, post: {posts, loading}})=> {
    useEffect(()=> {
        getPosts();
    }, [getPosts]);
    return (
        <div>
           Under construction
        </div>
    )
}

Posts.propTypes = {
    getPosts: PropTypes.func.isRequired,
    posts: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    post: state.post
});

export default connect(mapStateToProps, {getPosts})(Posts);
