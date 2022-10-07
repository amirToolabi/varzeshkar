import React from 'react'
import { useDispatch } from 'react-redux';
import { golist } from '../../redux/actions/ListAction';




const Shadow = () => {

    const dispatch = useDispatch()

    return ( 
        <>
            <div className="shadow" onClick={()=>dispatch(golist()) }>

            </div>
        </>
     );
}
 
export default Shadow;