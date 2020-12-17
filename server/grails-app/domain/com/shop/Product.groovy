package com.shop

class Product {
    String name
    String description


    static constraints = {
        name unique:true
        description nullable:true,blank:true
    }
}
