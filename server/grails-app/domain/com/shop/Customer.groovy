package com.shop

import grails.gorm.MultiTenant

class Customer implements  MultiTenant<Customer> {
    String username
    String name
    String email
    String mobile
    String address

    static constraints = {
    }

    static mapping = {
        tenantId name:'username'
    }
}
