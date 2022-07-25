import"./body.css"
import {faApple} from '@fortawesome/free-brands-svg-icons';
import {faEye, faDownload, faPlay, faLink, faPen, faPlus, faMessage, faUser} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Body = () => {
    return (
        <div className="body">
            <div className="cardBody">
                <div className="cardDesc">
                    <div className="cardIcon">
                        <FontAwesomeIcon icon={faApple} className="apple"/>
                        <FontAwesomeIcon icon={faEye} className="eye"/>
                        <FontAwesomeIcon icon={faPen} className="pen"/>
                        <FontAwesomeIcon icon={faLink} className="link"/>
                        <FontAwesomeIcon icon={faPlay} className="play"/>
                        <FontAwesomeIcon icon={faDownload} className="eye"/>
                    </div>

                    <div className="cardUserr">
                        <FontAwesomeIcon icon={faUser} className="user"/>
                        <h2>Adedokun Faith</h2>
                        <p>Frontend Developer</p>

                        <div className="btn">
                            <button className="btnPrimaryy">Fellow <FontAwesomeIcon icon={faPlus} className="icon" /></button>
                            <button className="btnDefaultt">Message <FontAwesomeIcon icon={faMessage} className="icon"/></button>
                        </div>
                    </div>
                    
                </div>

                <div className="cardDesc">
                    <div className="cardImg">
                        <img src="/image/music.jpg" alt="" className="cardImg" />
                    </div>

                    <div className="">
                        <FontAwesomeIcon icon={faUser} className="userr" /><span className="userrName"> Meagan Fisher</span> <span><FontAwesomeIcon icon={faApple} className="userApple" /></span> 
                    </div>

                    <div className="cardUse">
                        <div>
                            <FontAwesomeIcon icon={faUser}  className="userIcon"/><span className="userIconName"> <b> John Doe </b></span> <p className="userIconDesc"> UI/UX Designer </p>
                        </div>
                    </div>
                    
                    
                </div>

                <div className="cardDesc">
                    <div className="cardDescc">
                        <div className="cardDesccHead">
                            <h2> Login into your account </h2>
                            <p>Don't have an account yet? <span className="create">Create New</span></p>
                        </div>

                        <div className="form">
                            <input type="email" placeholder=" johndoe@gmail.com" className="email"/><br /><br />
                    
                            <input type="password" placeholder=" Password" /><br/>
                
                            <button className="login"> Login </button>
                        </div>
                            
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body