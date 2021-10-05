import { User } from "@/store/user";

export function isSimilare(fstPwd: string, scdPwd: string): boolean {
    if (fstPwd !== scdPwd) {
        return false;
    }
    return true;
}