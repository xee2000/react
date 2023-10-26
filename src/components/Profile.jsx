export default function Profile({image, name, title}){
    return (
      
    <div class="profile">

    <img class="photo"  src={image} alt="avatar"/>
    <span class="tag">New</span>
    <h1>{name}</h1>
    <p>{title}</p>  </div>)
}
