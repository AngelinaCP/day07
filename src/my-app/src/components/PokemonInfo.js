import React from "react";
import {useState, useEffect} from "react";

export default function PokemonInfo({item, index}) {

    const [obj, setObj] = useState({name: "", photo: ""})
    const [type, setType] = useState([])
    const [count, setCount] = useState([])

    useEffect(() => {
            fetch(`https://pokeapi.co/api/v2/pokemon/${index + 1}`)
                .then(response => response.json())
                .then(data => {
                    // console.log(data.sprites.back_default)
                    // console.log('item', item)
                    setObj(data.sprites.back_default)
                    fetch(data.forms[0].url)
                        .then(response => response.json())
                        .then(data => {
                            data.types.map((elem, i) => {
                                console.log('i', i)
                                type.push(data.types[i].type.name)
                                setCount(i + 1)
                            })
                        })
                })
        }, [index])

    return (
        <form>
            <div>
                <img src={obj} alt={"pokemon"}/>
                <div>{item.name}</div>
                {
                    type.map((elem, index) => {
                            return (
                                <div>
                                    <div>{elem}</div>
                                </div>
                            )
                    })
                }
                <div>({count})</div>
            </div>
        </form>

    )
}
