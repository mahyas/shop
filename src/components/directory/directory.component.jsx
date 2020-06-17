import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
    constructor(){
        super();

        this.state = {
            sections:[{
                title: 'FLATS',
                imageUrl: 'https://images.unsplash.com/photo-1568347619798-2008f2ce5b94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80',
                id: 1
            },
            {
                title: 'HEELS',
                imageUrl: 'https://images.unsplash.com/photo-1522315109300-78ce09fe6d37?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
                id: 2
            },
            {
                title: 'SNEEKERS',
                imageUrl: 'https://images.unsplash.com/photo-1587502374301-1c46349e3608?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
                id: 3
            },
            {
                title: 'WOMEN',
                imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                size: 'large',
                id: 4
            },
            {
                title: 'MEN',
                imageUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                size: 'large',
                id: 5
            }]
        }
    }

    render(){
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({title,imageUrl,id,size}) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                    ))
                }
            </div>
        )
    }
}

export default Directory;