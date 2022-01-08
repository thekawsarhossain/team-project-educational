import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import messagesSlice from '../../../Redux/slices/messagesSlice';

const Messages = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(messagesSlice())
    }, [dispatch])

    const messages = useSelector(state => state.messages.messages)
    console.log(messages)

    return (
        <div>

        </div>
    );
};

export default Messages;