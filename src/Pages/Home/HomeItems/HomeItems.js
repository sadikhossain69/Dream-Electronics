import './HomeItems.css'
import HomeItem from '../HomeItem/HomeItem';
import useHomeItem from '../../../hooks/useHomeItem';

const HomeItems = () => {

    const [items, setItems] = useHomeItem()


    return (
        <>
            {/* <div className=""> */}
                <div className='text-center container'>
                    <h2 className='' >Inventory Items {items.length} </h2>
                    <div className="row ">
                        {
                            items.slice(0, 6).map(item => <HomeItem
                                key={item._id}
                                item={item}
                            />)
                        }
                    </div>
                </div>

            {/* </div> */}
        </>
    );
};

export default HomeItems;