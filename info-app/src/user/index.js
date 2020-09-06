import React, { Component } from "react";

export default class UserIndex extends Component {
constructor(props) {
    super(props)
    this.state = {
    items: []
    }
}

componentDidMount() {
    this.queryAllUsers()
}

queryAllUsers() {
    console.log('queryAllUsers......');
    const url = "http://localhost:8080/info/api/rm_user/info"
    fetch(url, { method: "get" })
    .then(response => response.json())
    .then(result => {
        console.log(result)
        if (result.code === 200) {
            this.setState({
                items: result.data
            })
        }
    })
}

addUser = () => {
    console.log('addUser');
    window.location.pathname = "/user/add";
}

editUser = (id) => {
    console.log('editUser');
    window.location.pathname = `/user/${id}/edit`;
}

deleteUser = (id) => {
    console.log('deleteUser:' + id);
    const url = `http://localhost:8080/info/api/rm_user/info/${id}`
    fetch(url, {
    method: "delete"
    })
    .then(response => response.json())
    .then(result => {
        console.log(result)
        if (result.code === 200) {
            alert("删除成功")
            window.location.pathname = "/";
        } else {
            alert("删除失败")
        }
    })
}

render() {
    const items = this.state.items || []
    return (
    <div>
        <button onClick={this.addUser}>添加</button>
        <table>
        <thead>
            <tr>
            <th>序号</th>
            <th>登录名</th>
            <th>用户名</th>
            <th>性别</th>
            <th>证件类型</th>
            <th>证件号</th>
            <th>移动电话</th>
            <th>EMAIL</th>
            <th>身份到期日</th>
            </tr>
        </thead>
        <tbody>
            {
            items.map(
                (item, index) =>
                <tr key={item.idUser}>
                    <td>{index+1}</td>
                    <td>{item.namLogin}</td>
                    <td>{item.namName}</td>
                    <td>{item.vluSex}</td>
                    <td>{item.vluCertificateType}</td>
                    <td>{item.idCertificate}</td>
                    <td>{item.numMobilePhone}</td>
                    <td>{item.txtEmail}</td>
                    <td>{item.dateUserExpire}</td>
                    <td>
                    <button onClick={() => this.editUser(item.idUser)}>编辑</button>
                    <button onClick={() => this.deleteUser(item.idUser)}>删除</button>
                    </td>
                </tr>
            )}
        </tbody>
        </table>
    </div>
    )
}
}