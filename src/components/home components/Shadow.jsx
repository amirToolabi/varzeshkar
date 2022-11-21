import React from 'react'

import "../../component style/ShadowStyle.css"


import { useDispatch } from 'react-redux';
import { golist } from '../../redux/actions/ListAction';




const Shadow = () => {

    const dispatch = useDispatch()

    return (
        <>
            <div className="shadow" onClick={() => dispatch(golist())}>

            </div>
        </>
    );
}

export default Shadow;