import '../App.css'
import { SidebarData } from './SidebarData'
const Sidebar = () => {
    return (
        <div className="Sidebar">
            <ul>
                {SidebarData.map((value, index) => {
                    return (
                        <li key={index} onClick={() => {

                        }}>
                            <div>{value.icon}</div>
                            <div>{value.title}</div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Sidebar;