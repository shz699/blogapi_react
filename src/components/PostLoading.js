import React from 'react';
import Posts from './Posts';

function PostLoading({ isLoading, posts }) {
		if (!isLoading) return <Posts posts={posts} />;
		return (
			<p style={{ fontSize: '25px' }}>
				We are waiting for the data to load!...
			</p>
		);
}

export default PostLoading;