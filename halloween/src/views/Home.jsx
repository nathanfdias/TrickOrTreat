import '../styles/Home.css';

const Home = (props) => {
    return(
        <div className="banner-container">
            <div className='banner-content'>
                <div className='banner-title'>
                    <h1>Halloween</h1>
                </div>
                <div className='banner-description'>
                    <p>Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
                </div>
                <div className='banner-button'>
                    <a href="#">LOGIN</a>
                    <a href="#">OFFERS</a>
                </div>
            </div>
        </div>
    );
}

export default Home;