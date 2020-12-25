package valuegram

import com.shop.Product

class BootStrap {

    def init = { servletContext ->

        new Product( name: "PS 3",description: "ps3 Console").save()
        new Product( name: "PS 4",description: "ps4 Console").save()
        new Product( name: "PS 5",description: "ps5 Console").save()
        new Product( name: "X Box 360",description: "X Box 360").save()
        new Product( name: "Sony",description: "Sony").save()
        new Product( name: "Samsung",description: "Samsung").save()
        new Product( name: "BPL",description: "BPL TV").save()
        new Product( name: "Sanyo",description: "Sanyo TV").save()
        new Product( name: "Bravia",description: "Bravia TV").save()



    }
    def destroy = {
    }
}
