import PropTypes from "prop-types"
const userData = [
  {
    name:"Jack Sparrow",
    city:"New York", 
    description:"Front End Developer",
    skills:["UI/UX","Front End Development","HTML","CSS","JavaScript","React","Node"], 
    online:true,
    profile:"src/images/img1.jpg"
  },
  {
    name:"Robert",
    city:"California", 
    description:"Web Developer",
    skills:["Vlogging","Web Development","HTML","CSS","JavaScript","React","Angular"], 
    online:false,
    profile:"src/images/img2.jpg"
  },
  {
    name:"Nancy",
    city:"Italy", 
    description:"Backend Developer",
    skills:["C","C++","Java Programming","Python"," Mysql","MangoDB","Node"], 
    online:true,
    profile:"src/images/img3.jpg"
  }
];
function User(props){
    return(
      <div className="card-container">
        <span className={props.online ?"pro online" : "pro offline"}>{props.online?"ONLINE":"OFFLINE"}</span>
        <img src={props.profile} className="img" alt="user-img" /> 
        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <p>{props.description}</p>
        <div className="buttons">
            <button className="btn">Message</button>
            <button className="btn outline">Following</button>
        </div>
        <div className="skills">
            <h6>Skills</h6>
            <ul>
                {/* <li>UI/UX</li>
                <li>Front End Development</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Node</li> */}
                {props.skills.map((skills,ind) =>(
                  <li key={ind}>{skills}</li>
                ))}
            </ul>
        </div>
      </div>
  
    );
}
   
  
const UserCard = () => {
   
  return (
    <>
    {userData.map((user,ind)=>(
      <User key={ind} 
        name={user.name}
        city={user.city}
        description={user.description}
        skills={user.skills}
        online={user.online}
        profile={user.profile}
      />
    ))}
    </>
  )
};

export default UserCard

User.PropTypes = {
  name:PropTypes.string.isRequired,
  city:PropTypes.string.isRequired,
  description:PropTypes.string.isRequired,
  skills:PropTypes.arrayOf(PropTypes.string).isRequired,
  online:PropTypes.bool.isRequired,
  profile:PropTypes.string.isRequired
}