import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import Navbar from './Navbar';
import { Cryptocurrencies, News } from './';
import Loader from "./Loader";
import Footer from './Footer';
import vidbg from '../screen/mainbg.mp4'
import '../App.css'
const { Title } = Typography;

const Homepage = () => {
	const { data, isFetching } = useGetCryptosQuery(10);
	const globalStats = data ? (data.data ? data.data.stats : null) : null;

	if (isFetching) return <Loader />;

	return (
		<> 
		    <div className="app">
            <div className="navbar">
            <Navbar />
            </div>
            <div className="main">
            <div className="routes"></div>
		    <div className="homecont">
                <video src={vidbg} autoPlay loop muted/>
            </div>
		    <div className="anus">
			<Title style={{ fontSize: '9vh' }} className="heading">GloBaL StAts iT Is</Title>
			<Row>
				<Col span={12}>
					<Statistic title="Total Cryptocurrencies" value={globalStats.total} />
				</Col>
				<Col span={12}>
					<Statistic
						title="Total Exchanges"
						value={millify(globalStats.totalExchanges)}
					/>
				</Col>
				<Col span={12}>
					<Statistic
						title="Total Market Cap"
						value={millify(globalStats.totalMarketCap)}
					/>
				</Col>
				<Col span={12}>
					<Statistic
						title="Total 24h Volume"
						value={millify(globalStats.total24hVolume)}
					/>
				</Col>
				<Col span={12}>
					<Statistic title="Total Market" value={millify(globalStats.totalMarkets)} />
				</Col>
			</Row>
			<div className="home-heading-container">
				<Title level={2} className="home-title">
					Top 10 Cryptocurrencies in the world
				</Title>
				<Title level={3} className="show-more">
					<Link to="/log/cryptocurrencies">More To Explore Bro...</Link>
				</Title>
			</div>
			<Cryptocurrencies simplified />
			<div className="home-heading-container">
				<Title level={2} className="home-title">
					Latest Crypto News
				</Title>
				<Title level={3} className="news" style={{marginTop:'0'}}>
					<Link to="/log/news">More To Explore Bro...</Link>
				</Title>
			</div>
			<News simplified/>
		    </div>   
			</div>
        </div>
        <Footer />
        {/* </div> */}
		</>
	);
};

export default Homepage;
