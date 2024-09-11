import React, { useState } from 'react'
import { friends } from '../utils/constants'
import Friend from './Friend'

const DreamTeam = () => {
    const [selectedFriend, setSelectedFriend] = useState(null);

    const handleFriendClick = (index) => {
        if (selectedFriend === index) {
            setSelectedFriend(null);
        } else {
            setSelectedFriend(index);
        }
    };

    return (
        <section className="float-end w-50 row border rounded-bottom-4 mx-2">
            <h2 className="col-12 text-center">Dream Team</h2>
            {friends.map((friend, index) => (
                <Friend
                    key={index}
                    pos={index + 1}
                    picture={friend}
                    onClick={() => handleFriendClick(index)}
                    isSelected={index === selectedFriend}
                    isHidden={selectedFriend !== null && index !== selectedFriend}
                />
            ))}
        </section>
    )
}

export default DreamTeam