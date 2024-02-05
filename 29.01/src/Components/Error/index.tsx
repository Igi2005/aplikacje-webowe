import { createElement } from "react"

interface ErrMsg {
    message : string
}

export function Error({message} : ErrMsg) {
    return createElement('p',null,message)
}