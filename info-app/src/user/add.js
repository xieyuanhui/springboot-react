import React, { Component } from "react";
import { DatePicker, Space } from 'antd';

export default class UserAdd extends Component {
constructor(props) {
    super(props)
    this.state = {
    dateUserExpire1: ""
    }
}

componentDidMount() {
}

createUser = () => {
    console.log('addUser');
    const param = {
        namLogin: this.namLogin.value,
        namName: this.namName.value,
        vluSex: this.vluSex.value,
        vluCertificateType: this.vluCertificateType.value,
        idCertificate: this.idCertificate.value,
        numMobilePhone: this.numMobilePhone.value,
        txtEmail: this.txtEmail.value,
        dateUserExpire: this.state.dateUserExpire1
    }
    console.log(JSON.stringify(param));
    const url = "http://localhost:8080/info/api/rm_user/info"
    fetch(url, {
    method: "post",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(param)
    })
    .then(response => response.json())
    .then(result => {
        console.log(result)
        if (result.code === 200) {
            alert("添加成功")
            window.location.pathname = "/";
        } else {
            alert("添加失败")
        }
    })
}

onChange = (date, dateString) => {
    console.log(date, dateString);
    this.setState({
        dateUserExpire1: dateString
    })
}

render() {
    return (
    <div>
        <fieldset>
        <legend>添加用户</legend>
        <label>登录名: </label>
        <input type="text" name="namLogin" style={{ width: 500 }} ref={namLogin => this.namLogin = namLogin} />
        <p />
        <label>用户名: </label>
        <textarea type="text" name="namName" style={{ width: 500 }} ref={namName => this.namName = namName} />
        <p />
        <label>性别: </label>
        <select name="vluSex" ref={vluSex => this.vluSex = vluSex}>
            <option value="">--请选择--</option>
            <option value="女">女</option>
            <option value="男">男</option>
        </select>
        <p />
        <label>证件类型: </label>
        <select name="vluCertificateType" ref={vluCertificateType => this.vluCertificateType = vluCertificateType}>
            <option value="">--请选择--</option>
            <option value="二代身份证">二代身份证</option>
            <option value="军人证">军人证</option>
            <option value="港澳通行证">港澳通行证</option>
            <option value="护照">护照</option>
        </select>
        <p />
        <label>证件号: </label>
        <textarea type="text" name="idCertificate" style={{ width: 500 }} ref={idCertificate => this.idCertificate = idCertificate} />
        <p />
        <label>移动电话: </label>
        <textarea type="text" name="numMobilePhone" style={{ width: 500 }} ref={numMobilePhone => this.numMobilePhone = numMobilePhone} />
        <p />
        <label>EMAIL: </label>
        <textarea type="text" name="txtEmail" style={{ width: 500 }} ref={txtEmail => this.txtEmail = txtEmail} />
        <p />
        <label>身份到期日: </label>
        <Space direction="vertical">
            <DatePicker onChange={this.onChange} />
        </Space>
        <p />
        <button onClick={this.createUser}>新增</button>
        </fieldset>
    </div >
    )
}
}