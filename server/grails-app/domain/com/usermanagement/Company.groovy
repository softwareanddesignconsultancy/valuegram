package com.usermanagement

class Company {
    String companyid
    String name
    String email
    static constraints = {
        companyid nullable: false, blank: false, unique: true
        email nullable: false, blank: false, unique: true,email: true
    }
}
