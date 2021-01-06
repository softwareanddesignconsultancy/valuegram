package valuegram

import com.shop.Category
import com.shop.Product

class BootStrap {

    def init = { servletContext ->


        def electronics = new Category(name: "Electronics",description: "Electronics").save()
        def computer = new Category(name: "Computer",description: "Computer").save()
        def gadgets = new Category(name: "Gadgets",description: "Gadgets").save()



        new Product( name: "PS 3",description: "ps3 Console").addToCategories(electronics).addToCategories(computer).addToCategories(gadgets).save()
        new Product( name: "PS 4",description: "ps4 Console").addToCategories(electronics).addToCategories(computer).addToCategories(gadgets).save()
        new Product( name: "PS 5",description: "ps5 Console").addToCategories(electronics).addToCategories(computer).addToCategories(gadgets).save()
        new Product( name: "X Box 360",description: "X Box 360").addToCategories(electronics).addToCategories(computer).addToCategories(gadgets).save()
        new Product( name: "Sony",description: "Sony").addToCategories(electronics).addToCategories(computer).addToCategories(gadgets).save()
        new Product( name: "Samsung",description: "Samsung").addToCategories(electronics).addToCategories(computer).addToCategories(gadgets).save()
        new Product( name: "BPL",description: "BPL TV").addToCategories(electronics).addToCategories(computer).addToCategories(gadgets).save()
        new Product( name: "Sanyo",description: "Sanyo TV").addToCategories(electronics).addToCategories(computer).addToCategories(gadgets).save()
        new Product( name: "Bravia",description: "Bravia TV").addToCategories(electronics).addToCategories(computer).addToCategories(gadgets).save()



    }
    def destroy = {
    }
}
