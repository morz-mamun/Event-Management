
import PropTypes from 'prop-types';

const Gallery = ({ item }) => {

    const { name, img } = item
    return (
        <div className="card border-2 space-y-3 pt-3 card-compact bg-slate-300 shadow-xl ">
            <h2 className=" text-xl font-bold text-center">{name}</h2>
            <figure><img src={img} /></figure>
            <div className="card-body">

                <div className="card-actions">
                    <div className="rating gap-1">
                        <input type="radio" name="rating-3" className="mask mask-heart bg-red-600" />
                        <input type="radio" name="rating-3" className="mask mask-heart bg-red-600" checked />
                        <input type="radio" name="rating-3" className="mask mask-heart bg-red-600" />
                        <input type="radio" name="rating-3" className="mask mask-heart bg-black" />
                        <input type="radio" name="rating-3" className="mask mask-heart bg-black" />
                    </div>
                </div>
            </div>
        </div>
    );
};

Gallery.propTypes = {

};

export default Gallery;