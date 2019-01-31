import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import Select from '@material/react-select';
import MenuSurface, {Corner} from '@material/react-menu-surface';
import List, {ListItem, ListItemText} from '@material/react-list';
import MaterialIcon from '@material/react-material-icon';

import '@material/react-select/dist/select.css';
import '@material/react-menu-surface/dist/menu-surface.css';
import '@material/react-list/dist/list.css';
import '@material/react-material-icon/dist/material-icon.css';
import './styles.css'



class DropdownMenu extends PureComponent {
    state = {
        menuOpen: false
    };

    changeValue(newValue) {
        this.props.onChange(newValue);
        this.setState({menuOpen: false});
    }

    render() {
        const {menuOpen} = this.state;
        const { value, options, onChange } = this.props;

        return (
            <>
            <Select
                ref={(ref) => {this.select = ReactDOM.findDOMNode(ref)}}
                className={value ? 'delete-btn' : ''}
                box={false}
                value={value ? value : ''}
                label='Choose one'
                onClick={() => this.setState({menuOpen: !menuOpen})}
                options={[
                    {
                        label: '',
                        value: null
                    },
                    ...options
                    ]}
            />
            <MaterialIcon
                className="dropdown-menu_cancel-icon"
                style={{
                    display: value ? 'unset' : 'none',
                }}
                onClick={() => this.changeValue(null)}
                icon='cancel' />
            <MenuSurface
                anchorCorner={Corner.BOTTOM_LEFT}
                anchorElement={this.select}
                onClose={() => this.setState({menuOpen: false})}
                open={menuOpen}
                quickOpen={true}
            >
                <List className="dropdown-menu_menu">
                    {options.map(option => {
                        return (<ListItem className={'dropdown-menu_menu_list-item'} onClick={() => this.changeValue(option.value)} key={option.value}>
                            <ListItemText primaryText={option.label}/>
                        </ListItem>)
                    })}
                </List>
            </MenuSurface>
            </>
        );
    }
}

export default DropdownMenu;
