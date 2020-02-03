import React, {useState} from 'react';
import {Redirect} from 'react-router-dom'
import { Button, Card, Input } from 'antd'
import { motion } from "framer-motion";
import { useStateValue } from '../StateProvider'

const Login = () => {
	const [{user}, dispatch] = useStateValue();
	const [username, setUsername] = useState('');

	const handeSubmit = () => {
		dispatch({
			type: 'LOGIN',
			user: username
		});
	};


	return user !== null ? <Redirect to="/"/> : (
		<div style={{
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			width: '100vw',
			height: '100vh'
		}}
		>
			<motion.div
			initial={{
				scale: 0,
				y: 200
			}}
			animate={{
				scale: 1,
				y: 0
			}}
			transition={{
				delay: 0.5,
				duration: 2,
				type: 'spring'
			}}
			>
				<Card title="Login">
					<Input
						type="text"
						value={username}
						onChange={e => setUsername(e.target.value)}
						placeholder="Username"
					/>
					<Button
						type="primary"
						icon="login"
						block={true}
						disabled={username.trim().length < 2}
						onClick={handeSubmit}
						style={{marginTop: 20}}
					>
						Login
					</Button>
				</Card>
			</motion.div>
		</div>
	)
		;
};

export default Login;