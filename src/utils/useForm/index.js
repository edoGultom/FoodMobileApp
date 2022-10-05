import { useState } from "react"

//custom hook
const useForm = (initialValue) => {
    const [form, setForm] = useState(initialValue);
    return [
        form,
        (formType, formValue) => {
            // mengisi usestate dinamis 
            // mengambil value lama (...form) kemudian merubah sesuai jenis form yg dikirim
            // misal(formType 'email' valuenya (formValue) berisi edogultom10395@gmail.com)

            if (formType === 'reset') {
                return setForm(initialValue)
            }
            return setForm({ ...form, [formType]: formValue })
        }
    ]
}

export default useForm;