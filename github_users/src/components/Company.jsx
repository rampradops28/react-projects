import React from 'react';
import Department from './Department';
import '../css/Company.css';

const Company = (props) => {
    const { companyName = "Unknown Company", details = "Empty", department, onComp_selection } = props;

    return (
        <div className='comp_div'>
            <h2 className="comp_name">Company name: <span className='span'>{companyName}</span></h2>
            <p>{details}</p>
            <button 
                className='btn' 
                onClick={() => { onComp_selection(companyName) }}>
                Search {companyName}
            </button>
            <Department 
                department={department}
                onDept_Name={(department) => {
                    onComp_selection(`${companyName} - ${department}`)
                }}
            />
        </div>
    );
};

export default Company;
