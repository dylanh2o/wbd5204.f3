import React from 'react';
import {Form, Input, Tooltip, Icon, Cascader, Select, Button} from 'antd';


const {TextArea} = Input;
const {Option} = Select;


const residences = [
	{
		value: 'Suisse',
		label: 'Suisse',
		children: [
			{
				value: 'Geneve',
				label: 'Genève',
				children: [
					{
						value: 'Geneve',
						label: 'Genève',
					},
					{
						value: 'Vernier',
						label: 'Vernier',
					},
				],
			},
			{
				value: 'Nyon',
				label: 'Nyon',
			},
		],

	},
	{
		value: 'France',
		label: 'France',
		children: [
			{
				value: 'Marseille',
				label: 'Marseille',
			},
			{
				value: 'Paris',
				label: 'Paris',
			},
		],
	}
];


class RegistrationForm extends React.Component {

	state = {
		confirmDirty: false,
		autoCompleteResult: [],
		value: '',
	};
	onChange = ({target: {value}}) => {
		this.setState({value});
	};
	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err, values) => {

			if (!err) {
				alert('Message envoyé', values);
			}
		});
	};

	if() {

	};

	render() {
		const {value} = this.state;
		const {getFieldDecorator} = this.props.form;


		const formItemLayout = {
			labelCol: {
				xs: {span: 24},
				sm: {span: 9},
			},
			wrapperCol: {
				xs: {span: 24},
				sm: {span: 15},
			},
		};
		const tailFormItemLayout = {
			wrapperCol: {
				xs: {
					span: 24,
					offset: 0,
				},
				sm: {
					span: 16,
					offset: 8,
				},
			},
		};
		const prefixSelector = getFieldDecorator('prefix', {
			initialValue: '41',
		})(
			<Select style={{width: 70}}>
				<Option value="41">+41</Option>
				<Option value="33">+33</Option>
			</Select>,
		);


		return (

			<Form {...formItemLayout} onSubmit={this.handleSubmit}>
				<Form.Item
					label={
						<span>
              Nom et Prénom&nbsp;
							<Tooltip title="Exemple: Marc Clinton">
                <Icon type="question-circle-o"/>
              </Tooltip>
            </span>
					}
				>
					{getFieldDecorator('nickname', {
						rules: [{required: true, message: 'Entrer votre nom et prénom', whitespace: true}],
					})(<Input/>)}
				</Form.Item>
				<Form.Item label="E-mail">
					{getFieldDecorator('email', {
						rules: [
							{
								type: 'email',
								message: 'Email invalide!',
							},
							{
								required: true,
								message: 'Entrer votre email',
							},
						],
					})(<Input/>)}
				</Form.Item>


				<Form.Item label="Résidence">
					{getFieldDecorator('residence', {
						initialValue: ['Suisse', 'Geneve', 'Geneve'],
						rules: [
							{type: 'array', required: true, message: 'Séléctionner son lieu de résidence'},
						],
					})(<Cascader options={residences}/>)}
				</Form.Item>
				<Form.Item label="Numero de téléphone">
					{getFieldDecorator('phone', {
						rules: [{required: true, message: 'Entrer votre numéro de téléphone'}],
					})(<Input addonBefore={prefixSelector} style={{width: '100%'}}/>)}
				</Form.Item>

				<Form.Item label="Message">
					{getFieldDecorator('Message', {
						rules: [
							{required: true, message: 'Enter un message', whitespace: true},
						],
					})(
						<TextArea
							value={value}
							onChange={this.onChange}
							placeholder="Entrer votre message"
							autoSize={{minRows: 3, maxRows: 15}}
						/>)}


				</Form.Item>

				<Form.Item {...tailFormItemLayout}>
					<Button type="primary" htmlType="submit">
						Envoyer un message
					</Button>
				</Form.Item>
			</Form>
		);
	}
}

const WrappedRegistrationForm = Form.create({name: 'register'})(RegistrationForm);

export default WrappedRegistrationForm;