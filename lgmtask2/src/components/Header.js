import React,{Fragment, useState}from 'react'
import ShowData from './ShowData';
import LoadingSpinner from './UI/LoadingSpinner';
import './Header.css'

const Header= () =>{
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState('');
    const getDataHandler = () =>{
        fetch('https://reqres.in/api/users?page=1',{
            method: 'GET'
        }).then(resp => resp.json())
        .then(data => setUser(data.data))
        .catch(err => console.log(err));
        setLoading(<LoadingSpinner />);
    }
    return(
        <Fragment>
            <nav>
                <ul>
                    <li className="brand-name">LetsGrowMore</li>
                    <br />
                    <button onClick={getDataHandler}>User Data</button>
                </ul>
            </nav>
            <section>
                <ShowData user={user} load={loading}/>
            </section>
        </Fragment>
    )
}
export default Header
