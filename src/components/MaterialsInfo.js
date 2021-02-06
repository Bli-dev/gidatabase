//REACT AND REDUX
import React from 'react';
import { useSelector } from 'react-redux';

//STYLES AND MOTION


//UTILITIES


const MaterialsInfo = () => {

    const { selectedEntityName, selectedItemName, selectedItemData } = useSelector((state) => state.currentActiveData)
    
    console.log(selectedItemData, selectedItemName)
    
    return (
        <div>
            
        </div>
    )
}
export default MaterialsInfo;