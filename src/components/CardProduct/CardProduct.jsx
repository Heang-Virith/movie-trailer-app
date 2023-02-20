import './CardProduct.scss'
export default function CardProduct({ image, name }) {
    return (
        <div className='card'>
            <div className='card-cover'>
                <img src={ image } alt="logo" />
            </div>
            <div className='card-title-container'>
                <div className='card-title'>
                    { name }
                </div>
            </div>
        </div>
    )
}