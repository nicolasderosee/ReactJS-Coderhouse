export const Item = ({ item }) => (
    <div className="card">
        <img className="card-image" src={item.image} alt="product image"/>
        <div className="card-body">
            <h3 className="card-title">
                {item.title}
            </h3>
            <div className="card-bottom-content">
                <div className="bottom-header">
                    <p className="card-description">
                        {item.description}
                    </p>
                    <p className="card-price">
                        {item.price}
                    </p>
                </div>
                <p className="card-extra-descripton">
                    {item.extra}
                </p>
            </div>
        </div>
    </div>
);