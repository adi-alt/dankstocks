import React, { useState } from 'react';
import { Select, Typography, Col, Row, Avatar, Card } from 'antd';
import moment from 'moment';
import vidbg from '../screen/mainbg.mp4'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import { useGetCryptosQuery } from '../services/cryptoApi';
import Loader from './Loader';
import Footer from './Footer';
import Navbar from './Navbar';
import Lottie from 'lottie-react';
import Icon from '../images/Animation - 1703594361924.json'
import '../App.css';
const { Text, Title } = Typography;
const { Option } = Select;
const demoImg = 'https://pokatim.ru/uploads/posts/2020-12/1607934252_6-2.jpg';

const News = ({ simplified }) => {
	const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
	const { data: cryptoNews } = useGetCryptoNewsQuery({
		newsCategory,
		count: simplified ? 6 : 12,
	});
	const { data } = useGetCryptosQuery(100);
	const coins = data ? (data.data ? data.data.coins : null) : null;

	if (!cryptoNews || !cryptoNews.value) {
		return <>
		<Navbar/>
		<video src={vidbg} autoPlay loop muted/>
		<div className="meow" >
		<Lottie animationData={Icon} style={{width:'700px'}}/>
		<h1>
		sorry for the technical error we will comeback soon 
		</h1>
		</div>
		<div className='iyk' style={{position:'absolute',bottom:'-32.7%'}}>
		<Footer/>
		</div>
		</>
		
	}
		return (
			<>
			<div style={{paddingRight:'3.5%',paddingLeft:'3.5%',paddingTop:'2%'}}>
	   
	
			<Row gutter={[24, 24]}>
				{!simplified && (
						<>
						<Navbar/>
						<div className="homecont mkt" >
						<video src={vidbg} autoPlay loop muted/>
						</div>
					<Col span={24}>
						<Select
							showSearch
							className="select-news"
							placeholder="Select a Crypto"
							optionFilterProp="children"
							onChange={(value) => setNewsCategory(value)}
							filterOption={(input, option) =>
								option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
							}
							style={{zIndex:'200'}}
						>
							<Option value="Cryptocurrency">Cryptocurrency</Option>
							{coins &&
								coins.map((coin, index) => (
									<Option value={coin.name} key={index}>
										{coin.name}
									</Option>
								))}
						</Select>
					</Col>
					</>
				)}
				{
					cryptoNews.value.map((news, index) => (
							<Col xs={24} sm={12} lg={8} key={index}>
							<Card hoverable className="news-card" style={{borderRadius: '10px', overflow: 'hidden'}}>
								<a href={news.url} target="_blank" rel="noopener noreferrer">
									<div className="news-image-container">
										<Title className="news-title" level={4}>
											{news.name}
										</Title>
										<img
											style={{ maxWidth: '200px', maxHeight: '100px' }}
											src={news.image ? news.image.thumbnail ? news.image.thumbnail.contentUrl : demoImg: demoImg}
											alt=""
										/>
									</div>
									<p>
										{news.description.length > 100
											? `${news.description.substring(0, 100)}...`
											: news.description}
									</p>
									<div className="provider-container">
										<div>
											<Avatar
												src={
													news.provider[0]
														? news.provider[0].image
															? news.provider[0].image.thumbnail.contentUrl
															: demoImg
														: demoImg
												}
												alt=""
											/>
											<Text className="news-provider">{news.provider[0].name}</Text>
										</div>
										<Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
									</div>
								</a>
							</Card>
						</Col>
				))}
			</Row>
			</div>
			{!simplified &&(<Footer/>)}
			</>
		);

	
};

export default News;