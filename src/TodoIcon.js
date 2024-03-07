
import { ReactComponent as DeleteSVG } from './assets/delete.svg';
import { ReactComponent as CheckSVG } from './assets/circle-check.svg';
import "./Main.css";

const iconTypes = {
    "check" : <CheckSVG className = "Icon-svg" />,
    "delete" : <DeleteSVG className = "Icon-svg" />,
}

function TodoIcon({type}){
    return(
        <span 
            className = {`Icon-container 
            Icon-container-${type}` }
            >
            {iconTypes[type]}
        </span>
    );
}

export {TodoIcon};