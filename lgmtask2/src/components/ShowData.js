import React,{Fragment} from 'react'
import './ShowData.css'
const ShowData= (props) =>{
    const userData = props.user.map(item => {
        return(
            <div key= {item.id} className="container">
                    <img className ="user-img" src={item.avatar} alt={item.id} />
                    <br />
                    <div className="item">
                        <p>First Name: {item.first_name}</p>
                        <p>Last Name: {item.last_name}</p>
                        <p>Email: {item.email}</p>
                    </div>
            </div>
        )
    })
    return(
        <Fragment>
          {props.user.length ?  <div>{userData}</div>: <div className="loader">{props.load}</div>  }
        </Fragment>
    )
}
export default ShowData
