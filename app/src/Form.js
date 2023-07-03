import Input from "./Input"
import InputField from "./InputField"
import { useState } from "react"
import Button from "./Button"
const Form = () => {
   
    const InputRows = [
        {
            name: "fullName",
            placeholder: 'Full name',
            title: 'Full name*',
        },

        // {
        //     placeholder: 'CEO',
        //     title: 'Title',
        // }
    ]

    const InputFileds = [
        {
            id: 2,
            title: 'Email*',
            placeholder: "you@company.com"
        },
        {
            id: 2,
            title: 'Phone number',
            placeholder: "+(84) 000-000-000"
        },
    ]

    const Buttons = [
        {   
            id: 'submit',
            title :'Submit',
        }
    ]
    const [InputValue, setInputValue] = useState("")
    const [error, setError] = useState(false)
    const [color, setColor] = useState(false)
    const handleSubmit = () => {
        if (InputValue === "") {
            setError(true)
        }
        else {
            setError(false)
            console.log(InputValue);
            setInputValue("")
        }
    }

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleOnMouseOver = () => {
        setColor(true)
    }

    const handleOnMouseLeave = () => {
        setColor(false)   
    }

    return (
        <div class="Form">
            <div class="form-input">
                <div class="row">
                    {InputRows.map((input) => <Input error={error} onChange={handleChange} value={InputValue}  title={input.title} placeholder={input.placeholder} />)}
                    <div class="row-input-field">
                        <label class="label-1">Title</label>
                        <div class="content-input-1">
                            <input class="text-input-1" type="text" placeholder="CEO" />
                        </div>
                    </div>
                </div>
                {InputFileds.map((input) => <InputField title={input.title} placeholder={input.placeholder} />)}
                <div class="text-area-input-field-base">
                    <label class="label-3">Message*</label>
                    <div class="content-input-3">
                        <input class="text-input-3" type="text" placeholder="Tell us more about you..." />
                    </div>
                </div>
                <div class="check-box">
                    <input type="checkbox" class="check-box-input" />
                    <span class="check-box-text">I agree to the <span style={{
                        color: '#2155FF',
                    }}>Privacy
                        Policy</span></span>
                </div>
            </div>
            {/* <div onClick={handleSubmit} class="submit">
                <p type="submit" class="submit-btn">Submit</p>
                <div class="icon">
                    <img class="arrow-right" src="./image/Vector.png" />
                </div>
            </div> */}
            <Button id = "submit" title="Submit" onClick={handleSubmit} onMouseOver = {handleOnMouseOver} onMouseLeave= {handleOnMouseLeave} color={color}/>
        </div>
    )
}

export default Form