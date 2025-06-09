export default function NetflixLargeCard({selectedCard, handleCloseModel, cardData}) {
    const {img, minImg, catergories, description} = cardData;

    if (!selectedCard) return null;

    return (
        <div className="cards-cnt">
            <div className="netflix-card">
                <div className="card">
                    <div className="thumb-cnt">
                        <img className='thumbnail' src={img} alt="stranger things" />
                        <div className="thumb-bg"></div>
                        <img className="min-thumb" src={minImg} />
                    </div>
                    <div className="categories">
                        {catergories.map((genre, index) => (
                            <div key={index} className="cate1">{genre}</div>
                        ))}
                    </div>
                    <p className="card-detail">
                        {description}
                    </p>
                    <button className="get-started">Watch Now</button>
                </div>
                <button className="close-btn" onClick={handleCloseModel}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 24 24" width="24" height="24" data-icon="XStandard" aria-hidden="true">
                        <path fill="currentColor" d="M10.5858 12L2.29291 3.70706L3.70712 2.29285L12 10.5857L20.2929 2.29285L21.7071 3.70706L13.4142 12L21.7071 20.2928L20.2929 21.7071L12 13.4142L3.70712 21.7071L2.29291 20.2928L10.5858 12Z" clipRule="evenodd" fillRule="evenodd"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
}