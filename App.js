import{useState}from"react";
import "./App.css";


export default function App() {
  const user = [
    
      {
        name: "MASTER",
        pic:
          "https://images-na.ssl-images-amazon.com/images/I/81QGFhvq-tL._RI_.jpg",
        summary:
        "Troubled alcoholic teacher JD is sent to teach at a juvenile reform school.But when he realises a dangerous criminal is using his students to cover up his crimes,JD sets out to stop him. Strong violence, drug misuse.",
        rating:"7.8/10 · IMDb",
        },
    {
      name: "PUSHPA",
      pic:"https://www.pinkvilla.com/files/styles/amp_metadata_content_image_min_696px_wide/public/pushpa_first_song_promo_out_0.jpg?itok=MWDFre_2",
      summary: "Violence erupts between red sandalwood smugglers and the police charged with bringing down their organisation in the Seshachalam forests of South India.",
      rating:"7.9/10 · IMDb",
    },
    {
      name: "K.G.F",
      pic:
       "https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/pedu2f9bi5m96vii_1625753689.jpeg",
    summary:"Rocky, a young man, seeks power and wealth in order to fulfil a promise to his dying mother. His quest takes him to Mumbai, where he gets involved with the notorious gold mafia.",
    rating:"8.3/10 . IMDb",
      },
    {
      name: "DOCTOR",
      pic:
        "https://wallpaperaccess.com/full/7256127.jpg",
     summary:"A military doctor embarks on a journey to track down his former fiancee's kidnapped niece. His mission then leads him to the heart of a human trafficking ring in Goa.",
     rating:"7.6/10 · IMDb",
      },
   {
      name: "SULTAN",
      pic:
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzvM_YRi3lQpN4EpRL6DGFP6GuijOVKYboeSfGjgINrjfp7IlqZlQATWI9An-9LZNA-5s&usqp=CAU",
      summary:"After the death of his son, Sultan Ali Khan, a middle-aged wrestler, gives up the sport. Years later, he sets out to revive his career as he needs the prize money and wants to regain his lost respect.",
      rating:"6.3/10 · IMDb",
      }
  ];
  return (
    <div className="App">
      {user.map((us) => (
        <Counter name={us.name} pic={us.pic} summary={us.summary} rating={us.rating} />
      
      ))}
      
        <Color/>  
    </div>
    
    
  );
 
}
function Counter({name,pic,summary,rating}){
  const [like, setLike]=useState(0);
  const[dislike,setDislike]=useState(0);
  return(
    <div  className="movie">
    
        <img className="pic" src={pic} />
        <h3 className="Counter">NAME: {name}</h3>
        <h3 className="Counter">SUMMARY: {summary}</h3>
        <h3 className="Counter">RATING: {rating}</h3>
        <button onClick ={()=>setLike(like + 1)} className="button">👍like{like}</button> 
        <button onClick ={()=>setDislike(dislike + 1)} className="button">👎dislike{dislike}</button>
         
       
     </div>
    
  );
}
function Color(){
  const[color,setColor]=useState();
  const style={
    background:  color,
    };

 
    return(
      <div>
        <input 
        value={color}
        style={style} 
        onChange={(event)=> setColor(event.target.value)}
        placeholder="Enter a color"/>
      </div>

    );
}


