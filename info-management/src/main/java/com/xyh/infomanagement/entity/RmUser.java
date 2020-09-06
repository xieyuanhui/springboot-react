package com.xyh.infomanagement.entity;

import java.sql.Date;

public class RmUser {
    private String idUser;

    private String namLogin;

    private String namName;

    private String vluSex;

    private String vluCertificateType;

    private String idCertificate;

    private String numMobilePhone;

    private String txtEmail;

    private Date dateUserExpire;

    public String getIdUser() {
        return idUser;
    }

    public void setIdUser(String idUser) {
        this.idUser = idUser == null ? null : idUser.trim();
    }

    public String getNamLogin() {
        return namLogin;
    }

    public void setNamLogin(String namLogin) {
        this.namLogin = namLogin == null ? null : namLogin.trim();
    }

    public String getNamName() {
        return namName;
    }

    public void setNamName(String namName) {
        this.namName = namName == null ? null : namName.trim();
    }

    public String getVluSex() {
        return vluSex;
    }

    public void setVluSex(String vluSex) {
        this.vluSex = vluSex == null ? null : vluSex.trim();
    }

    public String getVluCertificateType() {
        return vluCertificateType;
    }

    public void setVluCertificateType(String vluCertificateType) {
        this.vluCertificateType = vluCertificateType == null ? null : vluCertificateType.trim();
    }

    public String getIdCertificate() {
        return idCertificate;
    }

    public void setIdCertificate(String idCertificate) {
        this.idCertificate = idCertificate == null ? null : idCertificate.trim();
    }

    public String getNumMobilePhone() {
        return numMobilePhone;
    }

    public void setNumMobilePhone(String numMobilePhone) {
        this.numMobilePhone = numMobilePhone == null ? null : numMobilePhone.trim();
    }

    public String getTxtEmail() {
        return txtEmail;
    }

    public void setTxtEmail(String txtEmail) {
        this.txtEmail = txtEmail == null ? null : txtEmail.trim();
    }

    public Date getDateUserExpire() {
        return dateUserExpire;
    }

    public void setDateUserExpire(Date dateUserExpire) {
        this.dateUserExpire = dateUserExpire;
    }
}