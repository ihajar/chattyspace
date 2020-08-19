import React from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import SmsIcon from '@material-ui/icons/Sms';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { SearchOutlined } from '@material-ui/icons';

import SidebarChat from './SidebarChat';

import './Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__left">
                <div className="sidebaar__leftAvater">
                    <Avatar/>
                </div>
                
                <div className="sidebar__leftIcons">
                    <IconButton>
                        <SmsIcon className="sidebar__icons" />
                    </IconButton>

                    <IconButton>
                        <PersonIcon className="sidebar__icons"/>
                    </IconButton>

                    <IconButton>
                        <SettingsIcon className="sidebar__icons"/>
                    </IconButton>
                </div>
                <div className="sidebar__leftbottom">
                    <IconButton>
                        <ExitToAppIcon className="sidebar__icons"/>
                    </IconButton>
                   
                </div>
            </div>
            <div className="sidebar__right">
                <div className="sidebar__header">
                   
                    <div className="sidebar__search">
                        <div className="sidebar__searchContainer">
                            <SearchOutlined/>  
                            <input placeholder="Search Converstations" type="text" />
                        </div>
                    </div>

                    <button>
                        <IconButton>
                        <AddIcon className="sidebar__icons"/>
                        </IconButton>
                        
                    </button>          
                </div>
                <hr className="sidebar__line"/>
                <div className="sidebar__chats">
                    <SidebarChat/>
                  

                </div>
            </div>
           
        </div>
    )
}

export default Sidebar;
