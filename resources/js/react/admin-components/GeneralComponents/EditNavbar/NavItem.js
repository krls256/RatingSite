import React, {useState} from 'react';

const NavItem = ({label, click, additionalClassName}) => {
    const [focused, setFocused] = useState(false)
    return(
        <span className={`edit-navbar__item-content ${additionalClassName}`} onClick={click} aria-label='nav-item'
              onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
              onKeyPress={(e) => {
                  if(e.key === ' ' && focused)
                      click()
              }}
            tabIndex={1}>{label}</span>
    );
}

export default NavItem
