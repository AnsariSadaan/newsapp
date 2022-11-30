import React from 'react'

const NewsItems = (props) => {
        const { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div className='my-3'>
                <div className="card">
                <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'}}>
                    <span className="badge rounded-pill bg-danger" style={{left: '90%' , zIndex: '1'}}>{source}</span>
                </div>
                    <img src={!imageUrl ? "https://images.livemint.com/img/2022/10/12/600x338/europa_a-sixteen_nine_1665591870041_1665591879672_1665591879672.webp" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
}

export default NewsItems


//5174d157530741e897a0c026fbea4df6