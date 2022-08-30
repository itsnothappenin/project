import './Ucard.css'
import farmer from './farmer.jpg'
import eye from './eye-solid.svg'

function Ucard () {
    return (
    <div className='ucard'>
        <img src={farmer}/>
        <div className='UCardBottom'>
            <p className='bottom-p1'>Farmer's Market</p>
            <p className='bottom-p2'>25$ - 75$</p>
            <div className='event-view'>
                <p className='bottom-p3'>Event.</p>
                <div>
                    <img className='view' src={eye}/>
                    <span>674</span>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Ucard;