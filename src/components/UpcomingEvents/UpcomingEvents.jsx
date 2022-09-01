import './UpcomingEvents.css'
import calendar from './calendar-days-solid.svg'
import AutoSwiperSection from '../Swiper/AutoSwiperSection'

function UpcomingEvents () {
    return (
        <>
        <div className="upcomings">
            <div className="upcomings-top">
                <p><img src={calendar} />Upcomig Events</p>
            <div> 
                <a href="#">THIS WEEK</a>
                <a href="#">THIS MONTH</a>

            </div>
        </div>
            <div className="upcomings-middle">
                <AutoSwiperSection />
            </div>
        </div>

        </>
    )
}

export default UpcomingEvents