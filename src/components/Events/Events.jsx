import './Events.css';
import bookmark from './bookmark-solid.svg'
import Swipersection from '../Swiper/SwiperSection/Swiper';

function Events() {
    return (
        <>
            <div className="events">
                <div className="events-top">
                    <p><img src={bookmark} />Featured Events</p>
                    {/* <div>
                        <button className="button1"><img src={arrowLeft} /></button>
                        <button className="button2"><img src={arrowRight} /></button>
                    </div> */}
                </div>
                <div className="events-middle">
                    <Swipersection />
                </div>
                <div className="events-bottom">
                    <p>NOT YOUR INTERESTED?</p>
                    <button>DISCOVERY EVENTS</button>
                </div>
            </div>

        </>
    )
}

export default Events;