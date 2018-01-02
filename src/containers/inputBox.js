import React from 'react';
import ReactDOM from 'react-dom';

import TitleUncorrect from '../components/alertTitleUncorrect';

export default class InputBox extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            title: '',
            description: '',
            isFinished: false,
            editedTodoId: this.props.editedTodoId,
            isTitleCorrect: true,
            date: ''
        }
    }

    handleChangeInput(e){
        this.setState({
            description: e.target.value
        });
    }

    handleChangeInputTitle(e){
        this.setState({
            title: e.target.value
        });
    }

    handleTodoSave(){
       const titleValue = document.getElementById('inputTitle').value;
       const descriptionValue = document.getElementById('input').value;
       const deadLine = document.getElementById('fullDLD').value;

        if(titleValue.length > 0){
            this.props.onTodoSave(titleValue, descriptionValue, deadLine, this.props.editedTodoId);
            this._hideEditControl();

            this.setState({
                title: '',
                description: '',
                isTitleCorrect: true
            });
        }else this.setState({ isTitleCorrect:false });
    }

    handleTodoAdd(){
        let fD = ReactDOM.findDOMNode(this.refs.fullDate).value;
        const newTodo = {
            title: this.state.title,
            description: this.state.description,
            checked: '',
            isDone: false,
            finishDate: '',
            deadLineDate: fD,
            id: Date.now()
        };

        if(this.state.title.length > 0){
            this.props.onTodoAdd(newTodo, this.state.isTitleCorrect);

            this.setState({
                title: '',
                description: '',
                isTitleCorrect: true
            });

        }
        else this.setState({ isTitleCorrect:false });
    }

    handleCancelEdit(){

        this.setState({
            title: '',
            description: ''
        });
        this._hideEditControl();
        this.props.clearInuts();
    }

    closeAlert(){
        this.setState({
            isTitleCorrect: true
        });
    }

    render(){
        return(
            <div className="todo-editor">

                {
                    !this.state.isTitleCorrect
                    ? <TitleUncorrect
                            onCloseAlert={ this.closeAlert.bind(this) }
                            onConfirmAlert ={ this.closeAlert.bind(this) } />
                    :null
                }
                <input type="text"
                       className="inputTitle"
                       id="inputTitle"
                       placeholder="Title"
                       required="required"
                       onChange={this.handleChangeInputTitle.bind(this)}
                />
                <hr/>
                <input  type="text"
                        className="input"
                        id="input"
                        placeholder="Type, what you want To Do..."
                        onChange={this.handleChangeInput.bind(this)}
                />
                <hr/>
                <div className="dead-line-date" >

                    <span>
                        Deadline Date :
                    </span>
                    <input type="date" ref='fullDate' id="fullDLD" style={{ color: 'grey' }}/>
                </div>
                <button className="add-button" id="add-btn" onClick={this.handleTodoAdd.bind(this)}>Add</button>
                <div className="editor-control" id="editorCtrl">
                    <button className="save-button" id="save-btn" onClick={this.handleTodoSave.bind(this)}>SAVE</button>                <button className="save-button" id="save-btn" onClick={this.handleTodoSave.bind(this)}>SAVE</button>
                    <button className="cancel-button" id="cancel-btn" onClick={this.handleCancelEdit.bind(this)}>CANCEL</button>
                </div>

            </div>
        );
    }

    _hideEditControl(){
        const cancelBtn = document.getElementById('cancel-btn');
        const saveBtn = document.getElementById('save-btn');
        const addBtn = document.getElementById('add-btn');
        addBtn.style.display = 'block';
        saveBtn.style.display = 'none';
        cancelBtn.style.display = "none";
    }
}