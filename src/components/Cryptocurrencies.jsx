import React, { useState, useEffect } from 'react';
import { Row, Col, Input, Card } from 'antd';
import millify from 'millify';
import Loader from "./Loader";
import vidbg from '../screen/mainbg.mp4'
import { useGetCryptosQuery } from '../services/cryptoApi';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
const Cryptocurrencies = ({ simplified }) => {
	const count = simplified ? 10 : 100;

	const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
	const initialState = cryptosList ? (cryptosList.data ? cryptosList.data.coins : []) : [];
	const [cryptos, setCryptos] = useState(initialState);
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		const searchedCryptos = cryptosList
			? cryptosList.data
				? cryptosList.data.coins
				: null
			: null;

		const filteredData = searchedCryptos
			? searchedCryptos.filter((coin) =>
					coin.name.toLowerCase().includes(searchTerm.toLowerCase())
			  )
			: [];
		setCryptos(filteredData);
	}, [searchTerm, cryptosList]);

	if (isFetching) return <Loader />;

	return (
		<>
		<div style={{paddingRight:'3.5%',paddingLeft:'3.5%'}}>
		{!simplified && (
			    <>
				<Navbar/>
				<div className="homecont mkt" >
                <video src={vidbg} autoPlay loop muted/>
                </div>
				<div className="search-crypto">
					<Input
						placeholder="Search Crypto Currency"
						onChange={(e) => setSearchTerm(e.target.value)}
						value={searchTerm}
					/>
				</div>
				</>
			)}
			<div className='hum'>
			<Row gutter={[32, 32]} className="crypto-card-container">
				{cryptos &&
					cryptos.map((currency) => (
						<Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.uuid}>
							<Link to={`/log/crypto/${currency.uuid}`}>
								<Card
									title={`${currency.rank}. ${currency.name}`}
									extra={<img className="crypto-image" alt="" src={currency.iconUrl} />}
									hoverable
									style={{borderRadius: '10px', overflow: 'hidden',height:'230px',display:'flex',flexDirection:'column',padding:'10px'}}
								>
									<p>Price: ${millify(currency.price)}</p>
									<p>Market Cap: {millify(currency.marketCap)}</p>
									<p>Daily Change: {millify(currency.change)}%</p>
								</Card>
							</Link>
						</Col>
					))}
			</Row>
			</div>
		</div>
		{!simplified &&(<Footer/>)}
		</>
	);
};

export default Cryptocurrencies;