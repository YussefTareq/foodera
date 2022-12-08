import Data from './Data';


function Cards() {
    return Data.map((item) => {
        return (
            <div className='col-md-4 fot'>
                <img src={
                    item.img
                } alt=''/>
                <div className='content'>
                    <div className='title'>
                        {
                        item.title
                    }</div>
                    <div className='time'>
                        {
                        item.time
                    } </div>
                    <div className='price'>
                        {
                        item.price
                    } <span>{item.sale}</span> </div>
                    <hr/>
                    <button ><a>Order Now</a></button>
                </div>

            </div>
        )
    })
}

export default Cards;
