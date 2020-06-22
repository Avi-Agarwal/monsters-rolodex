import React, {Component, component} from 'react';
import './App.css';
import testData from './data/test.json';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import {SwitchData} from './components/buttons/switch-data-button.component';
import './components/buttons/switch-data-button.styles.css'


class App extends Component{
    constructor() {
        super();
        this.state = {
            myName: 'Avi',
            monsters: [],
            tempData: testData,
            dataTracker: 'Switch to Local Data',
            searchField: '',
        };

        // this.handleChange = this.handleChange.bind(this)
    }


    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({monsters: users, tempData: users}))
    }

    switchData= () => {
        if (this.state.dataTracker === 'Switch to Local Data') {
            this.setState({tempData: this.state.monsters, monsters: testData,dataTracker: 'Switch to Online Data'})
        }
        else {
            this.setState({monsters: this.state.tempData, tempData: testData,dataTracker: 'Switch to Local Data'})
        }
    }

    handleChange = (e) => {
        this.setState({searchField: e.target.value})
    }

    render() {
        const { monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter(monster =>
            monster.name.toLocaleLowerCase().includes(searchField.toLowerCase())
        )
        return (
            <div className="App">
                <pre>
                </pre>
                {/*<SwitchData*/}
                {/*    handleClick = {this.switchData()}*/}
                {/*    buttonTexts = {this.state.dataTracker}*/}
                {/*/>*/}
                <button className='button' onClick={this.switchData} >
                    {this.state.dataTracker}
                </button>
                <pre>
                </pre>
                <h1> Monsters Rolodex</h1>
                <SearchBox
                    placeholder = 'search for monsters'
                    handleChange={this.handleChange}
                />
                <pre>
                </pre>
                <CardList monsters = {filteredMonsters}> </CardList>
            </div>
        );
    }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hi I'm Avi
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
