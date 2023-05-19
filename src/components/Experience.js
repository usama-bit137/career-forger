import React, { Component } from "react"

export default class Experience extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.props.handleChange.bind(this); 
    }

    render() {
        return (            
            <form className={this.props.parentName} name={this.props.parentName}>
                <input
                    type="text"
                    name={this.props.place}
                    value={this.props.item[this.props.place]} 
                    placeholder={this.props.place}
                    onChange={this.handleChange}
                />
                <input 
                    type = "text"
                    name = {this.props.what}
                    value = {this.props.item[this.props.what]} 
                    placeholder = {this.props.what}
                    onChange = {this.handleChange}
                />
                
                <label>
                    From 
                    <input 
                        type="date"
                        name="start"
                        value={this.props.item.start} 
                        onChange={this.handleChange}
                    />
                </label>

                <label>
                    Until 
                    <input 
                        type="date"
                        name="start"
                        value={this.props.item.end} 
                        onChange={this.handleChange}
                    />
                </label>
                
                <textarea 
                    placeholder="Description"
                    value={this.props.item.description}
                    name="description"
                    onChange={this.handleChange}
                />
            </form>
        )
    }
}