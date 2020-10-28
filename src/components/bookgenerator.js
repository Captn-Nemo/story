import React,{ useEffect, useState} from 'react';
import SVG from 'react-inlinesvg';
import saveSvgAsPng from 'save-svg-as-png';
//import {PDFViewer, Document, Page,Image,View,StyleSheet} from '@react-pdf/renderer';


const BookGenerator =(props)=>{

    const [isloading, setisLoading] = useState(false);
    const [loadedBook, setLoadedBook] = useState();

    useEffect(()=>{
        const sendRequest = async() =>{
            setisLoading(true);
            try{
            const response = await fetch('./api/books/Inara Goes to School');
            const responseData = await response.json();
            console.log(responseData);
            if(!response.ok) {
                throw new Error(responseData.message);
            }
            loadedBook = responseData.book;
            setLoadedBook(responseData.book);
            console.log(responseData.book);
            }catch(err){
            //    setError(err.message);
            }
            setisLoading(false);
        };
        sendRequest();
    },[props.title]);

        const cleanCode=(code,id)=>{
            let newcode=code;
            newcode = newcode.replace(/Inara/g, "Sadia").replace(/INARA/g, "SADIA");
            newcode = newcode.replace(/cls-/g,"pg"+id+'-');
            //if (id===0) convertSVG(newcode);
            return newcode;
        }
        /*
        const styles = StyleSheet.create({
            page: {
                flexDirection: 'row',
                backgroundColor: '#fff',
                width: '100%',
                orientation: 'portrait',
            },
            view: {
                width: '100%',
                height: '100%',
                padding: 0,
                backgroundColor: 'white',
            },
            image: {
                objectFit: 'cover',
            },
        });
*/


        const convertSVG = () => {
            saveSvgAsPng.saveSvgAsPng(document.getElementById("pagesvg1"), "page1.png");
        }

        return(
           <div> 
            {!isloading && loadedBook && loadedBook.map((flipb,flipid)=>{
           return <React.Fragment key={flipid}>
           <button onClick={convertSVG}>Print to PDF</button>
           <canvas id="canvas" width="800" height="400"></canvas>
           <div id="png-container"></div>
           {/*
           <PDFViewer>
           <Document >
           <Page object-fit="fill" style={styles.page} size="A4">
               <View style={styles.view}>
                    <Image style={styles.image}  src={pic1} alt="images" />
                   <Image style={styles.image}  src={pic} alt="images" />
               </View>
       </Page>
   </Document>
            </PDFViewer>
           */}
           <div>
                    {flipb.pages.map((flip,id)=>{
                     return  <div key={id} id={"page"+id}>
                        {id===0||id===(flipb.pages.length-1)?<div style={{position:'relative'}}>
                            {flip.girl!==''?<img style={{position:'absolute',margin:'0 25%'}} src={require(`../assets/books/${flip.girl}`)} alt="page{id}" height="100%" width="50%" />:''}
                            {flip.content!==''?<SVG id={"pagesvg"+id} style={{position:'absolute',width:'50%',left:'25%',height:'100%',top:'0px'}} src={require(`../assets/books/${flip.content}`)} preProcessor={code => cleanCode(code,id)}/>:''}
                            <img src={require(`../assets/books/${flip.bg}`)} alt="{id}" style={{height:"100%",width:"50%",margin:'0 25%'}} />
                        </div>
                        :<div style={{position:'relative'}}>
                            {flip.girl!==''?<img style={{position:'absolute'}} src={require(`../assets/books/${flip.girl}`)} alt="{id}" height="100%" width="100%" />:''}
                            {flip.content!==''?<SVG id={"pagesvg"+id} style={{position:'absolute',top:'0px',left:'0px'}}  src={require(`../assets/books/${flip.content}`)} preProcessor={code => cleanCode(code,id)} />:''}
                            <img src={require(`../assets/books/${flip.bg}`)}  alt="page{id}" style={{height:"100%",width:"100%"}} />
                        </div>
                        }
                    </div>
                    })}
                    </div>
                    </React.Fragment>
                })}
                
        </div>
       
        )
    }

export default BookGenerator;