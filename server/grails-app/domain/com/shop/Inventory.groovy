package com.shop

import grails.gorm.MultiTenant

class Inventory implements  MultiTenant<Inventory> {
    String username
    Product product
    Integer quantity
    Double costPrice
    Double retailPrice

    static constraints = {
    }
    static mapping = {
        tenantId name:'username'
    }
}
