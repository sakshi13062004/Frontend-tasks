import React from 'react'
import '../App.css'
const GridBox = () => {

    //    const gridItems = Array.from({ length: 8 }, (_, i) => i + 1);
    const gridItems = [];
    for (let i = 1; i <= 8; i++) {
        gridItems.push(i);
    }
    
return (
    <div className="grid-container">
        {gridItems.map((num) => (
            <div className={`box box-${num}`} key={num}>
                {num}
            </div>
        ))}
    </div>
);
  
  
}

export default GridBox
