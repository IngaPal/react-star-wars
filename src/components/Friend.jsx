import React from 'react'

const Friend = ({ picture, pos, onClick, isSelected, isHidden }) => {
    let styles = 'col-4 p-1 ';
    
    if (pos === 7) {
        styles += 'rounded-bottom-start';
    }
    if (pos === 9) {
        styles += 'rounded-bottom-end';
    }
    if (isSelected) {
        styles = 'full-width p-0'; 
    }
    if (isHidden) {
        styles += ' hidden'; 
    }

    return (
        <img
            className={styles}
            src={picture}
            alt="Friend"
            onClick={onClick}
            style={{ cursor: 'pointer' }}
        />
    )
}

export default Friend;