import React, {Component} from 'react';
import axios from "axios";
import './App.css';
import ListUsers from "./components/ListUsers";
import Formulaires from "./components/Formulaires";
import Headers from "./components/Headers";
import Form2 from "./Form2";

class App extends Component {
    state = {
        users: [],
        firstname: "",
        lastname: "",
        email: "",
        search:""
    };
    search = (e) => {
        this.setState({search:e.target.value})

};
    dataUSers = async () => {
        const myUsers = await axios.get("/users");
        this.setState({users: myUsers.data})
    };
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    componentDidMount() {
        this.dataUSers();
    }

    //Supprimer un membre
    del = (id) => {

        axios.delete(`/users/delete/${id}`)
            .then((res) => {
                console.log(res);
            })
            .catch((error) => console.log(error))

    };

    //ajouter un membre
    submitForm = (e) => {
        e.preventDefault();
        axios.post('/users/create/',{
            firstname:this.state.firstname,
            lastname:this.state.lastname,
            email:this.state.email,
        })
            .then((res) => {
                console.log(res);
            })
            .catch((error) => console.log(error))
    };

    render() {
        return (
            <div className="App">
                <Headers
                    total={this.state.users.length}
                />
                <Form2
                    onChange={this.search}
                />
                <Formulaires
                    onChange={this.onChange}
                    add={this.submitForm}
                    firstname={this.state.firstname}
                    lastname={this.state.lastname}
                    mail={this.state.email}
                />
                <div className="listUsers">
                    {
                        this.state.users.filter(user => user.firstname.includes(this.state.search))
                            .map(user => {
                                return (
                                    <ListUsers
                                        del={(id) => this.del(id)}
                                        key={user.id}
                                        {...user}
                                    />
                                )

                            }

                        )
                    }
                </div>
            </div>
        );
    }
}

export default App;
