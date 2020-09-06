import React, { Component } from "react";
import {DatePicker, Space} from "antd";
import moment from 'moment';

export default class UserEdit extends Component {
constructor(props) {
    super(props)
    this.state = {
        item: {},
        dateUserExpire1: "",
        sex: "",
        certificateType: ""
    }
}

componentDidMount() {
    this.getUser(this.props.match.params.id)
}

getUser(id) {
    console.log('getUser......');
    const url = `http://localhost:8080/info/api/rm_user/info/${id}`
    fetch(url, { method: "get" })
    .then(response => response.json())
    .then(result => {
        console.log(result)
        if (result.code === 200) {
            this.setState({
                item: result.data,
                sex: result.data.vluSex,
                certificateType: result.data.vluCertificateType,
                dateUserExpire1: result.data.dateUserExpire
            })
        }
    })
}

updateUser = () => {
    console.log('updateUser......');
    const param = {
        idUser: this.props.match.params.id,
        namLogin: this.namLogin.value,
        namName: this.namName.value,
        vluSex: this.state.sex,
        vluCertificateType: this.state.certificateType,
        idCertificate: this.idCertificate.value,
        numMobilePhone: this.numMobilePhone.value,
        txtEmail: this.txtEmail.value,
        dateUserExpire: this.state.dateUserExpire1
    }
    // const id = this.props.match.params.id
    const url = `http://localhost:8080/info/api/rm_user/info`
    fetch(url, {
    method: "put",
    body: JSON.stringify(param),
    headers: {
        "Content-Type": "application/json"
    }
    })
    .then(response => response.json())
    .then(result => {
        console.log(result)
        if (result.code === 200) {
            alert("更新成功")
            window.location.pathname = "/";
        } else {
            alert("更新失败")
        }
    })
}

    onChange = (date, dateString) => {
        console.log(date, dateString);
        this.setState({
            dateUserExpire1: dateString
        })
    }

    handleChange = e => {
        this.setState({
            sex: e.target.value
        });
    }

    handleChange1 = e => {
        this.setState({
            certificateType: e.target.value
        });
    }

render() {
    const item = this.state.item
    return (
    <div>
        <fieldset>
            <legend>添加用户</legend>
            <label>登录名: </label>
            <input type="text" name="namLogin" defaultValue={item.namLogin} style={{ width: 500 }} ref={namLogin => this.namLogin = namLogin} />
            <p />
            <label>用户名: </label>
            <textarea type="text" name="namName" defaultValue={item.namName} style={{ width: 500 }} ref={namName => this.namName = namName} />
            <p />
            <label>性别: </label>
            <select name="vluSex" value={this.state.sex} ref={vluSex => this.vluSex = vluSex} onChange={this.handleChange}>
                <option value="">--请选择--</option>
                <option value="女">女</option>
                <option value="男">男</option>
            </select>
            <p />
            <label>证件类型: </label>
            <select name="vluCertificateType" value={this.state.certificateType} ref={vluCertificateType => this.vluCertificateType = vluCertificateType} onChange={this.handleChange1}>
                <option value="">--请选择--</option>
                <option value="二代身份证">二代身份证</option>
                <option value="军人证">军人证</option>
                <option value="港澳通行证">港澳通行证</option>
                <option value="护照">护照</option>
            </select>
            <p />
            <label>证件号: </label>
            <textarea type="text" name="idCertificate" defaultValue={item.idCertificate} style={{ width: 500 }} ref={idCertificate => this.idCertificate = idCertificate} />
            <p />
            <label>移动电话: </label>
            <textarea type="text" name="numMobilePhone" defaultValue={item.numMobilePhone} style={{ width: 500 }} ref={numMobilePhone => this.numMobilePhone = numMobilePhone} />
            <p />
            <label>EMAIL: </label>
            <textarea type="text" name="txtEmail" defaultValue={item.txtEmail} style={{ width: 500 }} ref={txtEmail => this.txtEmail = txtEmail} />
            <p />
            <label>身份到期日: </label>
            <Space direction="vertical">
                <DatePicker defaultValue={moment(item.dateUserExpire)} onChange={this.onChange} />
            </Space>
            <p />
            <button onClick={this.updateUser}>修改</button>
        </fieldset>
    </div>
    )
}
}