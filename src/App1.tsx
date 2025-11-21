import photo from "/vite.svg";
import "./App.css"; //*local css
import reactPhoto from "./assets/react.svg";
type ImgProps={img?:string,width?:number}

export default function App() {
  const username: string = "boob"; //**state data */
  const status: boolean = true;

  return (
    <div>
      <h1 className="title" style={{ color: "red" }}>
        hello world, welcome {username.toUpperCase()}
      </h1>
      <h1>
        {username && (
          <p style={{ color: `${status ? "green" : "red"}` }}>
            Hello {username}
          </p>
        )}
        {status ? (
          <p style={{ color: "green" }}>status is active</p>
        ) : (
          <p style={{ color: "red" }}>status is inactive</p>
        )}
      </h1>

      <Img img={reactPhoto} width={100} />
      <Img img={photo} width={150} />
      <Img img={photo} width={200} />
      <Img img={reactPhoto} width={300}/>
      <Img2 img={reactPhoto} width={50}/>
      <Img2 img={photo} width={80}/>

      <Img/>

      {/* <img className="logo" src={photo} alt="photo" />
      <img src={reactPhoto} alt="" />
      <img src="/vite.svg" alt="photo"/> */}
    </div>
  );
}



// function Img(props: { img?: string; width?: number }) 
function Img(props:ImgProps) 
{
  console.log("props", props);
  console.log("props img", props.img);
  console.log("props width", props.width);
  return <img src={props.img} alt={props.img || 'photo'} width={props.width} />
}


// function Img2({ img, width }: { img: string; width: number }) 
function Img2({img,width}:ImgProps) 
{
  console.log('====================');
  console.log(img,width);
  return <img src={img} alt={img} width={width} />
}
