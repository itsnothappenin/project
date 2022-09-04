import './index.css'
import Eventcard from '../Eventcard/Eventcard'

let array = [ 1,2,3,4,5,6,7,8,9,0,1,1]

function EventPage() {
    return (
    <>
        <div className='title'>
            <h1>All Events</h1>
        </div>
        <div className='filtering'>
            <div className='venue'>
                <select name="venue" id="venue" placeholder='Choose venue'>
                    <option defaultValue="" className='none'>Choose venue</option>                    
                    <option value="1">Elektra</option>
                    <option value="2">Heyder eliyev sarayi</option>
                    <option value="3">Heyder eliev merkezi</option>
                    <option value="4">Yasil teatr</option>
                </select>
            </div>
            <div className='date'>
                <input type="date" placeholder="Choose date" /*onFocus="(this.type='date')"*/ />            
            </div>
            <div className='price'>
                <label htmlFor="price">Price from 0 to 600</label>
                <input type="range" id="price" name="price" min="0" max="600" />
            </div>
        </div>
        <div className='allEvents'>
                {/* {Eventcard.map((e) =>{
                    return (
                        <Eventcard />
                    )
                })
            } */}
        </div>
    </>
    )
}

export default EventPage