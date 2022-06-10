import React from 'react';
import Link from 'next/link';
import Card from './Card';

const Bloglist = ({blogs}) => {
    if(!blogs) return;
	return (
		<>
		{blogs.map((blog, index) => <Card id={index} source={blog.urlToImage} title={blog.title} link={blog.urlToImage} content={blog.content}/>)}
		</>
	);
};

export default Bloglist