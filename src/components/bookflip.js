import React from 'react';
import FlipPage from 'react-flip-page';
import htmlToImage from 'html-to-image';
import html2canvas from 'html2canvas';


const Book =(props)=>{
    localStorage.setItem('book',JSON.stringify(props))
    console.log(props)
    // (function(window, document, undefined){
    //     // code that should be taken care of right away
    //     window.onload = init;
    //       function init(){
    //          html2canvas(document.getElementById('page0')).then(function(canvas){
    //             console.log(canvas.toDataURL("image/jpeg",0.9))
    //          })             
    //       }
        
    //     })(window, document, undefined);
    const cleanCode=(code,id)=>{
        let newcode=code;
        newcode = newcode.replace(/Mohammed/g, props.fname.charAt(0).toUpperCase()+props.fname.slice(1)).replace(/MOHAMMED/g, props.fname.toUpperCase());
        if (props.gender==="f"){
        newcode = newcode.replace(/\bhe\b/g,"she").replace(/\bhim\b/g,"her").replace(/\bhis\b/g,"her");
        newcode = newcode.replace(/\bHe\b/g,"She").replace(/\bHim\b/g,"Her").replace(/\bHis\b/g,"Her").replace(/\bhimself\b/g,"herself");}
        newcode = newcode.replace(/\bthe playground\b/g,props.fav);
        newcode = newcode.replace(/\b5 years\b/g,props.age+" years");
        //newcode = newcode.replace(/cls-/g,"pg"+id+'-');
        return newcode;
    }
    

    function createMarkup(svgtxt,id) {
        let svgid=cleanCode(svgtxt,0);
        return {__html: svgid};
    }
        return(
           <div className="flipdiv"> 
            {props.loadedBook && props.loadedBook.map((flipb,flipid)=>{
           return <FlipPage 
           uncutPages={true} key="flip1" id="bookpreview" showTouchHint={true} showHint={true} disableSwipe={true} flipOnTouch={true} flipOnTouchZone='50' noShadow={false} orientation="horizontal" responsive={true}>
                    {flipb.pages.map((flip,id)=>{
                     return  <article key={"article"+id} id={"page"+id} > 
                        {id===0 && <div style={{position:'relative'}}>
                            {props.kid==="girl1" && flip.girl1 && <img style={{position:'absolute',margin:'0 50%'}} src={require(`../assets/books/${flip.girl1}`)} alt="page{id}" height="100%" width="50%" />}
                            {props.kid==="girl2" && flip.girl2 && <img style={{position:'absolute',margin:'0 50%'}} src={require(`../assets/books/${flip.girl2}`)} alt="page{id}" height="100%" width="50%" />}
                            {props.kid==="girl3" && flip.girl3 && <img style={{position:'absolute',margin:'0 50%'}} src={require(`../assets/books/${flip.girl3}`)} alt="page{id}" height="100%" width="50%" />}
                            {props.kid==="girl4" && flip.girl4 && <img style={{position:'absolute',margin:'0 50%'}} src={require(`../assets/books/${flip.girl4}`)} alt="page{id}" height="100%" width="50%" />}
                            {props.kid==="boy1" && flip.boy1 && <img style={{position:'absolute',margin:'0 50%'}} src={require(`../assets/books/${flip.boy1}`)} alt="page{id}" height="100%" width="50%" />}
                            {props.kid==="boy2" && flip.boy2 && <img style={{position:'absolute',margin:'0 50%'}} src={require(`../assets/books/${flip.boy2}`)} alt="page{id}" height="100%" width="50%" />}
                            {props.kid==="boy3" && flip.boy3 && <img style={{position:'absolute',margin:'0 50%'}} src={require(`../assets/books/${flip.boy3}`)} alt="page{id}" height="100%" width="50%" />}
                            {props.kid==="boy4" && flip.boy4 && <img style={{position:'absolute',margin:'0 50%'}} src={require(`../assets/books/${flip.boy4}`)} alt="page{id}" height="100%" width="50%" />}
                            <div dangerouslySetInnerHTML={createMarkup(flip.txt,id)} style={{position:'absolute',left:'50%',top:'0px',width:'50%',height:'100%'}}/> 
                            <img src={require(`../assets/books/${flip.bg}`)} alt="{id}" 
                            style={{height:"100%",width:"50%",marginLeft:'50%',boxShadow: '-2px 2px 4px black'}} />
                        </div>}
                        {id===(flipb.pages.length-1) && <div style={{position:'relative'}}>
                            <img src={require(`../assets/books/${flip.bg}`)}  alt="page{id}" 
                            style={{height:"100%",width:"50%",marginLeft:'-50%',boxShadow:'2px 2px 4px black'}}/>
                        </div>}
                        {id>0 && id <(flipb.pages.length-1) && <div style={{position:'relative'}}>
                            {props.kid==="girl1" && flip.girl1 && <img style={{height:"calc( 100% - 4px )",width:"calc( 100% - 4px )",marginLeft:"2px",marginTop:"2px",position:'absolute'}} src={require(`../assets/books/${flip.girl1}`)} alt="page{id}" height="100%" width="100%" />}
                            {props.kid==="girl2" && flip.girl2 && <img style={{height:"calc( 100% - 4px )",width:"calc( 100% - 4px )",marginLeft:"2px",marginTop:"2px",position:'absolute'}} src={require(`../assets/books/${flip.girl2}`)} alt="page{id}" height="100%" width="100%" />}
                            {props.kid==="girl3" && flip.girl3 && <img style={{height:"calc( 100% - 4px )",width:"calc( 100% - 4px )",marginLeft:"2px",marginTop:"2px",position:'absolute'}} src={require(`../assets/books/${flip.girl3}`)} alt="page{id}" height="100%" width="100%" />}
                            {props.kid==="girl4" && flip.girl4 && <img style={{height:"calc( 100% - 4px )",width:"calc( 100% - 4px )",marginLeft:"2px",marginTop:"2px",position:'absolute'}} src={require(`../assets/books/${flip.girl4}`)} alt="page{id}" height="100%" width="100%" />}
                            {props.kid==="boy1" && flip.boy1 && <img style={{height:"calc( 100% - 4px )",width:"calc( 100% - 4px )",marginLeft:"2px",marginTop:"2px",position:'absolute'}} src={require(`../assets/books/${flip.boy1}`)} alt="page{id}" height="100%" width="100%" />}
                            {props.kid==="boy2" && flip.boy2 && <img style={{height:"calc( 100% - 4px )",width:"calc( 100% - 4px )",marginLeft:"2px",marginTop:"2px",position:'absolute'}} src={require(`../assets/books/${flip.boy2}`)} alt="page{id}" height="100%" width="100%" />}
                            {props.kid==="boy3" && flip.boy3 && <img style={{height:"calc( 100% - 4px )",width:"calc( 100% - 4px )",marginLeft:"2px",marginTop:"2px",position:'absolute'}} src={require(`../assets/books/${flip.boy3}`)} alt="page{id}" height="100%" width="100%" />}
                            {props.kid==="boy4" && flip.boy4 && <img style={{height:"calc( 100% - 4px )",width:"calc( 100% - 4px )",marginLeft:"2px",marginTop:"2px",position:'absolute'}} src={require(`../assets/books/${flip.boy4}`)} alt="page{id}" height="100%" width="100%" />}
                            <div dangerouslySetInnerHTML={createMarkup(flip.txt,id)} style={{position:'absolute',width:'100%',height:'100%'}}/> 
                            <img src={require(`../assets/books/${flip.bg}`)}  alt="page{id}" 
                            style={{height:"calc( 100% - 4px )",width:"calc( 100% - 4px )",marginLeft:"2px",marginTop:"2px",boxShadow:'2px 2px 4px black,-2px 0px 2px black'}} />
                        </div>
                        }
                    </article>
                    })}
                    </FlipPage>
                })}
        </div>
    );
}

export default Book;