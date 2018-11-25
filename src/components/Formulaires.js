import React, {Component} from 'react';

class Formulaires extends Component {

    render() {
        return (
            <div className="btn-Formulaire">
                <button
                    type="button"
                    className="btn btn-info"
                    data-toggle="modal"
                    data-target="#exampleModal">
                    <i className="fas fa-plus"></i>
                </button>

                <div className="modal fade" id="exampleModal"  role="dialog"
                     aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Ajouter un utilisateur</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            {/*FORMULAIRES*/}
                            <div className="modal-body">
                                <form onSubmit={this.props.add} >
                                    {/*firstname*/}
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Firstname</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="firstname"
                                            id="firstname"
                                            onChange={this.props.onChange}
                                            value={this.props.firstname}
                                        />
                                    </div>

                                    {/*lastname*/}
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Lastname</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="lastname"
                                            id="lastname"
                                            onChange={this.props.onChange}
                                            value={this.props.lastname}

                                        />
                                    </div>

                                    {/*email*/}
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="email"
                                            id="email"
                                            onChange={this.props.onChange}
                                            value={this.props.mail}

                                        />
                                    </div>

                                    <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        value="envoyer"
                                    >
                                        Save changes
                                    </button>
                                </div>

                                </form>


                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Formulaires;