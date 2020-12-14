package com.shop


import grails.rest.*
import grails.converters.*

class ProductListController extends RestfulController {
    static responseFormats = ['json', 'xml']
    ProductListController() {
        super(Product)
    }

    @Override
    def index() {
        Product.list()
    }
}
