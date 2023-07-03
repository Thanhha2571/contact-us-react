const InputField = (props) => {
    const { title, placeholder } = props
    // console.log(props);
    return (
        <div class="input-field">
            <label class="label-2">{title}</label>
            <div class="content-input-2">
                <input class="text-input-2" type="text" placeholder={placeholder} />
            </div>
        </div>
    )
}

export default InputField