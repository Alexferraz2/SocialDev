import { Controller, useController } from "react-hook-form";

import TextArea from "./TextArea";

const ControlledTextArea = ( { name, control, defaultValue = '', ...props}) => {
    const { 
        field: { value, onChange}
     } = useController( { name, control, defaultValue })
    return (
        <TextArea {...props} value={value} onChange={onChange}/>
    )
}

export default ControlledTextArea