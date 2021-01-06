package com.usermanagement

import groovy.transform.EqualsAndHashCode
import groovy.transform.ToString
import grails.compiler.GrailsCompileStatic

@GrailsCompileStatic
@EqualsAndHashCode(includes='username')
@ToString(includes='username', includeNames=true, includePackage=false)
class User implements Serializable {

    private static final long serialVersionUID = 1

    String username
    String email
    String mobile
    String password
    boolean enabled = true
    boolean accountExpired
    boolean accountLocked
    boolean passwordExpired

    static hasMany = [followed:User]

    Set<Group> getAuthorities() {
        (UserGroup.findAllByUser(this) as List<UserGroup>)*.group as Set<Group>
    }

    static constraints = {
        password nullable: false, blank: false, password: true
        username nullable: false, blank: false, unique: true,email: true
    }

    static mapping = {
	    password column: '`password`'
    }
}
