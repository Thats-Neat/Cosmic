import React from 'react';
import videoBg from '../assets/background.mp4';
import '../config';




const Main = () => {

    

    const getGameState = () => { //used and played instantly
        let request = new XMLHttpRequest();
        request.open( "GET", "https://v2-0-0.alpha.spacetraders.io/", false );
        request.send( null );

        let response = JSON.parse(request.responseText)["status"]


        return "🟢   " + response
    
    }

    function submitBtn() { // has to be called
        let request = new XMLHttpRequest();
        request.open( "GET", "https://v2-0-0.alpha.spacetraders.io/my/agent", false );
        request.setRequestHeader('Authorization', 'Bearer ' + global.var.token.text);
        request.send( null );

        let response = JSON.parse(request.responseText)["data"]["symbol"]
        console.log(response)

    } // for some reason onclick has to be {() => submitBtn()} not submitBtn() 
    
    const setTokenValue = (event) => {
        global.var.token.text = event.target.value;   
    }
     
    return (
        <div> 
            
            <video src={videoBg} autoPlay loop muted />
            
            <div>
                <h1 className="page-title-text">COSMIC 🚀</h1>
                <p className="page-title-description">Welcome To Your Personal Entrance To Space Traders API</p>
            </div>
            
            <div>
                <h1 className="token-title">🔑    TOKEN    🔑</h1>
                <input className="token-input" type="text" placeholder="API Token" name="token" onChange = {setTokenValue}/>
                <a onClick = {() => submitBtn()} className="submit-btn">SUBMIT</a> 
                <h1 className="gameState-text">{getGameState()}</h1>
            </div>
        
        </div>
    );
}

export default Main;
