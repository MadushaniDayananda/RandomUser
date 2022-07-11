import React, {useState} from 'react';
import './nl.css';

function Namelist() {
    const [nameList,setNameList]= useState([
        {
            Name: 'madu',
            Age: '25yrs',
            picture: "https://randomuser.me/api/portraits/med/men/75.jpg"
        },
        {
            Name: 'Dil',
            Age: '25yrs',
            picture: "https://randomuser.me/api/portraits/women/63.jpg"
        },
        {
            Name: 'madu',
            Age: '25yrs',
            picture: "https://randomuser.me/api/portraits/men/62.jpg"
        }
    ]);
    // const nameList = [
    //
    // ];

    const nameListComponent = () =>{
        return (
            nameList.map(aName =>{
                return( <div className="name">

                    <ul style={{justifyContent: 'center'}}>
                        <img src={aName.picture}/>
                        <li>Name {aName.Name}</li>
                        <li>Age {aName.Age}</li>
                    </ul>

                </div>)


            })

        );
    }
    const handleUser=()=>{
        console.log('clicked');
        const newUser=()=>{

                Name : 'Dil',
                Age : '25yrs',
                picture: "https://randomuser.me/api/portraits/women/63.jpg"


        };
    }
    return (
        <div>
            <h1>Name list</h1>
            <button onClick={handleUser}>Add Button</button>
            {nameListComponent()}

        </div>

    );
}

export default Namelist;


