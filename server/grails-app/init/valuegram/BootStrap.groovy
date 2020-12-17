package valuegram

import com.shop.Product

class BootStrap {

    def init = { servletContext ->
        new Product( name: "PS 3",description: "ps3 Console").save()
        new Product( name: "PS 4",description: "ps4 Console").save()
        new Product( name: "PS 5",description: "ps5 Console").save()


    }
    def destroy = {
    }
}
