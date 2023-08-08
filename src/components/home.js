import { Button } from "react-bootstrap"
import cocktail from "../assets/cocktail.jpg"
import { Link } from "react-router-dom";

function Home () {
    return (
            <div className="home">
                <h1 style={{color: 'white', backgroundColor: '#FEAA01', marginBottom: 0}}>Cocktail Generator</h1>
                <img className="homeimg" src={cocktail} />
                <div className="homebttns">
                    <Link to='/Cocktail-Generator/random'>
                        <Button className='randombttn' variant="warning">Random</Button>{''}
                    </Link>
                    <Link to="/generator">
                        <Button className='generatorbttn' variant="warning">Generator</Button>{''}
                    </Link>
                </div>
            </div>
            
    )
}

export default Home