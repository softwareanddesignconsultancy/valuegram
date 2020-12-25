import com.usermanagement.CustomTenentResolver
import com.usermanagement.UserPasswordEncoderListener
// Place your Spring DSL code here
beans = {
    userPasswordEncoderListener(UserPasswordEncoderListener)
    customTenentResolver(CustomTenentResolver)
}