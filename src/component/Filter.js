import React, { useState } from 'react'

const Filter = ({ title, rate , filterrating, filtertitle}) => {
    const [filterParam, setFilterParam] = useState(["All"]);
    const valueratee=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <div>
            <select
                /*
                // here we create a basic select input
                // we set the value to the selected value
                // and update the setFilterParam() state every time onChange is called
                */
                onChange={filtertitle}
                className="custom-select"
                aria-label="Filter By Tile">
                <option value="All">Filter By Tile</option>
                <option value="Morbius">Morbius</option>
                <option value="Americas">America</option>
                <option value="Asia">Asia</option>
              
            </select>
            <span className="focus"></span>
            <select
               
                onChange={filterrating}
                className="custom-select"
                aria-label="Filter By Rate">
                <option value="All">Filter By Rate</option>
                {valueratee.map((item, key)=>{
                    return <option value={item} key={key}>{item}</option>
                })}

            </select>
            <span className="focus"></span>
        </div>
    )
}

export default Filter
