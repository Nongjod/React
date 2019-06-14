import React, { Component } from 'react'

export class Formregister extends Component {
    state = {
        email: '',
        password: '',
        arr: [],
        show: true,
        id: 0
    }

    onChange = attr => e => {
        this.setState({ [attr]: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.email && this.state.password) {
            let obj = {
                email: this.state.email,
                password: this.state.password
            }
            this.setState({ arr: [...this.state.arr, obj] });
            this.setState({ email: '', password: '' });

        } else {
            console.log("pls input email and pass")
        }
    }

    onEdit = (em, pw, i) => e => {
        console.log("email : ", em);
        console.log("password : ", pw);
        this.setState({ id: i })
        this.setState({ email: em, password: pw })
        event.preventDefault();
        console.log(this.state.show)
        if (this.state.show == false) {
            this.setState({ show: !this.setState.show });
        } else {
            this.setState({ show: false });
        }
    }

    onSave = (e) => {
        e.preventDefault();
        this.setState({ show: !this.setState.show })
        console.log(this.state.show)
        this.setState({
            arr: this.state.arr.map((value, index) => {
                if (index == this.state.id) return ({ ...value, email: this.state.email, password: this.state.password })
                return value
            })
        });
        this.setState({ email: '', password: '' });
    }

    onDelete = (i) => e  => {
        event.preventDefault();
        const items =   this.state.arr
        const filteredItems = items.slice(0 , i).concat(items.slice(i + 1, items.length))
        this.setState({ arr: filteredItems })
    }


    render() {
        var shown = {
            display: this.state.show ? "block" : "none"
        };

        var hidden = {
            display: this.state.show ? "none" : "block"
        }

        return (
            <div>
                <form className='centered'>
                    <div className="form-group ">
                        <label for="exampleInputEmail1">Email address</label>
                        <input onChange={this.onChange("email")} value={this.state.email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input onChange={this.onChange("password")} value={this.state.password} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button style={shown} onClick={this.onSubmit} type="submit" className="btn btn-primary">Submit</button>
                    <button style={hidden} onClick={this.onSave} type="submit" className="btn btn-primary">Save</button>
                </form>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Email</th>
                            <th scope="col">Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.arr.length > 0 ?
                            <React.Fragment>{this.state.arr.map((value, index) => {
                                return <tr scope="row" key={index}>
                                    <th>{index + 1}</th>
                                    <th>{value.email}</th>
                                    <th>{value.password}</th>
                                    <button style={shown} onClick={this.onEdit(value.email, value.password, index)} type="submit" className="btn btn-primary">แก้ไข</button>
                                    <button style={shown} onClick={this.onDelete(index)} type="submit" className="btn btn-primary">Delete</button>
                                </tr>
                            })}</React.Fragment> : <tr col="span"><th>ไม่พบข้อมูล</th></tr>

                        }
                    </tbody>
                </table>
            </div>

        )
    }
}

export default Formregister
