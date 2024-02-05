import { useState } from "react"
import {Error} from "../../Components/Error/index.tsx"
import { createRoot } from "react-dom/client"

function Contact() {

    const [IsErr,setIsErr] = useState('')
    const [IsChecked, setIsChecked] = useState(false)
    const [IsMsg, setIsMsg] = useState(false)
// jak dziala
/* zmienna miedzy renderami pamieta wartosc 

*/
    function Validation(e : React.ChangeEvent<any>) {
        e.preventDefault()
        const {email,topic,check,msg} = e.target.elements
        
        console.log({email: email.value, topic: topic.value , check: check.checked, msg: msg.value})

        const RegExp = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/i

        if(email.value.length == 0) {
            setIsErr('nie mozesz dac pustego')
        }
        if(email.value.length != 0 ) {
            setIsErr('git')
        }

        if(!email.value.match(RegExp)) {
            setIsErr('niepoprawnie wpisales')
        }

        if(check.checked == false) {
            setIsChecked(true)
            console.log("check == false")
        }
        else {
            setIsChecked(false)
        }

        if(msg.value.length <= 20) {
            setIsMsg(true)
            console.log("ale napisz cos wiecej")
        }
        else {
            setIsChecked(false)
        }

        if(email.value.length != 0 && email.value.match(RegExp) && check.checked == true && msg.value.length >= 20) {
            function Msg() {
                return <p>Super sprawa! Wyśmienita robota, udało sie przesłać formularz</p>
            }
            const form = document.getElementById("root")
            const root = createRoot(form!)
            root.render(<Msg></Msg>)
            

// DO ZROBIENIA ZEBY SIE SAM MESSAGE WYSWIETLAL
        }

    }
//  {IsErr && <Error message="pusty jak uszol"></Error>};  zawsze true
// {IsErr ? <Error message="pusty jak uszol"></Error> : }; po ? true po : dla false co wypisze 

    return       <form onSubmit={Validation}>
                    <div>
                        <label htmlFor="email">Wpisz email</label>
                        <input type="email" name="email" id="email"/>
                    </div>
                        {IsErr == 'nie mozesz dac pustego' && <Error message="Nie no jak pusty email"></Error>}
                        {IsErr == 'niepoprawnie wpisales' && <Error message="Niepoprawny email"></Error>}
                    <div>
                        <label htmlFor="topic">Topic</label>
                        <select name="topic" id="topic">
                            <option value="Zielone jabuszko">Green apple</option>
                            <option value="Mango ">Mango Strawberry</option>
                            <option value="Podobno git">Japan</option>
                            <option value="Brzoskwinia">Peach</option>
                            <option value="Mohito">Mohito</option>
                            <option value="Winogorono">Grape</option>
                            <option value="Galaxy">Galaxy</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="check">I ageree to process my personal data</label>
                        <input type="checkbox" name="check" id="check"/>
                    </div>
                    {IsChecked && <Error message="Musisz zaakceptowac"></Error>}
                    <div>
                        <label htmlFor="msg">Message</label>
                        <textarea name="msg" id="msg"></textarea>
                    </div>
                    {IsMsg && <Error message="Napisz cos wiecej"></Error>}
                    <input type="submit" value="SEND" />
                </form>
     
}

export default Contact