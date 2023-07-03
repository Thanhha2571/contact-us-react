
// const Input = (props) => {
//     const { error, title, placeholder, InputValue, handleChange } = props;
//     if (error) {
//         return (
//             <div class="row-input-field" style={{
//                 height: '104px'
//             }}>
//                 <label class="label-1">{title}</label>
//                 <div class="content-input-1">
//                     <input value={InputValue} onChange={handleChange} class="text-input-1" style={{ border: '1px solid red' }} type="text" placeholder={placeholder} />
//                 </div>
//                 <span style={{
//                     color: 'red',
//                     fontSize: '14px',
//                 }}>Please complete this required field.</span>
//                 {/* <button onClick={handleChange} type="button">submit</button> */}
//             </div>
//         )
//     }
//     else {
//         return (
//             <div class="row-input-field">
//                 <label class="label-1">{title}</label>
//                 <div class="content-input-1">
//                     <input value={InputValue} onChange={handleChange} class="text-input-1" type="text" placeholder={placeholder} />
//                 </div>
//             </div>
//         )
//     }
// }

// export default Input


const Input = ({ error, title,...props }) => {
    return (
        <div className={`row-input-field${error ? '-error' : ''}`}>
            <label className="label-1">{title}</label>
            <div className="content-input-1">
                <input
                    className={`text-input-1${error ? '-error' : ''}`}
                    type="text"
                    {...props}
                />
                {error && <span className="error-icon"></span>}
            </div>
            {error && <span className="error-message">Please complete this required field.</span>}
        </div>
    );
};

export default Input;