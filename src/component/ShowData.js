import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { CSVLink } from 'react-csv';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

const ShowData = () => {
    const [userData, setUserData] = useContext(UserContext);
    const [allchecked, setchecked] = useState(false);
    const [singleChecked, setSingleChecked] = useState(0);
    const [checkedList, setischecked] = useState([]);
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate('/');
    }

    const headers = [
        { label: 'name', key: 'name' },
        { label: 'password', key: 'password' },
        { label: 'phone', key: 'phone' },
        { label: 'email', key: 'email' }
    ];

    const csvList = {
        filename: 'userList.csv',
        headers: headers,
        data: userData
    }


    const handleAllChecked = () => {
        setchecked(!allchecked);
    }

    const handleAllDelete = () => {
        setUserData([]);
    }
    const handleChecked = (e) => {
        const { value, checked } = e.target;

        if (checked) {
            setSingleChecked(singleChecked + 1);
            console.log("checked value= ", value);
        }
        else {
            setSingleChecked(singleChecked - 1);
            //setischecked(ischecked.filter(e => e.value === value));
            console.log("unchecked", value);
        }

    }
    return (
        <div className='w-75 mx-auto mt-5'>
            <hr />
            <div className='d-flex justify-content-between my-2'>
                <button className='btn btn-light' onClick={handleGoBack}>
                    <FontAwesomeIcon icon={faArrowLeftLong} size='xl' /></button>
                <CSVLink {...csvList} className='text-decoration-none btn btn-primary'>Export</CSVLink>
            </div>

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col"><input type='checkbox' onChange={handleAllChecked}></input></th>
                        <th scope="col">Username</th>
                        <th scope="col">Password</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        //console.log(dataList.length)
                        userData.map((data, index) =>
                            <tr key={index}>
                                <td><input type='checkbox' value={index} checked={data.ischecked} onChange={(e) => handleChecked(e)}></input></td>
                                <td>{data.name}</td>
                                <td>{data.password}</td>
                                <td>{data.phone}</td>
                                <td>{data.email}</td>
                            </tr>
                        )
                    }


                </tbody>
            </table>
            {
                allchecked ? <button className='btn btn-danger' onClick={handleAllDelete}>Delete All</button> : singleChecked >= 1 ? <button className='btn btn-danger'>Detele</button> : <button className='btn btn-light' disabled>Detele</button>
            }

        </div>
    );
};

export default ShowData;