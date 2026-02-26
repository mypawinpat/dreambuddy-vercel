export default defineNuxtRouteMiddleware(async(to, form) => {
    // console.log("Auth middleware triggered")
    const token = useCookie('dreambuddy_token').value

    // ถ้ามี token ให้ตรวจสอบความถูกต้อง
    if (!token) {
        // ตรวจสอบ token
        return navigateTo('/auth/login')
    // } else {
    //     return navigateTo('/')
    }
})