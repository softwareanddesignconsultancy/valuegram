package com.shop

import grails.gorm.services.Service

@Service(Category)
interface CategoryService {

    Category get(Serializable id)

    List<Category> list(Map args)

    Long count()

    Category delete(Serializable id)

    Category save(Category category)

}
