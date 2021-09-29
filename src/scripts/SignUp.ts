import { User } from "@/store/user";

export function isSimilare(fstPwd: string, scdPwd: string): boolean {
    if (fstPwd !== scdPwd) {
        return false;
    }
    return true;
}

// export function isExist(email: string): boolean {
//     for(let i = 0; i < user.length; i++) {
//         if (email === user[i].email) {
//             return true;
//         }
//     }
//     return false;
// }