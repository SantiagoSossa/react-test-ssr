import React from 'react'
import NavItem from './NavItem'
import usernameicon from '../assets/username_icon.svg'
import notificationsicon from '../assets/notifications_icon.svg'
import discovericon from '../assets/discover_icon.svg'
import refreshicon from '../assets/refresh.svg'

export default function NavItems(props) {
    return(
        <div className="NavItems" id="">
            <NavItem link="" name="refresh" icon={refreshicon}></NavItem>
            <NavItem link="" name="discover" icon={discovericon}></NavItem>
            <NavItem link="" name="notifications" icon={notificationsicon}></NavItem>
            <NavItem link="" name="username" icon={usernameicon}></NavItem>
        </div>
    )
}