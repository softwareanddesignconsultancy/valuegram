package valuegram

import grails.gorm.transactions.Transactional
import org.grails.core.DefaultGrailsDomainClass

@Transactional
class SlugGeneratorService {
    static transactional = false

    def grailsApplication

     def generateSlug(Class theClazz, String property, String value, Boolean strict = false) {

        if (!grailsApplication.isArtefactOfType("Domain", theClazz)) {
            return null
        }


        def grailsClass = new DefaultGrailsDomainClass(theClazz)

        // Check if the class has the property
        def persistentProperty = grailsClass.getPersistentProperty(property)
        if (!persistentProperty) {
            return null
        }


        def initialSlug = SlugCodec.encode(value, strict)
        def instance = theClazz."findBy${property.capitalize()}"(initialSlug)
        if (!instance) {
            return initialSlug
        }

        int c = 1
        def slug = ""

        while (true) {
            slug = "${initialSlug}-${c}"
            instance = theClazz."findBy${property.capitalize()}"(slug)

            if (!instance) {
                return slug
            } else {
                c++
            }
        }
    }
}
