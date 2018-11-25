import React, {Component} from 'react';

class Form2 extends Component {
    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Search</label>
                        <input
                            onChange={this.props.onChange}
                            type="text"
                            className="form-control"
                            id="formGroupExampleInput"
                            placeholder="search membres"/>

                    </div>
                </form>
            </div>
        );
    }
}

export default Form2;