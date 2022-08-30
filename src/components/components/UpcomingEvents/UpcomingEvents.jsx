import './UpcomingEvents.css'
import Ucard from './UCard/Ucard'
import calendar from './calendar-days-solid.svg'

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
                <Ucard />
                <Ucard />
            </div>
        </div>

        </>
    )
}

export default UpcomingEvents