import React from 'react'
import {useParams} from 'react-router-dom'


const PETS =[{
    id: 'u1',
    title: 'thats a dog1',
    description : 'nice dog1',
    image: 'https://picsum.photos/id/237/200/300',
    address: 'this is adress',
    creator :"u1"

},
{
    id: 'u2',
    title: 'thats a dog2',
    description : 'nice dog2',
    image: 'https://picsum.photos/id/237/200/300',
    address: 'this is adress',
    creator: 'u2'
    

}] 




const UpdatePet = () => {
    const petId = useParams().petId

const correctPet = PETS.find( p=> p.id === petId)


    return (
        <form>

        </form>
    )
}

export default UpdatePet
