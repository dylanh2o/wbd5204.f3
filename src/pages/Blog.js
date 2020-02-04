import React from 'react';
import Page from "./page";
import { Card, Icon, Avatar, Tooltip, List, Comment } from 'antd';
import './Blog.css';

import moment from 'moment';

const { Meta } = Card;
const data = [
	{
		actions: [<span key="comment-list-reply-to-0">Reply to</span>],
		author: 'Loris bear',
		avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
		content: (
			<p>
				Je suis pour les ours car il faut briser les stéréotypes.
			</p>
		),
		datetime: (
			<Tooltip
				title={moment()
					.subtract(1, 'days')
					.format('YYYY-MM-DD HH:mm:ss')}
			>
        <span>
          {moment()
	          .subtract(1, 'days')
	          .fromNow()}
        </span>
			</Tooltip>
		),
	},
	{
		actions: [<span key="comment-list-reply-to-0">Reply to</span>],
		author: 'Winnie the poo',
		avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
		content: (
			<p>
				je suis contre les ours car ils sont capables de dévorer tout le miel et ne rien laisser à personne.
			</p>
		),
		datetime: (
			<Tooltip
				title={moment()
					.subtract(2, 'days')
					.format('YYYY-MM-DD HH:mm:ss')}
			>
        <span>
          {moment()
	          .subtract(2, 'days')
	          .fromNow()}
        </span>
			</Tooltip>
		),
	},
];
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
		</Card>
			<List
				className="comment-list"
				header={`${data.length} replies`}
				itemLayout="horizontal"
				dataSource={data}
				renderItem={item => (
					<li>
						<Comment
							actions={item.actions}
							author={item.author}
							avatar={item.avatar}
							content={item.content}
							datetime={item.datetime}
						/>
					</li>
				)}
			/>,
</div>
	</Page>
);

export default Blog;