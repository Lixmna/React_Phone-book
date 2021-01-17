import React from 'react';

class PhoneForm extends React.Component {
    state =     {
        name : '',
        phone: ''
    }

    handleChange = (e) =>    {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            name : '',
            phone: ''
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                 placeholder="이름"
                 value={this.state.name}
                 onChange={this.handleChange}
                 name="name"
                 />
                 <input
                 placeholder="전화번호"
                 value={this.state.phone}
                 onChange={this.handleChange}
                 name="phone"
                 />
                 <div>{this.state.name} {this.state.phone}</div>
            </form>
        );
    }
}

export default PhoneForm;