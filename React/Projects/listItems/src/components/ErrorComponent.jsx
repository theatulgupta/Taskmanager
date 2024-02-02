import { BsEmojiWink } from "react-icons/bs";

const ErrorComponent = ({items}) => {
    return(<>
        { items.length === 0 && <h1>Have A Great Day <BsEmojiWink/></h1> }</>
    )
}
export default ErrorComponent;