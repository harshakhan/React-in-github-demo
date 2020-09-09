import React from 'react'
import styles from './ReactCard.module.css'
import ProfileImage from "./ProfileImage";
import Typography from "./Typography";
import ButtonCard from './ButtonCard';
import SkillsCard from './SkillsCard';

function ReactCard(props){
    const {data} =props


    return (
    
    <div style={{width:"300px", textAlign:"center"}}>
           <div className={styles.container}>
               <ProfileImage 
               style ={{width: "100px",height: "100px"}}
               src = {data.avatar}
               rounded 
               outline
               alt ="profile picture" 
            />
            <Typography title={data.name}/>
            <Typography 
                style = {{padding: 5}} 
                title ={data.location} 
                uppercase size="10px"
            />
            <Typography 
                title ={data.title} 
                style={{letterSpacing: 0, fontWeight: 300}} 
            />
            <div 
                style={{display: 'flex',
                flexDirection:"row",
                justifyContent: "center"
            }}>


            <ButtonCard active label ="Message"/>
            <ButtonCard label ="Following"></ButtonCard>

            </div>
           <div className = {styles.skills} style ={{marginTop: 30}}>
           <Typography 
                title ="Skills"
                uppercase
                style={{
                    letterSpacing: 0, 
                    fontWeight: 300, 
                    textAlign: 'left', 
                    padding: 10, 
                    paddingLeft: 20,
                }} 
            />
            <div 
            style = {{
                display: "flex",
                flexWrap :"wrap",
               padding: 10}}>


                <SkillsCard label ={data.skills[0]}/>
                <SkillsCard label ={data.skills[1]}/>
                <SkillsCard label ={data.skills[2]}/>
                <SkillsCard label ={data.skills[3]}/>
                <SkillsCard label ={data.skills[4]}/>
              
            </div>
            
           </div>
          
           </div>

       </div>
    ) 
    
}

export default ReactCard