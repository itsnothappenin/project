import './Eventcard.css'
import rock from './rock.jpg'

function Eventcard () {
    return (
    <div className='eventcard'>
        <img src={rock}/>
        <div className='eventCardBottom'>
            <p className='bottom-p1'>Rock concert</p>
            <p className='bottom-p2'>45$</p>
            <p className='bottom-p3'>Party House Chicago, 345 str</p>
        </div>
    </div>
    )
}

export default Eventcard;