import React from 'react';
import Page from "./page";
import { Card, Icon, Avatar } from 'antd';
import './Blog.css';
const { Meta } = Card;
const Blog = () => (
	<Page>
		<h1>Blog</h1>
		<div class="CadreBlog">
		<Card
			style={{ width: 300 }}
			actions={[

				<Icon type="edit" key="edit" />,
				<Icon type="link" key="link" />,
				<Icon type="ellipsis" key="ellipsis" />,
			]}
		>
			<Meta
				avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
				title="Question ours"
				description="Pour ou contre les ours ?"
			/>
		</Card>,
</div>
	</Page>
);

export default Blog;