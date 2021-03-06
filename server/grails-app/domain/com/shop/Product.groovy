package com.shop

import valuegram.SlugGeneratorService


class Product {


    String name
    String slug
    String description
    String avatar
    String amazonUrl
    String flipkartUrl
    String ebayUrl


    def beforeInsert() {
        this.slug = name.replaceAll(" ", "-").toLowerCase()

    }

    def beforeUpdate() {
        if (isDirty('name')) {
            this.slug = name.replaceAll(" ", "-").toLowerCase()
        }
    }





    static hasMany = [categories:Category]

    static belongsTo = Category




    static constraints = {
        name unique:true
        slug nullable:true,blank:true
        avatar nullable:true,blank:true
        description nullable:true,blank:true
        amazonUrl nullable:true,blank:true
        flipkartUrl nullable:true,blank:true
        ebayUrl nullable:true,blank:true
    }
}
