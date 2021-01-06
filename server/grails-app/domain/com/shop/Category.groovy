package com.shop



class Category {

    String name
    String slug
    String description
    String avatar


    def beforeInsert() {
        this.slug = name.replaceAll(" ", "-").toLowerCase()

    }

    def beforeUpdate() {
        if (isDirty('name')) {
            this.slug = name.replaceAll(" ", "-").toLowerCase()
        }
    }

    static hasMany = [products:Product]





    static constraints = {
        name unique:true
        slug nullable:true,blank:true
        avatar nullable:true,blank:true

        description nullable:true,blank:true
    }
}
