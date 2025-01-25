import React from 'react';
import '../css/Department.css';

const Department = ({ department, onDept_Name }) => {
    return (
        <div>
            <ol>
                {department.map((item, index) => {
                    return (
                        <li key={index}>
                            <button 
                                className='dept_btn'
                                onClick={() => onDept_Name(item)}>
                                {item}
                            </button>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
};

export default Department;
