package com.shop


import grails.rest.*
import grails.converters.*

class PriceSearchController extends RestfulController {
    static responseFormats = ['json', 'xml']
    PriceSearchController() {
        super(Inventory)
    }

    @Override
    def index(Integer max) {
        params.max = (params.max=="all") ? countResources():Math.min(max ?: 10, 100)
        Long currentpage = Math.ceil((((params.max  as Long) + (params.int("offset")?:0 as Long)) ?: 0)/(params.max  as Long)) ?:0
        Long pagecount = Math.ceil(countResources()/params.max  as Long) ?:0

        return [
                inventoryList : listAllResources(params),
                inventoryCount: countResources(),
                inventoryPage:currentpage,
                inventoryPageCount:pagecount,
                max         : params.max ,
                offset      : params.int("offset") ?: 0,
                sort        : params.sort,
                order       : params.order
        ]
    }

    @Override
    boolean getReadOnly() {
        return true
    }


}
