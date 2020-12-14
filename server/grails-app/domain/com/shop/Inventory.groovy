package com.shop

import com.usermanagement.Company
import grails.gorm.MultiTenant

class Inventory implements  MultiTenant<Inventory> {
    String companyid
    Product product
    Integer quantity
    Double costPrice
    Double retailPrice

    static constraints = {
    }
    static mapping = {
        tenantId name:'companyid'
    }
}
