export function connection(mail: string, password: string): boolean {
        if (mail != "christopherbatrier@gmail.com" || password != "password") {
            return false
        }
        return true
}