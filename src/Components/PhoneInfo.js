import React from 'react';

class PhoneInfo extends React.Component {
    static defaultProps = {
        info: {
            name: '이름',
            phone: '010-0000-0000',
        }
    }
}

export default PhoneInfo;