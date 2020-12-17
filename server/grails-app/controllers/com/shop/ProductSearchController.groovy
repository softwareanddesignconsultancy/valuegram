package com.shop


import grails.rest.*
import grails.converters.*

class ProductSearchController {
	static responseFormats = ['json', 'xml']


    ProductService productService

    def index() {
        params.max = productService.count()
        respond productService.list(params)
    }
}
