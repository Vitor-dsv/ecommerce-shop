import { HtmlHTMLAttributes } from "react"

type props = {
    label?: string
} & HtmlHTMLAttributes<HTMLInputElement>

const Input = (props: props) => (
    <>
        <input {...props} id="custom" className={`${props.className} hover:bg-gray-300 focus:outline-none focus:ring`} />
        {props.label && <label htmlFor="custom"></label>}
    </>
)

export default Input