import React from "react";
import {useState} from "react";
//
export default function PokemonInfo({api}) {
    const [photo, setPhoto] = useState({})
    // const [obj, setObj] = useState({name: '', photo: ''})
    const obj = {}
    // let arr = []
    const printPhoto = (
            <div>
                {api.map((item, index) => {
                    fetch(`https://pokeapi.co/api/v2/pokemon/${index + 1}`)
                        .then(response => response.json())
                        .then(data => setPhoto(data.sprites.back_default))
                    obj.name = item.name
                    obj.photo = photo
                    return (
                        <div>
                            <div>{obj.name}</div>
                            <img src={obj.photo} alt={"pokemon"}/>
                        </div>

                    )
                })}
            </div>
    )

    return (
        <div>
            <div> {printPhoto}</div>
        </div>
    )
}
