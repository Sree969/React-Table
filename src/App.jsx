import React,{Component} from 'react'
export default class Table extends Component{
    constructor(props){
                 super(props)
                 this.state={
                     thead:[],
                     tbody:[],
                     api:"https://jsonplaceholder.typicode.com/users"
                 }
             }
    componentDidMount(){
        let a=fetch(this.state.api);
        a.then(res=>res.json()).then(val=>{
                        // console.log(val);
                        this.setState({thead:Object.keys(val[0]).slice(0,4)})
                        this.setState({tbody:val})
        })
        a.catch(x=>console.log(x));

    }
    render(){
        // console.log(this.state.thead);
        // let b=this.state.tbody.slice(0,4);
        return(
            <>
                <table border={2}>
                    <thead>
                        <tr>
                            {this.state.thead.map((x,ind)=>{
                                <th key={ind}>{x}</th>
                            })}
                        </tr>
                    </thead>
                    {/* <tr>
                        {this.state.thead.map(x => <th>{x}</th>)}
                    </tr> */}

                    <tbody>
                    {this.state.tbody.slice(0,4).map(y=>{
                        return(
                            <tr key={y.id}>
                                <td>{y.id}</td>
                                <td>{y.name}</td>
                                <td>{y.username}</td>
                                <td>{y.email}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                    {/* {this.state.tbody.slice(0,4).map(y=>{
                        return(
                            <tr key={y.id}>
                                <td>{y.id}</td>
                                <td>{y.name}</td>
                                <td>{y.username}</td>
                                <td>{y.email}</td>
                            </tr>
                        )
                    })} */}
                </table>
            </>
         )
     }
 }