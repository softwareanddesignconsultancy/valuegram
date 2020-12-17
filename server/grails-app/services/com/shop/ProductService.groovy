package com.shop

import grails.gorm.services.Service

@Service(Product)
interface ProductService {

    Product get(Serializable id)

    List<Product> list(Map args)

    Long count()

    Product delete(Serializable id)

    Product save(Product product)

}
