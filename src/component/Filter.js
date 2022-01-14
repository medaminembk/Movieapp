import React, { useState } from 'react'

const Filter = ({ title, rate }) => {
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
                onChange={(e) => {
                    setFilterParam(e.target.value);
                }}
                className="custom-select"
                aria-label="Filter By Tile">
                <option value="All">Filter By Tile</option>
                <option value="Africa">Africa</option>
                <option value="Americas">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
            <span className="focus"></span>
            <select
               
                onChange={(e) => {
                    setFilterParam(e.target.value);
                }}
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
