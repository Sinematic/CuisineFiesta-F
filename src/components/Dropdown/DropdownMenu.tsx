import { NavLink } from "react-router-dom"
import "../../styles/Dropdown/DropdownMenu.css"
import Badge from "../Badge/Badge"

function DropdownMenu(props: { 
    isOpen: boolean, 
    links: Array<{ path: string, content: string, badge: string | undefined }>, 
    identifier?: string
}) {

    return (
        <ul className={"dropdown-menu " + (props.isOpen ? "open" : "")} id={props.identifier ? props.identifier : ""}>
            {props.links.map((link) => 
                <li key={link.content}>
                    <NavLink to={link.path}>
                        {link.content}
                        {link.badge ? <Badge type={link.badge} /> : null}
                    </NavLink>
              </li>
            )}
        </ul>
    )
}

export default DropdownMenu